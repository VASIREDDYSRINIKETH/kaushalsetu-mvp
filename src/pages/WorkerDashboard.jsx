import React from 'react';
import { useNavigate } from 'react-router-dom';
import { workers } from '../data/mockData';
import { FileText, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

const WorkerDashboard = () => {
  const navigate = useNavigate();
  // Using Ravi as the logged in worker for demo purposes
  const worker = workers[0];

  return (
    <div className="container py-8 animate-fade-in max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div className="flex gap-4 items-center">
          <img src={worker.avatarUrl} alt={worker.name} className="w-16 h-16 rounded-full border border-gray-200" />
          <div>
            <h1 className="text-3xl font-bold mb-1">Hello, {worker.name}</h1>
            <p className="text-muted flex items-center gap-2">
              {worker.verification.status === 'Verified' ? (
                <span className="text-green flex items-center gap-1 font-medium"><CheckCircle2 size={16} /> Verified Skills</span>
              ) : (
                <span className="text-orange-500 flex items-center gap-1 font-medium"><AlertTriangle size={16} /> Verification Pending</span>
              )}
            </p>
          </div>
        </div>
        <button 
          className="btn btn-outline"
          onClick={() => navigate(`/worker/passport/${worker.id}`)}
        >
          <FileText size={18} /> View My Skill Passport
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1 flex items-center gap-2">
            <TrendingUp size={16} className="text-secondary" /> Profile Strength
          </div>
          <div className="text-3xl font-bold text-primary mt-2">Excellent</div>
          <div className="text-xs text-muted mt-2">Top 10% in Meerut</div>
        </div>
        <div className="card p-6">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1">Total Earnings</div>
          <div className="text-3xl font-bold text-green mt-2">₹12,400</div>
          <div className="text-xs text-muted mt-2">From 14 trial tasks</div>
        </div>
        <div className="card p-6">
          <div className="text-muted font-bold text-sm uppercase tracking-wide mb-1">Average Rating</div>
          <div className="text-3xl font-bold text-yellow-600 mt-2 flex items-center gap-2">
            {worker.stats.averageRating} <span className="text-sm font-normal text-muted">/ 5.0</span>
          </div>
          <div className="text-xs text-muted mt-2">Highly recommended</div>
        </div>
      </div>

      <h3 className="font-bold text-xl mb-4">Recommended Jobs Near You</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Mock Jobs */}
        <div className="card p-5">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg">Solar Inverter Maintenance</h4>
            <span className="badge badge-green">₹600 / Day</span>
          </div>
          <div className="text-sm text-muted mb-4">EcoSun Energy • Meerut</div>
          <button className="btn btn-outline btn-sm w-full">Apply with Skill Passport</button>
        </div>
        
        <div className="card p-5">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg">Industrial Wiring Check</h4>
            <span className="badge badge-green">₹800 / Day</span>
          </div>
          <div className="text-sm text-muted mb-4">BuildFast Construction • Meerut</div>
          <button className="btn btn-outline btn-sm w-full">Apply with Skill Passport</button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
