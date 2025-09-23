import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Eye, RotateCcw, CheckCircle, XCircle } from "lucide-react";

interface IshiharaPlate {
  id: number;
  image: string;
  correctAnswer: string;
  description: string;
  colorBlindType?: string;
}

// Function to generate random dots in a circular pattern
const generateRandomDots = (centerX: number, centerY: number, radius: number, count: number, minSize: number, maxSize: number, color: string) => {
  const dots = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random()) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    const size = minSize + Math.random() * (maxSize - minSize);
    dots.push(`<circle cx="${x}" cy="${y}" r="${size}" fill="${color}"/>`);
  }
  return dots.join('');
};

// Function to generate dots forming a specific pattern
const generateNumberDots = (numberPath: string, color: string) => {
  return `<g fill="${color}">${numberPath}</g>`;
};

const ishiharaPlates: IshiharaPlate[] = [
  {
    id: 1,
    image: `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="145" fill="#ffffff"/>
      <defs>
        <mask id="circleMask">
          <circle cx="150" cy="150" r="140" fill="white"/>
        </mask>
      </defs>
      <g mask="url(#circleMask)">
        ${generateRandomDots(150, 150, 135, 1200, 3, 8, '#7BA05B')}
        ${generateRandomDots(150, 150, 135, 400, 2, 6, '#8FB76F')}
        ${generateNumberDots(`
          <!-- Number 1 -->
          <circle cx="110" cy="75" r="5"/>
          <circle cx="115" cy="80" r="4"/>
          <circle cx="120" cy="85" r="5"/>
          <circle cx="125" cy="90" r="4"/>
          <circle cx="127" cy="95" r="5"/>
          <circle cx="129" cy="100" r="4"/>
          <circle cx="131" cy="105" r="5"/>
          <circle cx="133" cy="110" r="4"/>
          <circle cx="135" cy="115" r="5"/>
          <circle cx="137" cy="120" r="4"/>
          <circle cx="139" cy="125" r="5"/>
          <circle cx="141" cy="130" r="4"/>
          <circle cx="143" cy="135" r="5"/>
          <circle cx="145" cy="140" r="4"/>
          <circle cx="147" cy="145" r="5"/>
          <circle cx="149" cy="150" r="4"/>
          <circle cx="151" cy="155" r="5"/>
          <circle cx="153" cy="160" r="4"/>
          <circle cx="155" cy="165" r="5"/>
          <circle cx="157" cy="170" r="4"/>
          <circle cx="159" cy="175" r="5"/>
          <circle cx="161" cy="180" r="4"/>
          <circle cx="163" cy="185" r="5"/>
          <circle cx="165" cy="190" r="4"/>
          <circle cx="167" cy="195" r="5"/>
          <circle cx="169" cy="200" r="4"/>
          <circle cx="171" cy="205" r="5"/>
          <circle cx="173" cy="210" r="4"/>
          <circle cx="175" cy="215" r="5"/>
          <circle cx="177" cy="220" r="4"/>
          <circle cx="179" cy="225" r="5"/>
          
          <!-- Number 2 -->
          <circle cx="190" cy="75" r="5"/>
          <circle cx="195" cy="75" r="4"/>
          <circle cx="200" cy="75" r="5"/>
          <circle cx="205" cy="75" r="4"/>
          <circle cx="210" cy="75" r="5"/>
          <circle cx="215" cy="80" r="4"/>
          <circle cx="220" cy="85" r="5"/>
          <circle cx="225" cy="90" r="4"/>
          <circle cx="227" cy="95" r="5"/>
          <circle cx="229" cy="100" r="4"/>
          <circle cx="231" cy="105" r="5"/>
          <circle cx="233" cy="110" r="4"/>
          <circle cx="235" cy="115" r="5"/>
          <circle cx="230" cy="120" r="4"/>
          <circle cx="225" cy="125" r="5"/>
          <circle cx="220" cy="130" r="4"/>
          <circle cx="215" cy="135" r="5"/>
          <circle cx="210" cy="140" r="4"/>
          <circle cx="205" cy="145" r="5"/>
          <circle cx="200" cy="150" r="4"/>
          <circle cx="195" cy="155" r="5"/>
          <circle cx="190" cy="160" r="4"/>
          <circle cx="188" cy="165" r="5"/>
          <circle cx="190" cy="170" r="4"/>
          <circle cx="195" cy="175" r="5"/>
          <circle cx="200" cy="180" r="4"/>
          <circle cx="205" cy="185" r="5"/>
          <circle cx="210" cy="190" r="4"/>
          <circle cx="215" cy="195" r="5"/>
          <circle cx="220" cy="200" r="4"/>
          <circle cx="225" cy="205" r="5"/>
          <circle cx="227" cy="210" r="4"/>
          <circle cx="229" cy="215" r="5"/>
          <circle cx="231" cy="220" r="4"/>
          <circle cx="233" cy="225" r="5"/>
          <circle cx="230" cy="225" r="4"/>
          <circle cx="225" cy="225" r="5"/>
          <circle cx="220" cy="225" r="4"/>
          <circle cx="215" cy="225" r="5"/>
          <circle cx="210" cy="225" r="4"/>
          <circle cx="205" cy="225" r="5"/>
          <circle cx="200" cy="225" r="4"/>
          <circle cx="195" cy="225" r="5"/>
          <circle cx="190" cy="225" r="4"/>
        `, '#E86A47')}
      </g>
    </svg>`)}`,
    correctAnswer: "12",
    description: "Control plate - Everyone should see this number"
  },
  {
    id: 2,
    image: `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="145" fill="#ffffff"/>
      <defs>
        <mask id="circleMask2">
          <circle cx="150" cy="150" r="140" fill="white"/>
        </mask>
      </defs>
      <g mask="url(#circleMask2)">
        ${generateRandomDots(150, 150, 135, 1100, 3, 8, '#7DA05B')}
        ${generateRandomDots(150, 150, 135, 450, 2, 6, '#8FB76F')}
        ${generateNumberDots(`
          <!-- Number 8 upper circle -->
          <circle cx="130" cy="90" r="5"/>
          <circle cx="135" cy="88" r="4"/>
          <circle cx="140" cy="87" r="5"/>
          <circle cx="145" cy="86" r="4"/>
          <circle cx="150" cy="85" r="5"/>
          <circle cx="155" cy="86" r="4"/>
          <circle cx="160" cy="87" r="5"/>
          <circle cx="165" cy="88" r="4"/>
          <circle cx="170" cy="90" r="5"/>
          <circle cx="125" cy="95" r="4"/>
          <circle cx="175" cy="95" r="5"/>
          <circle cx="122" cy="100" r="4"/>
          <circle cx="178" cy="100" r="5"/>
          <circle cx="120" cy="105" r="4"/>
          <circle cx="180" cy="105" r="5"/>
          <circle cx="122" cy="110" r="4"/>
          <circle cx="178" cy="110" r="5"/>
          <circle cx="125" cy="115" r="4"/>
          <circle cx="175" cy="115" r="5"/>
          <circle cx="130" cy="120" r="4"/>
          <circle cx="170" cy="120" r="5"/>
          
          <!-- Middle horizontal line -->
          <circle cx="135" cy="125" r="4"/>
          <circle cx="140" cy="125" r="5"/>
          <circle cx="145" cy="125" r="4"/>
          <circle cx="150" cy="125" r="5"/>
          <circle cx="155" cy="125" r="4"/>
          <circle cx="160" cy="125" r="5"/>
          <circle cx="165" cy="125" r="4"/>
          
          <!-- Lower circle -->
          <circle cx="120" cy="130" r="5"/>
          <circle cx="180" cy="130" r="4"/>
          <circle cx="118" cy="135" r="5"/>
          <circle cx="182" cy="135" r="4"/>
          <circle cx="116" cy="140" r="5"/>
          <circle cx="184" cy="140" r="4"/>
          <circle cx="115" cy="145" r="5"/>
          <circle cx="185" cy="145" r="4"/>
          <circle cx="114" cy="150" r="5"/>
          <circle cx="186" cy="150" r="4"/>
          <circle cx="115" cy="155" r="5"/>
          <circle cx="185" cy="155" r="4"/>
          <circle cx="116" cy="160" r="5"/>
          <circle cx="184" cy="160" r="4"/>
          <circle cx="118" cy="165" r="5"/>
          <circle cx="182" cy="165" r="4"/>
          <circle cx="120" cy="170" r="5"/>
          <circle cx="180" cy="170" r="4"/>
          <circle cx="125" cy="175" r="5"/>
          <circle cx="175" cy="175" r="4"/>
          <circle cx="130" cy="180" r="5"/>
          <circle cx="170" cy="180" r="4"/>
          <circle cx="135" cy="182" r="5"/>
          <circle cx="140" cy="183" r="4"/>
          <circle cx="145" cy="184" r="5"/>
          <circle cx="150" cy="185" r="4"/>
          <circle cx="155" cy="184" r="5"/>
          <circle cx="160" cy="183" r="4"/>
          <circle cx="165" cy="182" r="5"/>
        `, '#E86A47')}
      </g>
    </svg>`)}`,
    correctAnswer: "8",
    description: "Red-green deficiency test - Normal vision sees 8"
  },
  {
    id: 3,
    image: `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="145" fill="#ffffff"/>
      <defs>
        <mask id="circleMask3">
          <circle cx="150" cy="150" r="140" fill="white"/>
        </mask>
      </defs>
      <g mask="url(#circleMask3)">
        ${generateRandomDots(150, 150, 135, 1000, 3, 8, '#A67C52')}
        ${generateRandomDots(150, 150, 135, 400, 2, 6, '#B8966B')}
        ${generateNumberDots(`
          <!-- Number 2 -->
          <circle cx="105" cy="85" r="5"/>
          <circle cx="110" cy="85" r="4"/>
          <circle cx="115" cy="85" r="5"/>
          <circle cx="120" cy="85" r="4"/>
          <circle cx="125" cy="85" r="5"/>
          <circle cx="130" cy="90" r="4"/>
          <circle cx="135" cy="95" r="5"/>
          <circle cx="140" cy="100" r="4"/>
          <circle cx="142" cy="105" r="5"/>
          <circle cx="144" cy="110" r="4"/>
          <circle cx="146" cy="115" r="5"/>
          <circle cx="144" cy="120" r="4"/>
          <circle cx="140" cy="125" r="5"/>
          <circle cx="135" cy="130" r="4"/>
          <circle cx="130" cy="135" r="5"/>
          <circle cx="125" cy="140" r="4"/>
          <circle cx="120" cy="145" r="5"/>
          <circle cx="115" cy="150" r="4"/>
          <circle cx="110" cy="155" r="5"/>
          <circle cx="105" cy="160" r="4"/>
          <circle cx="103" cy="165" r="5"/>
          <circle cx="105" cy="170" r="4"/>
          <circle cx="110" cy="175" r="5"/>
          <circle cx="115" cy="180" r="4"/>
          <circle cx="120" cy="185" r="5"/>
          <circle cx="125" cy="190" r="4"/>
          <circle cx="130" cy="195" r="5"/>
          <circle cx="135" cy="200" r="4"/>
          <circle cx="140" cy="205" r="5"/>
          <circle cx="142" cy="210" r="4"/>
          <circle cx="144" cy="215" r="5"/>
          <circle cx="139" cy="215" r="4"/>
          <circle cx="134" cy="215" r="5"/>
          <circle cx="129" cy="215" r="4"/>
          <circle cx="124" cy="215" r="5"/>
          <circle cx="119" cy="215" r="4"/>
          <circle cx="114" cy="215" r="5"/>
          <circle cx="109" cy="215" r="4"/>
          <circle cx="104" cy="215" r="5"/>
          
          <!-- Number 9 -->
          <circle cx="165" cy="85" r="5"/>
          <circle cx="170" cy="85" r="4"/>
          <circle cx="175" cy="85" r="5"/>
          <circle cx="180" cy="85" r="4"/>
          <circle cx="185" cy="85" r="5"/>
          <circle cx="190" cy="90" r="4"/>
          <circle cx="195" cy="95" r="5"/>
          <circle cx="197" cy="100" r="4"/>
          <circle cx="199" cy="105" r="5"/>
          <circle cx="201" cy="110" r="4"/>
          <circle cx="199" cy="115" r="5"/>
          <circle cx="195" cy="120" r="4"/>
          <circle cx="190" cy="125" r="5"/>
          <circle cx="185" cy="130" r="4"/>
          <circle cx="180" cy="135" r="5"/>
          <circle cx="175" cy="140" r="4"/>
          <circle cx="170" cy="145" r="5"/>
          <circle cx="165" cy="150" r="4"/>
          <circle cx="160" cy="90" r="5"/>
          <circle cx="160" cy="95" r="4"/>
          <circle cx="160" cy="100" r="5"/>
          <circle cx="160" cy="105" r="4"/>
          <circle cx="160" cy="110" r="5"/>
          <circle cx="160" cy="115" r="4"/>
          <circle cx="160" cy="120" r="5"/>
          <circle cx="160" cy="125" r="4"/>
          <circle cx="160" cy="130" r="5"/>
          <circle cx="160" cy="135" r="4"/>
          <circle cx="160" cy="140" r="5"/>
          <circle cx="160" cy="145" r="4"/>
          <circle cx="197" cy="155" r="5"/>
          <circle cx="195" cy="160" r="4"/>
          <circle cx="190" cy="165" r="5"/>
          <circle cx="185" cy="170" r="4"/>
          <circle cx="180" cy="175" r="5"/>
          <circle cx="175" cy="180" r="4"/>
          <circle cx="170" cy="185" r="5"/>
          <circle cx="165" cy="190" r="4"/>
          <circle cx="160" cy="195" r="5"/>
          <circle cx="158" cy="200" r="4"/>
          <circle cx="156" cy="205" r="5"/>
          <circle cx="154" cy="210" r="4"/>
          <circle cx="152" cy="215" r="5"/>
        `, '#6B4226')}
      </g>
    </svg>`)}`,
    correctAnswer: "29",
    description: "Protanomaly test - Color blind may see 70"
  },
  {
    id: 4,
    image: `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="145" fill="#ffffff"/>
      <defs>
        <mask id="circleMask4">
          <circle cx="150" cy="150" r="140" fill="white"/>
        </mask>
      </defs>
      <g mask="url(#circleMask4)">
        ${generateRandomDots(150, 150, 135, 1100, 3, 8, '#7A9B7E')}
        ${generateRandomDots(150, 150, 135, 450, 2, 6, '#8BAF8F')}
        ${generateNumberDots(`
          <!-- Number 5 -->
          <circle cx="105" cy="85" r="5"/>
          <circle cx="110" cy="85" r="4"/>
          <circle cx="115" cy="85" r="5"/>
          <circle cx="120" cy="85" r="4"/>
          <circle cx="125" cy="85" r="5"/>
          <circle cx="130" cy="85" r="4"/>
          <circle cx="135" cy="85" r="5"/>
          <circle cx="140" cy="85" r="4"/>
          <circle cx="145" cy="85" r="5"/>
          <circle cx="105" cy="90" r="4"/>
          <circle cx="105" cy="95" r="5"/>
          <circle cx="105" cy="100" r="4"/>
          <circle cx="105" cy="105" r="5"/>
          <circle cx="105" cy="110" r="4"/>
          <circle cx="105" cy="115" r="5"/>
          <circle cx="105" cy="120" r="4"/>
          <circle cx="105" cy="125" r="5"/>
          <circle cx="105" cy="130" r="4"/>
          <circle cx="110" cy="135" r="5"/>
          <circle cx="115" cy="135" r="4"/>
          <circle cx="120" cy="135" r="5"/>
          <circle cx="125" cy="135" r="4"/>
          <circle cx="130" cy="135" r="5"/>
          <circle cx="135" cy="135" r="4"/>
          <circle cx="140" cy="140" r="5"/>
          <circle cx="145" cy="145" r="4"/>
          <circle cx="147" cy="150" r="5"/>
          <circle cx="149" cy="155" r="4"/>
          <circle cx="151" cy="160" r="5"/>
          <circle cx="149" cy="165" r="4"/>
          <circle cx="145" cy="170" r="5"/>
          <circle cx="140" cy="175" r="4"/>
          <circle cx="135" cy="180" r="5"/>
          <circle cx="130" cy="185" r="4"/>
          <circle cx="125" cy="190" r="5"/>
          <circle cx="120" cy="195" r="4"/>
          <circle cx="115" cy="200" r="5"/>
          <circle cx="110" cy="205" r="4"/>
          <circle cx="105" cy="210" r="5"/>
          <circle cx="110" cy="215" r="4"/>
          <circle cx="115" cy="215" r="5"/>
          <circle cx="120" cy="215" r="4"/>
          <circle cx="125" cy="215" r="5"/>
          <circle cx="130" cy="215" r="4"/>
          <circle cx="135" cy="215" r="5"/>
          <circle cx="140" cy="215" r="4"/>
          <circle cx="145" cy="215" r="5"/>
          
          <!-- Number 7 -->
          <circle cx="165" cy="85" r="5"/>
          <circle cx="170" cy="85" r="4"/>
          <circle cx="175" cy="85" r="5"/>
          <circle cx="180" cy="85" r="4"/>
          <circle cx="185" cy="85" r="5"/>
          <circle cx="190" cy="85" r="4"/>
          <circle cx="195" cy="85" r="5"/>
          <circle cx="200" cy="85" r="4"/>
          <circle cx="205" cy="85" r="5"/>
          <circle cx="203" cy="90" r="4"/>
          <circle cx="201" cy="95" r="5"/>
          <circle cx="199" cy="100" r="4"/>
          <circle cx="197" cy="105" r="5"/>
          <circle cx="195" cy="110" r="4"/>
          <circle cx="193" cy="115" r="5"/>
          <circle cx="191" cy="120" r="4"/>
          <circle cx="189" cy="125" r="5"/>
          <circle cx="187" cy="130" r="4"/>
          <circle cx="185" cy="135" r="5"/>
          <circle cx="183" cy="140" r="4"/>
          <circle cx="181" cy="145" r="5"/>
          <circle cx="179" cy="150" r="4"/>
          <circle cx="177" cy="155" r="5"/>
          <circle cx="175" cy="160" r="4"/>
          <circle cx="173" cy="165" r="5"/>
          <circle cx="171" cy="170" r="4"/>
          <circle cx="169" cy="175" r="5"/>
          <circle cx="167" cy="180" r="4"/>
          <circle cx="165" cy="185" r="5"/>
          <circle cx="163" cy="190" r="4"/>
          <circle cx="161" cy="195" r="5"/>
          <circle cx="159" cy="200" r="4"/>
          <circle cx="157" cy="205" r="5"/>
          <circle cx="155" cy="210" r="4"/>
          <circle cx="153" cy="215" r="5"/>
        `, '#2D4A2F')}
      </g>
    </svg>`)}`,
    correctAnswer: "57",
    description: "Deuteranomaly test - Normal vision sees 57"
  },
  {
    id: 5,
    image: `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="145" fill="#ffffff"/>
      <defs>
        <mask id="circleMask5">
          <circle cx="150" cy="150" r="140" fill="white"/>
        </mask>
      </defs>
      <g mask="url(#circleMask5)">
        ${generateRandomDots(150, 150, 135, 1050, 3, 8, '#D4A574')}
        ${generateRandomDots(150, 150, 135, 420, 2, 6, '#E6C088')}
        ${generateNumberDots(`
          <!-- Number 7 -->
          <circle cx="105" cy="85" r="5"/>
          <circle cx="110" cy="85" r="4"/>
          <circle cx="115" cy="85" r="5"/>
          <circle cx="120" cy="85" r="4"/>
          <circle cx="125" cy="85" r="5"/>
          <circle cx="130" cy="85" r="4"/>
          <circle cx="135" cy="85" r="5"/>
          <circle cx="140" cy="85" r="4"/>
          <circle cx="145" cy="85" r="5"/>
          <circle cx="143" cy="90" r="4"/>
          <circle cx="141" cy="95" r="5"/>
          <circle cx="139" cy="100" r="4"/>
          <circle cx="137" cy="105" r="5"/>
          <circle cx="135" cy="110" r="4"/>
          <circle cx="133" cy="115" r="5"/>
          <circle cx="131" cy="120" r="4"/>
          <circle cx="129" cy="125" r="5"/>
          <circle cx="127" cy="130" r="4"/>
          <circle cx="125" cy="135" r="5"/>
          <circle cx="123" cy="140" r="4"/>
          <circle cx="121" cy="145" r="5"/>
          <circle cx="119" cy="150" r="4"/>
          <circle cx="117" cy="155" r="5"/>
          <circle cx="115" cy="160" r="4"/>
          <circle cx="113" cy="165" r="5"/>
          <circle cx="111" cy="170" r="4"/>
          <circle cx="109" cy="175" r="5"/>
          <circle cx="107" cy="180" r="4"/>
          <circle cx="105" cy="185" r="5"/>
          <circle cx="103" cy="190" r="4"/>
          <circle cx="101" cy="195" r="5"/>
          <circle cx="99" cy="200" r="4"/>
          <circle cx="97" cy="205" r="5"/>
          <circle cx="95" cy="210" r="4"/>
          <circle cx="93" cy="215" r="5"/>
          
          <!-- Number 4 -->
          <circle cx="175" cy="85" r="5"/>
          <circle cx="175" cy="90" r="4"/>
          <circle cx="175" cy="95" r="5"/>
          <circle cx="175" cy="100" r="4"/>
          <circle cx="175" cy="105" r="5"/>
          <circle cx="175" cy="110" r="4"/>
          <circle cx="175" cy="115" r="5"/>
          <circle cx="175" cy="120" r="4"/>
          <circle cx="175" cy="125" r="5"/>
          <circle cx="175" cy="130" r="4"/>
          <circle cx="175" cy="135" r="5"/>
          <circle cx="175" cy="140" r="4"/>
          <circle cx="205" cy="85" r="5"/>
          <circle cx="205" cy="90" r="4"/>
          <circle cx="205" cy="95" r="5"/>
          <circle cx="205" cy="100" r="4"/>
          <circle cx="205" cy="105" r="5"/>
          <circle cx="205" cy="110" r="4"/>
          <circle cx="205" cy="115" r="5"/>
          <circle cx="205" cy="120" r="4"/>
          <circle cx="205" cy="125" r="5"/>
          <circle cx="205" cy="130" r="4"/>
          <circle cx="205" cy="135" r="5"/>
          <circle cx="205" cy="140" r="4"/>
          <circle cx="205" cy="145" r="5"/>
          <circle cx="205" cy="150" r="4"/>
          <circle cx="205" cy="155" r="5"/>
          <circle cx="205" cy="160" r="4"/>
          <circle cx="205" cy="165" r="5"/>
          <circle cx="205" cy="170" r="4"/>
          <circle cx="205" cy="175" r="5"/>
          <circle cx="205" cy="180" r="4"/>
          <circle cx="205" cy="185" r="5"/>
          <circle cx="205" cy="190" r="4"/>
          <circle cx="205" cy="195" r="5"/>
          <circle cx="205" cy="200" r="4"/>
          <circle cx="205" cy="205" r="5"/>
          <circle cx="205" cy="210" r="4"/>
          <circle cx="205" cy="215" r="5"/>
          <circle cx="180" cy="135" r="4"/>
          <circle cx="185" cy="135" r="5"/>
          <circle cx="190" cy="135" r="4"/>
          <circle cx="195" cy="135" r="5"/>
          <circle cx="200" cy="135" r="4"/>
        `, '#4A7C59')}
      </g>
    </svg>`)}`,
    correctAnswer: "74",
    description: "Tritanomaly test - Blue-yellow deficiency test"
  }
];

interface IshiharaTestProps {
  onTestComplete?: (results: any) => void;
}

export function IshiharaTest({ onTestComplete }: IshiharaTestProps) {
  const [currentPlate, setCurrentPlate] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSubmitAnswer = () => {
    const newAnswers = [...userAnswers, currentAnswer];
    setUserAnswers(newAnswers);
    setCurrentAnswer("");

    if (currentPlate < ishiharaPlates.length - 1) {
      setCurrentPlate(currentPlate + 1);
    } else {
      // Test complete, calculate results
      const score = newAnswers.reduce((correct, answer, index) => {
        return answer === ishiharaPlates[index].correctAnswer ? correct + 1 : correct;
      }, 0);

      const totalPlates = ishiharaPlates.length;
      const percentage = (score / totalPlates) * 100;
      
      let diagnosis = "Normal color vision";
      if (percentage < 50) {
        diagnosis = "Severe color vision deficiency";
      } else if (percentage < 75) {
        diagnosis = "Moderate color vision deficiency";
      } else if (percentage < 100) {
        diagnosis = "Mild color vision deficiency";
      }

      const testResults = {
        score,
        totalPlates,
        percentage,
        diagnosis,
        answers: newAnswers.map((answer, index) => ({
          plateId: ishiharaPlates[index].id,
          userAnswer: answer,
          correctAnswer: ishiharaPlates[index].correctAnswer,
          isCorrect: answer === ishiharaPlates[index].correctAnswer
        }))
      };

      setResults(testResults);
      setIsComplete(true);
      onTestComplete?.(testResults);
    }
  };

  const resetTest = () => {
    setCurrentPlate(0);
    setUserAnswers([]);
    setCurrentAnswer("");
    setIsComplete(false);
    setResults(null);
  };

  if (isComplete && results) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-card border-0 shadow-custom-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-6 w-6" />
            Ishihara Test Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              {results.percentage >= 75 ? (
                <CheckCircle className="h-10 w-10 text-success" />
              ) : (
                <XCircle className="h-10 w-10 text-warning" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{results.diagnosis}</h3>
              <p className="text-lg text-muted-foreground">
                Score: {results.score}/{results.totalPlates} ({results.percentage.toFixed(1)}%)
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Answer Review:</h4>
            <div className="grid gap-2">
              {results.answers.map((answer: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-2 rounded bg-muted/50">
                  <span>Plate {answer.plateId}</span>
                  <div className="flex items-center gap-2">
                    <span className={answer.isCorrect ? "text-success" : "text-destructive"}>
                      Your: {answer.userAnswer}
                    </span>
                    <span className="text-muted-foreground">
                      Correct: {answer.correctAnswer}
                    </span>
                    {answer.isCorrect ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : (
                      <XCircle className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={resetTest} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Test
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const plate = ishiharaPlates[currentPlate];

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card border-0 shadow-custom-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6" />
            Ishihara Color Blindness Test
          </div>
          <span className="text-sm text-muted-foreground">
            {currentPlate + 1} of {ishiharaPlates.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Look at the image below and enter the number you see:
          </p>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-muted">
              <img 
                src={plate.image} 
                alt={`Ishihara test plate ${plate.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="answer" className="block text-sm font-medium mb-2">
                What number do you see?
              </label>
              <input
                id="answer"
                type="text"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="w-32 px-3 py-2 border border-input rounded-md text-center text-xl font-bold"
                placeholder="?"
                maxLength={3}
              />
            </div>
            
            <Button 
              onClick={handleSubmitAnswer}
              disabled={!currentAnswer.trim()}
              className="w-full"
            >
              {currentPlate < ishiharaPlates.length - 1 ? "Next Plate" : "Complete Test"}
            </Button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Instructions:</strong> {plate.description}. 
            Enter the number you can clearly see in the colored dots. 
            If you cannot see any number, enter "0".
          </p>
        </div>
      </CardContent>
    </Card>
  );
}