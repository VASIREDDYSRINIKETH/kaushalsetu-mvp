import React from 'react';
import { ShieldCheck, MapPin, Calendar, Star, Award, History, Clock } from 'lucide-react';

const PassportCard = ({ worker }) => {
  if (!worker) return null;

  return (
    <div className="card passport-card p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-100 flex-shrink-0 overflow-hidden">
          <img src={worker.avatarUrl} alt={worker.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                {worker.name}
                {worker.verification.status === 'Verified' && (
                  <ShieldCheck className="text-green" size={24} />
                )}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted mb-2">
                <span className="flex items-center gap-1"><MapPin size={14} /> {worker.location}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {worker.availability}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 font-bold text-lg">
                <Star className="text-yellow-500 fill-yellow-500" size={18} />
                {worker.stats.averageRating.toFixed(1)}
              </div>
              <div className="text-xs text-muted">{worker.stats.tasksCompleted} tasks done</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {worker.skills.map(skill => (
              <span key={skill} className="badge badge-blue">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
            <Award size={16} /> Verification Details
          </h4>
          <div className="font-medium text-primary mb-1">
            {worker.verification.practicalAssessment}
          </div>
          <div className="text-xs text-muted">
            Verified by: {worker.verification.verifier || 'N/A'}
          </div>
          {worker.verification.date && (
            <div className="text-xs text-muted">
              Date: {worker.verification.date}
            </div>
          )}
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
            <History size={16} /> Track Record
          </h4>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Paid Tasks Completed</span>
            <span className="font-bold">{worker.stats.tasksCompleted}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Repeat Assignments</span>
            <span className="font-bold">{worker.stats.repeatAssignments}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-3">Work History</h4>
        <div className="flex flex-col gap-3">
          {worker.history.length === 0 ? (
            <div className="text-sm text-muted italic">No work history yet.</div>
          ) : (
            worker.history.map(item => (
              <div key={item.id} className="p-3 border rounded-lg text-sm bg-white">
                <div className="flex justify-between font-medium mb-1">
                  <span>{item.task} for {item.employer}</span>
                  <span className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} /> {item.rating}
                  </span>
                </div>
                <div className="text-muted text-xs mb-2">{item.date}</div>
                <div className="italic text-gray-600">"{item.feedback}"</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PassportCard;
