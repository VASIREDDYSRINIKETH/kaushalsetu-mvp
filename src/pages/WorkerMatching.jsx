import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { matchWorkers } from '../matching/engine';
import { workers } from '../data/mockData';
import WorkerCard from '../components/WorkerCard';
import { ArrowLeft, Users } from 'lucide-react';

const WorkerMatching = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const requirement = location.state?.requirement;

  useEffect(() => {
    if (!requirement) {
      navigate('/employer/job-creation');
      return;
    }
    
    // Run deterministic matching engine
    const results = matchWorkers(requirement, workers);
    setMatches(results);
  }, [requirement, navigate]);

  const handleAssignTask = (workerId) => {
    navigate('/employer/trial-task', { 
      state: { 
        workerId, 
        requirement 
      } 
    });
  };

  if (!requirement) return null;

  return (
    <div className="container py-8 animate-fade-in max-w-4xl">
      <button 
        className="btn btn-ghost btn-sm mb-4 px-0"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} /> Back to Requirements
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Matching Results</h1>
          <p className="text-muted">Found {matches.length} workers matching your requirement for <strong>{requirement.skill}</strong> in <strong>{requirement.location}</strong>.</p>
        </div>
        
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm flex items-center gap-2 font-medium">
          <Users size={16} className="text-secondary" />
          Deterministic Match Engine
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {matches.length === 0 ? (
          <div className="card p-8 text-center bg-gray-50 text-muted">
            No workers found matching these criteria. Try adjusting the location or skill.
          </div>
        ) : (
          matches.map((match, idx) => (
            <WorkerCard 
              key={idx} 
              match={match} 
              onAssign={handleAssignTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WorkerMatching;
