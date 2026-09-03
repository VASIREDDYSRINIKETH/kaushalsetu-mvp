import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import WorkerDashboard from './pages/WorkerDashboard';
import SkillPassport from './pages/SkillPassport';
import EmployerDashboard from './pages/EmployerDashboard';
import JobCreation from './pages/JobCreation';
import WorkerMatching from './pages/WorkerMatching';
import { TrialTask } from './pages/TrialTask';
import { Feedback } from './pages/Feedback';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg-light)]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Landing />} />
            
            {/* Demo Route */}
            <Route path="/demo/start" element={<Navigate to="/employer/job-creation?demo=true" replace />} />
            
            {/* Worker Flow */}
            <Route path="/worker" element={<WorkerDashboard />} />
            <Route path="/worker/passport/:id" element={<SkillPassport />} />
            
            {/* Employer Flow */}
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/employer/job-creation" element={<JobCreation />} />
            <Route path="/employer/matching" element={<WorkerMatching />} />
            <Route path="/employer/trial-task" element={<TrialTask />} />
            <Route path="/employer/feedback" element={<Feedback />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} KaushalSetu MVP. Designed for Entrepreneurship Demo.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
