import { Toaster } from "/src/components/ui/toaster.tsx";
import { Toaster as Sonner } from "/src/components/ui/sonner.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "/src/hooks/useAuth.tsx";
import { Layout } from "/src/components/Layout.tsx";
import Dashboard from "/src/pages/Dashboard.tsx";
import Optiscreen from "/src/pages/Optiscreen.tsx";
import Optitrack from "/src/pages/Optitrack.tsx";
import PrescriptTracker from "/src/pages/PrescriptTracker.tsx";
import EyeChronicle from "/src/pages/EyeChronicle.tsx";
import GlareGuard from "/src/pages/GlareGuard.tsx";
import Auth from "/src/pages/Auth.tsx";
import NotFound from "/src/pages/NotFound.tsx";

import { PWAInstallPrompt } from "/src/components/PWAInstallPrompt.tsx";

import PrivacyPolicy from "/src/pages/PrivacyPolicy.tsx";
import NotFound from "/src/pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Layout>
                <Dashboard />
              </Layout>
            } />
            <Route path="/optiscreen" element={
              <Layout>
                <Optiscreen />
              </Layout>
            } />
            <Route path="/optitrack" element={
              <Layout>
                <Optitrack />
              </Layout>
            } />
            <Route path="/prescripttracker" element={
              <Layout>
                <PrescriptTracker />
              </Layout>
            } />
            <Route path="/eyechronicle" element={
              <Layout>
                <EyeChronicle />
              </Layout>
            } />
            <Route path="/galrguard" element={
              <Layout>
                <GlareGuard />
              </Layout>
            } />
            <Route path="/privacy" element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <PWAInstallPrompt />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;