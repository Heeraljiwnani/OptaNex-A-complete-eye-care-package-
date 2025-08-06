import { Toaster } from "/src/components/ui/toaster.tsx";
import { Toaster as Sonner } from "/src/components/ui/sonner.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "/src/components/Layout.tsx";
import Dashboard from "/src/pages/Dashboard.tsx";
import Optiscreen from "/src/pages/Optiscreen.tsx";
import Optitrack from "/src/pages/Optitrack.tsx";
import PrescriptTracker from "/src/pages/PrescriptTracker.tsx";
import EyeChronicle from "/src/pages/EyeChronicle.tsx";
import GalrGuard from "/src/pages/GalrGuard.tsx";
import NotFound from "/src/pages/Index.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/optiscreen" element={<Optiscreen />} />
            <Route path="/optitrack" element={<Optitrack />} />
            <Route path="/prescripttracker" element={<PrescriptTracker />} />
            <Route path="/eyechronicle" element={<EyeChronicle />} />
            <Route path="/galrguard" element={<GalrGuard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
