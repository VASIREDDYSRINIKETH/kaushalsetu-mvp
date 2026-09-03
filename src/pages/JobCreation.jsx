import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot, Sparkles, ArrowRight, Briefcase } from 'lucide-react';
import { mockAIRequirements } from '../data/mockData';

const JobCreation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [naturalLanguage, setNaturalLanguage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [requirement, setRequirement] = useState({
    skill: '',
    location: '',
    availability: '',
    duration: '',
    budget: ''
  });

  // Handle Demo Mode Auto-fill
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('demo') === 'true') {
      const demoText = "I need someone for rooftop solar installation in Meerut tomorrow.";
      let charIndex = 0;
      
      const typeText = () => {
        if (charIndex < demoText.length) {
          setNaturalLanguage(prev => prev + demoText.charAt(charIndex));
          charIndex++;
          setTimeout(typeText, 30);
        } else {
          setTimeout(() => handleAIParse(demoText), 500);
        }
      };
      
      setTimeout(typeText, 500);
    }
  }, [location]);

  const handleAIParse = (textToParse = naturalLanguage) => {
    if (!textToParse) return;
    
    setIsProcessing(true);
    
    // Simulate AI delay
    setTimeout(() => {
      // Very basic mock matching logic for demo purposes
      let parsedResult = null;
      Object.keys(mockAIRequirements).forEach(key => {
        if (textToParse.toLowerCase().includes(key.toLowerCase().substring(0, 10))) {
          parsedResult = mockAIRequirements[key];
        }
      });
      
      if (!parsedResult && textToParse.toLowerCase().includes('solar')) {
         parsedResult = mockAIRequirements["I need someone for rooftop solar installation in Meerut tomorrow."];
      } else if (!parsedResult) {
         parsedResult = mockAIRequirements["Electrician for house wiring in Meerut"]; // default fallback
      }

      setRequirement(parsedResult);
      setIsProcessing(false);
    }, 1200);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!requirement.skill || !requirement.location) return;
    
    // Pass requirement to next page via state
    navigate('/employer/matching', { state: { requirement } });
  };

  return (
    <div className="container py-8 animate-fade-in max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">Create Job Requirement</h1>
        <p className="text-muted">Describe what you need, and our AI will extract the requirements to find the best verified workers.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: AI Assistant */}
        <div className="card p-6 border border-blue-100 bg-blue-50/30">
          <div className="flex items-center gap-2 mb-4 text-secondary-dark font-bold">
            <Bot size={24} /> AI Requirement Assistant
          </div>
          
          <div className="mb-4">
            <label className="label text-muted">Type what you need in plain English:</label>
            <textarea
              className="input h-32 resize-none"
              placeholder="e.g. I need an electrician in Meerut for 2 days to fix house wiring..."
              value={naturalLanguage}
              onChange={(e) => setNaturalLanguage(e.target.value)}
            />
          </div>
          
          <button 
            className="btn btn-secondary w-full justify-center"
            onClick={() => handleAIParse()}
            disabled={!naturalLanguage || isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">Processing...</span>
            ) : (
              <span className="flex items-center gap-2"><Sparkles size={16} /> Extract Requirements</span>
            )}
          </button>

          <div className="mt-4 pt-4 border-t border-blue-100 text-xs text-muted">
            <strong>Hint:</strong> Try "I need someone for rooftop solar installation in Meerut tomorrow."
          </div>
        </div>

        {/* Right Column: Structured Form */}
        <div className="card p-6">
          <h3 className="font-bold mb-4 border-b pb-2 flex items-center gap-2 text-primary">
            <Briefcase size={20} /> Structured Requirements
          </h3>
          
          <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div>
              <label className="label">Skill Required</label>
              <input 
                type="text" 
                className={`input ${requirement.skill ? 'bg-green-50/30 border-green-200' : ''}`}
                value={requirement.skill}
                onChange={(e) => setRequirement({...requirement, skill: e.target.value})}
                placeholder="e.g. Solar Installation"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Location</label>
                <input 
                  type="text" 
                  className={`input ${requirement.location ? 'bg-green-50/30 border-green-200' : ''}`}
                  value={requirement.location}
                  onChange={(e) => setRequirement({...requirement, location: e.target.value})}
                  placeholder="e.g. Meerut"
                  required
                />
              </div>
              <div>
                <label className="label">Availability</label>
                <input 
                  type="text" 
                  className={`input ${requirement.availability ? 'bg-green-50/30 border-green-200' : ''}`}
                  value={requirement.availability}
                  onChange={(e) => setRequirement({...requirement, availability: e.target.value})}
                  placeholder="e.g. Tomorrow"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Task Duration</label>
                <input 
                  type="text" 
                  className={`input ${requirement.duration ? 'bg-green-50/30 border-green-200' : ''}`}
                  value={requirement.duration}
                  onChange={(e) => setRequirement({...requirement, duration: e.target.value})}
                  placeholder="e.g. 1 Day"
                />
              </div>
              <div>
                <label className="label">Trial Task Budget</label>
                <input 
                  type="text" 
                  className={`input ${requirement.budget ? 'bg-green-50/30 border-green-200' : ''}`}
                  value={requirement.budget}
                  onChange={(e) => setRequirement({...requirement, budget: e.target.value})}
                  placeholder="e.g. ₹800"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary mt-4 py-3 justify-center text-base"
              disabled={!requirement.skill || !requirement.location}
            >
              Find Matching Workers <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobCreation;
