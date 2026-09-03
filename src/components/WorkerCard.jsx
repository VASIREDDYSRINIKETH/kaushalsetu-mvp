import React from 'react';
import { ShieldCheck, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkerCard = ({ match, onAssign }) => {
  const navigate = useNavigate();
  const { worker, score, reasons } = match;

  return (
    <div className="card p-5 mb-4 border-l-4" style={{ borderLeftColor: score > 80 ? 'var(--color-accent-green)' : 'var(--color-secondary)' }}>
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
            <img src={worker.avatarUrl} alt={worker.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-1">
              {worker.name}
              {worker.verification.status === 'Verified' && (
                <ShieldCheck className="text-green" size={18} />
              )}
            </h3>
            <div className="flex gap-3 text-sm text-muted mt-1">
              <span className="flex items-center gap-1"><MapPin size={14}/> {worker.location}</span>
              <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500 fill-yellow-500" /> {worker.stats.averageRating.toFixed(1)}</span>
            </div>
            
            {reasons && reasons.length > 0 && (
              <div className="mt-3">
                <div className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Why they matched:</div>
                <div className="flex flex-wrap gap-1">
                  {reasons.map((reason, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-sm">{reason}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2 min-w-[120px]">
          {score !== undefined && (
            <div className="text-center bg-green-50 text-green px-3 py-1 rounded-md border border-green-100 w-full mb-2">
              <div className="text-xl font-bold">{score}%</div>
              <div className="text-xs">Match</div>
            </div>
          )}
          <button 
            className="btn btn-outline btn-sm w-full"
            onClick={() => navigate(`/worker/passport/${worker.id}`)}
          >
            View Passport
          </button>
          {onAssign && (
            <button 
              className="btn btn-primary btn-sm w-full"
              onClick={() => onAssign(worker.id)}
            >
              Assign Trial Task
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
