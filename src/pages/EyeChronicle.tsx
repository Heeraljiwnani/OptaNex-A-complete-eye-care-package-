import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { History, Calendar, User, FileText, Plus, Eye } from "lucide-react";
import { format } from "date-fns";

const mockHistory = [
  {
    id: 1,
    date: "2024-12-10",
    type: "Regular Checkup",
    doctor: "Dr. Sarah Johnson",
    clinic: "Vision Care Center",
    diagnosis: "Myopia progression",
    treatment: "Updated prescription",
    notes: "Slight increase in power, continue regular monitoring"
  },
  {
    id: 2,
    date: "2024-06-15",
    type: "Specialist Consultation",
    doctor: "Dr. Michael Chen",
    clinic: "Retina Institute",
    diagnosis: "Diabetic retinopathy screening",
    treatment: "No treatment needed",
    notes: "Normal retinal examination, continue annual screening"
  }
];

export default function EyeChronicle() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">EyeChronicle</h1>
          <p className="text-lg text-muted-foreground">Your complete eye health history</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-5 w-5" />
          Add Record
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-0 shadow-custom-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Records</p>
                <p className="text-3xl font-bold text-foreground">{mockHistory.length}</p>
              </div>
              <History className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {mockHistory.map((record) => (
          <Card key={record.id} className="bg-gradient-card border-0 shadow-custom-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{record.type}</h3>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(record.date), "MMM dd, yyyy")}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">{record.diagnosis}</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Doctor: <span className="font-medium text-foreground">{record.doctor}</span></p>
                  <p className="text-muted-foreground">Clinic: <span className="font-medium text-foreground">{record.clinic}</span></p>
                </div>
                <div>
                  <p className="text-muted-foreground">Treatment: <span className="font-medium text-foreground">{record.treatment}</span></p>
                </div>
              </div>
              
              {record.notes && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">{record.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}