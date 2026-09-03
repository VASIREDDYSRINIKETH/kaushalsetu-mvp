import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { workers } from '../data/mockData';
import PassportCard from '../components/PassportCard';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const SkillPassport = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const worker = workers.find(w => w.id === id);

  const successMessage = location.state?.message;

  if (!worker) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Worker Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container py-8 animate-fade-in max-w-4xl">
      <button 
        className="btn btn-ghost btn-sm mb-4 px-0"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} /> Back
      </button>

      {successMessage && (
        <div className="mb-6 bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="text-green" />
          {successMessage}
        </div>
      )}

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary">Skill Passport</h1>
        <p className="text-muted">A verified record of practical abilities and work history.</p>
      </div>

      <PassportCard worker={worker} />
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted">
          Data secured by KaushalSetu Verification Center, Meerut.
        </p>
      </div>
    </div>
  );
};

export default SkillPassport;
