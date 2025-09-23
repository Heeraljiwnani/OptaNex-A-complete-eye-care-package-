import { Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "/src/components/ui/sidebar.tsx";
import { AppSidebar } from "/src/components/AppSidebar.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { useAuth } from "/src/hooks/useAuth.tsx";
import { Menu, LogOut, User } from "lucide-react";
import { useState } from "react";

import { SplashScreen } from "/src/components/SplashScreen.tsx";
import { AuthDialog } from "/src/components/AuthDialog.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, loading, signOut } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  if (loading) {
    return <SplashScreen />;
  }

  if (!user) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="text-center space-y-8 max-w-md mx-auto p-8">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-custom-lg">
                <div className="w-10 h-10 text-primary-foreground font-bold text-2xl flex items-center justify-center">O</div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">OptaNex</h1>
                <p className="text-lg text-muted-foreground">Complete Eye Care Companion</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Track your eye health, monitor screen time, and protect your vision with our comprehensive suite of tools.
              </p>
              
              <Button 
                onClick={() => setAuthDialogOpen(true)}
                className="w-full gap-2"
                size="lg"
              >
                <User className="h-5 w-5" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
        
        <AuthDialog 
          open={authDialogOpen} 
          onOpenChange={setAuthDialogOpen} 
        />
      </>
    );
  }
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Menu className="h-5 w-5" />
                </SidebarTrigger>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">O</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-foreground">OptaNex</h1>
                    <p className="text-xs text-muted-foreground">Complete Eye Care</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {user.email}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={signOut}
                  className="ml-2"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}