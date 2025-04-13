import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout Components
import AdminLayout from "./layouts/AdminLayout";
import JobSeekerLayout from "./layouts/JobSeekerLayout";
import EmployerLayout from "./layouts/EmploymentLayout";
import MainLayout from "./layouts/MainLayout";

// General Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/auth/LoginPage";
import Register from "./pages/auth/RegisterPage";
import Terms from "./pages/TermsPage";
import Privacy from "./pages/HomePage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminSettings from "./pages/admin/AdminSettings";

// Job Seeker Pages
import JobSeekerDashboard from "./pages/jobseeker/Dashboard";
import JobSearch from "./pages/jobseeker/JobSearch";
import JobDetail from "./pages/jobseeker/JobDetail";
import ApplicationForm from "./pages/jobseeker/ApplicationForm";
import PaymentPage from "./pages/jobseeker/PaymentPage";
import ApplicationStatus from "./pages/jobseeker/ApplicationStatus";
import JobSeekerProfile from "./pages/jobseeker/JobSeekerProfile";
import ScheduleInterview from "./pages/jobseeker/ScheduleInterview";
import ApplicationHistory from "./pages/jobseeker/ApplicationHistory";

// Employer Pages
import EmployerDashboard from "./pages/employer/Dashboard";
import PostJob from "./pages/employer/PostJob";
import ManageJobs from "./pages/employer/ManageJobs";
import ReviewApplicants from "./pages/employer/ReviewApplicants";
import EmployerScheduleInterview from "./pages/employer/ScheduleInterview";
// import EmployerPayments from "./pages/employer/Payments";
import EmployerProfile from "./pages/employer/EmployerProfile";

function App() {
  // This would be connected to your authentication system in a real app

  const [, setUserRole] = useState<string | null>(null); // null, 'admin', 'jobseeker', 'employer'

  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route
            path="/register"
            element={<Register setUserRole={setUserRole} />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admin-jobs" element={<AdminJobs />} />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="admin-payments" element={<AdminPayments />} />
          <Route path="admin-settings" element={<AdminSettings />} />
        </Route>

        {/* Job Seeker Routes */}
        <Route path="/jobseeker" element={<JobSeekerLayout />}>
          <Route index element={<JobSeekerDashboard />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="job/:id" element={<JobDetail />} />
          <Route path="application-form/:id" element={<ApplicationForm />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="payment/:id" element={<PaymentPage />} />
          <Route path="application-status" element={<ApplicationStatus />} />
          <Route path="profile" element={<JobSeekerProfile />} />
          <Route path="schedule-interview" element={<ScheduleInterview />} />
          <Route path="history" element={<ApplicationHistory />} />
        </Route>

        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="review-applicants" element={<ReviewApplicants />} />
          <Route path="schedule-interview" element={<EmployerScheduleInterview />} />
          <Route path="employer-profile" element={<EmployerProfile />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}export default App;
