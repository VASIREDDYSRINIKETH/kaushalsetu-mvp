import React from 'react';
import { useNavigate } from 'react-router-dom';
import { employer, jobs } from '../data/mockData';
import { Plus, Briefcase, CheckCircle2, Search } from 'lucide-react';

const EmployerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 animate-fade-in max-w-5xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, {employer.contactName}</h1>
          <p className="text-muted">{employer.name} • {employer.location}</p>
        </div>
        <button 
          className="btn btn-primary btn-lg"
          onClick={() => navigate('/employer/job-creation')}
        >
          <Plus size={20} /> New Requirement
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 border-t-4 border-t-blue-500">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1">Active Requirements</div>
          <div className="text-3xl font-bold text-primary">{employer.stats.activeJobs}</div>
        </div>
        <div className="card p-6 border-t-4 border-t-green-500">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1">Trial Tasks Completed</div>
          <div className="text-3xl font-bold text-primary">{employer.stats.tasksCompleted}</div>
        </div>
        <div className="card p-6 border-t-4 border-t-purple-500">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1">Verified Workers Hired</div>
          <div className="text-3xl font-bold text-primary">{employer.stats.workersHired}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Briefcase size={20} /> Active Requirements</h3>
          
          <div className="flex flex-col gap-4">
            {jobs.map(job => (
              <div key={job.id} className="card p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{job.title}</h4>
                    <div className="text-sm text-muted">{job.skill} • {job.location}</div>
                  </div>
                  <span className="badge badge-green">Open</span>
                </div>
                
                <div className="flex justify-end gap-3 mt-4 pt-4 border-t">
                  <button className="btn btn-outline btn-sm">Edit</button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate('/employer/job-creation')}
                  >
                    <Search size={16} /> Find Matches
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> Recent Activity</h3>
          <div className="card p-0 overflow-hidden">
            <div className="p-4 border-b text-sm">
              <span className="font-bold">Ravi Kumar</span> completed trial task <span className="font-medium text-secondary">Panel Mounting</span>.
              <div className="text-xs text-muted mt-1">2 days ago</div>
            </div>
            <div className="p-4 border-b text-sm">
              <span className="font-bold">Amit Singh</span> completed trial task <span className="font-medium text-secondary">Site Wiring</span>.
              <div className="text-xs text-muted mt-1">1 week ago</div>
            </div>
            <button className="w-full p-3 text-sm text-secondary font-medium hover:bg-gray-50 transition-colors">
              View All History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
