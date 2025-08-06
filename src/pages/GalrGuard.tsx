import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Shield, Monitor, Clock, Eye, TrendingUp, Activity } from "lucide-react";

export default function GalrGuard() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">GalrGuard</h1>
        <p className="text-lg text-muted-foreground">Monitor and protect against blue light exposure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Screen Time</p>
                <p className="text-3xl font-bold text-foreground">5.2h</p>
              </div>
              <Monitor className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Blue Light Level</p>
                <p className="text-3xl font-bold text-warning">High</p>
              </div>
              <Eye className="h-6 w-6 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Protection Score</p>
                <p className="text-3xl font-bold text-success">72%</p>
              </div>
              <Shield className="h-6 w-6 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-warning/5 border-warning/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Blue Light Protection Tips</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Take breaks every 20 minutes</li>
                <li>• Use blue light filtering glasses</li>
                <li>• Reduce screen brightness in low light</li>
                <li>• Consider screen filters or apps</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}