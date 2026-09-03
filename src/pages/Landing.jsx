import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 bg-white border-b">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Don't just show your certificate.<br/>
            <span className="text-secondary">Show what you can do.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            KaushalSetu connects verified, practical-skilled youth with employers through paid trial tasks. No more guessing if a worker can actually do the job.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/employer')}
            >
              <Briefcase size={20} /> I'm an Employer
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => navigate('/worker')}
            >
              <Zap size={20} /> I'm a Worker
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <button 
              className="btn btn-lg"
              onClick={() => navigate('/employer/job-creation?demo=true')}
              style={{ backgroundColor: 'var(--color-accent-green)', color: 'white' }}
            >
              Start Investor Demo Flow <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="card p-8 bg-gray-50 border-none">
            <h3 className="text-xl font-bold mb-6 text-slate-400 line-through">Traditional Hiring</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-muted">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">1</div>
                <span>CV / Certificate Review</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">2</div>
                <span>Verbal Interview</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">3</div>
                <span>Hire (with uncertainty)</span>
              </div>
            </div>
          </div>

          <div className="card p-8" style={{ borderColor: 'var(--color-secondary-light)', background: 'linear-gradient(to right, #ffffff, #f8fafc)' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-secondary" /> The KaushalSetu Way
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-secondary flex items-center justify-center"><ShieldCheck size={18} /></div>
                <span>Verify Practical Skills</span>
              </div>
              <div className="flex items-center gap-3 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-secondary flex items-center justify-center"><Briefcase size={18} /></div>
                <span>Assign Paid Trial Task</span>
              </div>
              <div className="flex items-center gap-3 font-medium text-green">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 size={18} /></div>
                <span>Hire Proven Performers</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Landing;
