import { useState, useEffect, useRef } from 'react';

interface ScreenTimeData {
  todayTotal: number; // in minutes
  blueLightLevel: 'Low' | 'Medium' | 'High';
  protectionScore: number;
  isActive: boolean;
}

export function useScreenTime() {
  const [screenTime, setScreenTime] = useState<ScreenTimeData>({
    todayTotal: 0,
    blueLightLevel: 'Low',
    protectionScore: 100,
    isActive: false
  });

  const startTime = useRef<number>(Date.now());
  const sessionStartRef = useRef<number>(Date.now());
  const intervalRef = useRef<NodeJS.Timeout>();

  const calculateBlueLightLevel = (totalMinutes: number, currentHour: number): 'Low' | 'Medium' | 'High' => {
    // Higher blue light exposure during day hours and with more screen time
    const isDayTime = currentHour >= 6 && currentHour <= 18;
    const isEveningTime = currentHour >= 19 && currentHour <= 23;
    
    if (totalMinutes > 480) { // More than 8 hours
      return isDayTime ? 'High' : 'Medium';
    } else if (totalMinutes > 240) { // More than 4 hours
      return isDayTime ? 'Medium' : isEveningTime ? 'High' : 'Low';
    } else {
      return isEveningTime ? 'Medium' : 'Low';
    }
  };

  const calculateProtectionScore = (totalMinutes: number, blueLightLevel: string): number => {
    let baseScore = Math.max(0, 100 - (totalMinutes / 10)); // Decrease by usage
    
    if (blueLightLevel === 'High') baseScore -= 20;
    else if (blueLightLevel === 'Medium') baseScore -= 10;
    
    return Math.max(10, Math.min(100, Math.round(baseScore)));
  };

  const updateScreenTime = () => {
    const stored = localStorage.getItem('glareGuard_screenTime');
    const today = new Date().toDateString();
    let data = stored ? JSON.parse(stored) : {};
    
    if (data.date !== today) {
      data = { date: today, totalMinutes: 0 };
    }
    
    const currentSessionMinutes = Math.floor((Date.now() - sessionStartRef.current) / 60000);
    const totalMinutes = data.totalMinutes + currentSessionMinutes;
    const currentHour = new Date().getHours();
    
    const blueLightLevel = calculateBlueLightLevel(totalMinutes, currentHour);
    const protectionScore = calculateProtectionScore(totalMinutes, blueLightLevel);
    
    setScreenTime({
      todayTotal: totalMinutes,
      blueLightLevel,
      protectionScore,
      isActive: true
    });
    
    // Update stored data
    localStorage.setItem('glareGuard_screenTime', JSON.stringify({
      date: today,
      totalMinutes
    }));
    
    sessionStartRef.current = Date.now();
  };

  useEffect(() => {
    // Initialize with stored data
    const stored = localStorage.getItem('glareGuard_screenTime');
    const today = new Date().toDateString();
    
    if (stored) {
      const data = JSON.parse(stored);
      if (data.date === today) {
        const currentHour = new Date().getHours();
        const blueLightLevel = calculateBlueLightLevel(data.totalMinutes, currentHour);
        const protectionScore = calculateProtectionScore(data.totalMinutes, blueLightLevel);
        
        setScreenTime({
          todayTotal: data.totalMinutes,
          blueLightLevel,
          protectionScore,
          isActive: true
        });
      }
    }

    // Start tracking
    intervalRef.current = setInterval(updateScreenTime, 30000); // Update every 30 seconds

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateScreenTime();
      } else {
        sessionStartRef.current = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      updateScreenTime();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      updateScreenTime();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}.${Math.round(mins / 6)}h` : `${mins}m`;
  };

  return {
    ...screenTime,
    formattedTime: formatTime(screenTime.todayTotal)
  };
}