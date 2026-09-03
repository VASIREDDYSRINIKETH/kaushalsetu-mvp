import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { workers } from '../data/mockData';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TrialTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [assigned, setAssigned] = useState(false);
  
  const workerId = location.state?.workerId;
  const requirement = location.state?.requirement;
  const worker = workers.find(w => w.id === workerId);

  if (!worker || !requirement) {
    navigate('/employer/job-creation');
    return null;
  }

  const handleAssign = () => {
    setAssigned(true);
    setTimeout(() => {
      navigate('/employer/feedback', { state: { workerId, requirement } });
    }, 1500); // Simulate task happening and going to feedback
  };

  return (
    <div className="container py-12 animate-fade-in max-w-2xl">
      <div className="card p-8 text-center">
        {!assigned ? (
          <>
            <div className="w-16 h-16 bg-blue-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h1 className="text-3xl font-bold mb-4">Assign Paid Trial Task</h1>
            
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-left mb-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-muted uppercase">Worker</div>
                  <div className="font-bold">{worker.name}</div>
                </div>
                <div>
                  <div className="text-xs text-muted uppercase">Payment (Escrow)</div>
                  <div className="font-bold text-green">{requirement.budget || '₹500'}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted uppercase">Task</div>
                  <div className="font-medium">{requirement.skill}</div>
                </div>
                <div>
                  <div className="text-xs text-muted uppercase">Location & Duration</div>
                  <div className="font-medium">{requirement.location} • {requirement.duration || 'Half Day'}</div>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary btn-lg w-full justify-center" onClick={handleAssign}>
              Confirm & Assign Task <ArrowRight size={20} />
            </button>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center">
            <CheckCircle2 size={64} className="text-green mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold mb-2">Task Assigned Successfully!</h2>
            <p className="text-muted">Fast-forwarding to task completion...</p>
          </div>
        )}
      </div>
    </div>
  );
};
