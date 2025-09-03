import { Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "/src/components/ui/sidebar.tsx";
import { AppSidebar } from "/src/components/AppSidebar.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { useAuth } from "/src/hooks/useAuth.tsx";
import { Menu, LogOut, User } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
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