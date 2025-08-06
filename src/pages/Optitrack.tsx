import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { Calendar } from "/src/components/ui/calendar.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "/src/components/ui/popover.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Calendar as CalendarIcon, 
  Plus, 
  BarChart3,
  Activity,
  Minus
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "/src/lib/utils.ts";

// Mock data for demonstration
const mockPowerHistory = [
  { date: "2024-01-15", leftEye: -2.25, rightEye: -2.50, astigmatism: { left: -0.50, right: -0.75 } },
  { date: "2024-06-20", leftEye: -2.50, rightEye: -2.75, astigmatism: { left: -0.50, right: -0.75 } },
  { date: "2024-12-10", leftEye: -2.75, rightEye: -3.00, astigmatism: { left: -0.75, right: -1.00 } },
];

export default function Optitrack() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    leftEye: "",
    rightEye: "",
    leftAstigmatism: "",
    rightAstigmatism: "",
    notes: ""
  });

  const handleAddEntry = () => {
    // Here you would save the entry to your database
    console.log("Adding new entry:", { date: selectedDate, ...newEntry });
    setShowAddForm(false);
    setNewEntry({
      leftEye: "",
      rightEye: "",
      leftAstigmatism: "",
      rightAstigmatism: "",
      notes: ""
    });
  };

  const getTrend = (current: number, previous: number) => {
    if (Math.abs(current) > Math.abs(previous)) {
      return { type: "increase", icon: TrendingDown, color: "text-destructive" };
    } else if (Math.abs(current) < Math.abs(previous)) {
      return { type: "decrease", icon: TrendingUp, color: "text-success" };
    }
    return { type: "stable", icon: Minus, color: "text-muted-foreground" };
  };

  const latestEntry = mockPowerHistory[mockPowerHistory.length - 1];
  const previousEntry = mockPowerHistory[mockPowerHistory.length - 2];
  
  const leftTrend = previousEntry ? getTrend(latestEntry.leftEye, previousEntry.leftEye) : null;
  const rightTrend = previousEntry ? getTrend(latestEntry.rightEye, previousEntry.rightEye) : null;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Optitrack</h1>
          <p className="text-lg text-muted-foreground">Track your eye power progression over time</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="h-5 w-5" />
          Add Reading
        </Button>
      </div>

      {/* Current Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Left Eye
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">{latestEntry.leftEye}</p>
                <p className="text-sm text-muted-foreground">Diopters</p>
              </div>
              {leftTrend && (
                <div className="flex items-center gap-1">
                  <leftTrend.icon className={`h-5 w-5 ${leftTrend.color}`} />
                  <span className={`text-sm ${leftTrend.color}`}>
                    {leftTrend.type}
                  </span>
                </div>
              )}
            </div>
            {latestEntry.astigmatism.left !== 0 && (
              <div className="mt-2 pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  Astigmatism: {latestEntry.astigmatism.left}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Eye className="h-5 w-5 text-secondary" />
              Right Eye
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">{latestEntry.rightEye}</p>
                <p className="text-sm text-muted-foreground">Diopters</p>
              </div>
              {rightTrend && (
                <div className="flex items-center gap-1">
                  <rightTrend.icon className={`h-5 w-5 ${rightTrend.color}`} />
                  <span className={`text-sm ${rightTrend.color}`}>
                    {rightTrend.type}
                  </span>
                </div>
              )}
            </div>
            {latestEntry.astigmatism.right !== 0 && (
              <div className="mt-2 pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  Astigmatism: {latestEntry.astigmatism.right}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" />
              Last Checkup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">
              {format(new Date(latestEntry.date), "MMM dd")}
            </p>
            <p className="text-sm text-muted-foreground">
              {format(new Date(latestEntry.date), "yyyy")}
            </p>
            <div className="mt-2 pt-2 border-t">
              <Badge variant="secondary" className="text-xs">
                {mockPowerHistory.length} total readings
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Entry Form */}
      {showAddForm && (
        <Card className="bg-gradient-card border-0 shadow-custom-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Eye Power Reading
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date of Checkup</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Left Eye</h3>
                <div className="space-y-2">
                  <Label htmlFor="leftEye">Spherical Power (D)</Label>
                  <Input
                    id="leftEye"
                    type="number"
                    step="0.25"
                    placeholder="-2.50"
                    value={newEntry.leftEye}
                    onChange={(e) => setNewEntry({ ...newEntry, leftEye: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leftAstigmatism">Astigmatism (D)</Label>
                  <Input
                    id="leftAstigmatism"
                    type="number"
                    step="0.25"
                    placeholder="-0.50"
                    value={newEntry.leftAstigmatism}
                    onChange={(e) => setNewEntry({ ...newEntry, leftAstigmatism: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Right Eye</h3>
                <div className="space-y-2">
                  <Label htmlFor="rightEye">Spherical Power (D)</Label>
                  <Input
                    id="rightEye"
                    type="number"
                    step="0.25"
                    placeholder="-2.75"
                    value={newEntry.rightEye}
                    onChange={(e) => setNewEntry({ ...newEntry, rightEye: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rightAstigmatism">Astigmatism (D)</Label>
                  <Input
                    id="rightAstigmatism"
                    type="number"
                    step="0.25"
                    placeholder="-0.75"
                    value={newEntry.rightAstigmatism}
                    onChange={(e) => setNewEntry({ ...newEntry, rightAstigmatism: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleAddEntry} className="flex-1">
                Save Reading
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Power History */}
      <Card className="bg-gradient-card border-0 shadow-custom-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Power History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPowerHistory.map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{format(new Date(entry.date), "MMM dd, yyyy")}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Left Eye</p>
                    <p className="text-lg font-bold">{entry.leftEye}D</p>
                    {entry.astigmatism.left !== 0 && (
                      <p className="text-xs text-muted-foreground">Astig: {entry.astigmatism.left}D</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Right Eye</p>
                    <p className="text-lg font-bold">{entry.rightEye}D</p>
                    {entry.astigmatism.right !== 0 && (
                      <p className="text-xs text-muted-foreground">Astig: {entry.astigmatism.right}D</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}