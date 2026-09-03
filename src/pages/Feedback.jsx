import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { workers } from '../data/mockData';
import { Star, MessageSquare } from 'lucide-react';

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  const workerId = location.state?.workerId;
  const worker = workers.find(w => w.id === workerId);
  const requirement = location.state?.requirement;

  if (!worker) {
    navigate('/employer');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the backend.
    // For MVP demo, we just navigate back to dashboard.
    navigate('/worker/passport/' + workerId, { state: { 
      message: 'Feedback submitted successfully! The Skill Passport has been updated.' 
    }});
  };

  return (
    <div className="container py-8 animate-fade-in max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Task Completion & Feedback</h1>
      <p className="text-muted mb-8">The trial task by <strong>{worker.name}</strong> is marked as complete. Please provide your rating and feedback to update their Skill Passport.</p>
      
      <div className="card p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div>
            <label className="label mb-3">Rate their performance</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button 
                  key={star}
                  type="button"
                  className="bg-transparent"
                  onClick={() => setRating(star)}
                >
                  <Star 
                    size={32} 
                    className={star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="label mb-2 flex items-center gap-2"><MessageSquare size={16}/> Written Feedback</label>
            <textarea
              className="input h-32 resize-none"
              placeholder="How did they perform? Would you hire them again?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          
          <div className="p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
            <strong>Note:</strong> Your feedback directly affects {worker.name}'s verified rating and future employability on KaushalSetu.
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-lg mt-2 justify-center"
            disabled={rating === 0 || !feedback}
          >
            Submit Feedback & Release Payment
          </button>
        </form>
      </div>
    </div>
  );
};
