import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Public Pages
import HomePage from './pages/marketing/HomePage';
import FeaturesPage from './pages/marketing/FeaturesPage';
import TemplatesPage from './pages/marketing/TemplatesPage';
import TemplatePreviewPage from './pages/marketing/TemplatePreviewPage';
import LearningHubPage from './pages/marketing/LearningHubPage';
import PricingPage from './pages/marketing/PricingPage';
import AboutPage from './pages/marketing/AboutPage';
import ContactPage from './pages/marketing/ContactPage';
import RoadmapPage from './pages/marketing/RoadmapPage';
import WhyHorosoftPage from './pages/marketing/WhyHorosoftPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPageNew';
import ResetPasswordPage from './pages/auth/ResetPasswordPageNew';
import OTPVerifyPage from './pages/auth/OTPVerifyPageNew';
import OnboardingPage from './pages/auth/OnboardingPageNew';
import OwnerLoginPage from './pages/auth/OwnerLoginPage';
import AdminLoginPage from './pages/auth/AdminLoginPage';
import MemberLoginPage from './pages/auth/MemberLoginPage';

// Dashboard Pages
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import MyProjects from './pages/dashboard/MyProjects';
import AICodeGenerator from './pages/dashboard/AICodeGenerator';
import AIWebsiteReplicator from './pages/dashboard/AIWebsiteReplicator';
import TemplateLibrary from './pages/dashboard/TemplateLibrary';
import LearningHub from './pages/dashboard/LearningHub';
import AIChatAgent from './pages/dashboard/AIChatAgent';
import AIVoiceAgent from './pages/dashboard/AIVoiceAgent';
import WorkflowBuilder from './pages/dashboard/WorkflowBuilder';
import Deployments from './pages/dashboard/Deployments';
import APIKeys from './pages/dashboard/APIKeys';
import BillingPlans from './pages/dashboard/BillingPlans';
import WorkspaceManagement from './pages/dashboard/WorkspaceManagement';
import Settings from './pages/dashboard/Settings';

// Workspace Pages
import AdminDashboardLayout from './components/workspace/AdminDashboardLayout';
import MemberDashboardLayout from './components/workspace/MemberDashboardLayout';
import AdminDashboardHome from './pages/workspace/AdminDashboardHome';
import MemberDashboardHome from './pages/workspace/MemberDashboardHome';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import PlansManager from './pages/admin/PlansManager';
import TemplateModeration from './pages/admin/TemplateModeration';
import MarketplaceManagement from './pages/admin/MarketplaceManagement';
import LearningHubManagement from './pages/admin/LearningHubManagement';
import PaymentsTransactions from './pages/admin/PaymentsTransactions';
import AppSumoCodes from './pages/admin/AppSumoCodes';
import SystemSettings from './pages/admin/SystemSettings';
import SystemLogs from './pages/admin/SystemLogs';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/template-preview" element={<TemplatePreviewPage />} />
        <Route path="/learning" element={<LearningHubPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/why-horosoft" element={<WhyHorosoftPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerifyPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/owner-login" element={<OwnerLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/member-login" element={<MemberLoginPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="ai-generator" element={<AICodeGenerator />} />
          <Route path="ai-replicator" element={<AIWebsiteReplicator />} />
          <Route path="templates" element={<TemplateLibrary />} />
          <Route path="learning" element={<LearningHub />} />
          <Route path="chat-agent" element={<AIChatAgent />} />
          <Route path="voice-agent" element={<AIVoiceAgent />} />
          <Route path="workflows" element={<WorkflowBuilder />} />
          <Route path="deployments" element={<Deployments />} />
          <Route path="api-keys" element={<APIKeys />} />
          <Route path="billing" element={<BillingPlans />} />
          <Route path="workspace" element={<WorkspaceManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Workspace Routes (Acme Inc) */}
        <Route path="/admin-workspace" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboardHome />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="ai-generator" element={<AICodeGenerator />} />
          <Route path="ai-replicator" element={<AIWebsiteReplicator />} />
          <Route path="templates" element={<TemplateLibrary />} />
          <Route path="learning" element={<LearningHub />} />
          <Route path="chat-agent" element={<AIChatAgent />} />
          <Route path="voice-agent" element={<AIVoiceAgent />} />
          <Route path="workflows" element={<WorkflowBuilder />} />
          <Route path="deployments" element={<Deployments />} />
          <Route path="api-keys" element={<APIKeys />} />
          <Route path="team" element={<WorkspaceManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Member Workspace Routes (Startup Project) */}
        <Route path="/member-workspace" element={<MemberDashboardLayout />}>
          <Route index element={<MemberDashboardHome />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="ai-generator" element={<AICodeGenerator />} />
          <Route path="ai-replicator" element={<AIWebsiteReplicator />} />
          <Route path="templates" element={<TemplateLibrary />} />
          <Route path="learning" element={<LearningHub />} />
          <Route path="chat-agent" element={<AIChatAgent />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="plans" element={<PlansManager />} />
          <Route path="template-moderation" element={<TemplateModeration />} />
          <Route path="marketplace" element={<MarketplaceManagement />} />
          <Route path="learning-management" element={<LearningHubManagement />} />
          <Route path="payments" element={<PaymentsTransactions />} />
          <Route path="appsumo" element={<AppSumoCodes />} />
          <Route path="system-settings" element={<SystemSettings />} />
          <Route path="logs" element={<SystemLogs />} />
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}