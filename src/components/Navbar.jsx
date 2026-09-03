import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Zap } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
          <Zap size={28} color="var(--color-secondary)" />
          <span className="text-xl font-bold">Kaushal<span className="text-secondary">Setu</span></span>
        </Link>
        
        <div className="flex gap-6 items-center">
          <Link to="/employer" className="text-sm font-medium text-muted hover:text-primary">Employers</Link>
          <Link to="/worker" className="text-sm font-medium text-muted hover:text-primary">Workers</Link>
          <button 
            className="btn btn-outline"
            onClick={() => navigate('/demo/start')}
            style={{ borderColor: 'var(--color-accent-green)', color: 'var(--color-accent-green)' }}
          >
            Start Investor Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
