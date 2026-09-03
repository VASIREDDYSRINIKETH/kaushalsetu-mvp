// Mock Data for KaushalSetu MVP

export const workers = [
  {
    id: 'w1',
    name: 'Ravi Kumar',
    location: 'Meerut',
    availability: 'Available',
    skills: ['Solar Installation', 'Electrical Wiring'],
    verification: {
      status: 'Verified',
      badge: 'Gold',
      practicalAssessment: 'Passed (Rooftop Solar Rig)',
      verifier: 'KaushalSetu Skill Center, Meerut',
      date: '2026-08-15'
    },
    stats: {
      tasksCompleted: 14,
      averageRating: 4.8,
      repeatAssignments: 3
    },
    history: [
      { id: 'h1', employer: 'Surya Solar Solutions', task: 'Panel Mounting', date: '2026-09-01', rating: 5, feedback: 'Excellent work, very fast and precise.' },
      { id: 'h2', employer: 'GreenEnergy UP', task: 'Inverter Setup', date: '2026-08-28', rating: 5, feedback: 'Knew exactly what to do.' },
      { id: 'h3', employer: 'Surya Solar Solutions', task: 'Wiring Check', date: '2026-08-20', rating: 4, feedback: 'Good job.' }
    ],
    avatarUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Ravi'
  },
  {
    id: 'w2',
    name: 'Amit Singh',
    location: 'Meerut',
    availability: 'Available',
    skills: ['Electrical Wiring', 'Switchboard Repair'],
    verification: {
      status: 'Verified',
      badge: 'Silver',
      practicalAssessment: 'Passed (Basic Circuitry)',
      verifier: 'ITI Meerut',
      date: '2026-07-10'
    },
    stats: {
      tasksCompleted: 5,
      averageRating: 4.2,
      repeatAssignments: 0
    },
    history: [
      { id: 'h4', employer: 'City Builders', task: 'Site Wiring', date: '2026-08-25', rating: 4, feedback: 'Did the job well, but arrived slightly late.' }
    ],
    avatarUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Amit'
  },
  {
    id: 'w3',
    name: 'Deepak Sharma',
    location: 'Meerut',
    availability: 'Busy',
    skills: ['Solar Installation'],
    verification: {
      status: 'Verified',
      badge: 'Bronze',
      practicalAssessment: 'Passed (Panel Maintenance)',
      verifier: 'KaushalSetu Skill Center, Meerut',
      date: '2026-08-30'
    },
    stats: {
      tasksCompleted: 2,
      averageRating: 4.5,
      repeatAssignments: 0
    },
    history: [
      { id: 'h5', employer: 'EcoSun', task: 'Cleaning & Maintenance', date: '2026-09-02', rating: 4.5, feedback: 'Very thorough cleaning.' }
    ],
    avatarUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Deepak'
  },
  {
    id: 'w4',
    name: 'Rahul Verma',
    location: 'Ghaziabad',
    availability: 'Available',
    skills: ['Electrical Wiring'],
    verification: {
      status: 'Unverified',
      badge: 'None',
      practicalAssessment: 'Pending',
      verifier: null,
      date: null
    },
    stats: {
      tasksCompleted: 0,
      averageRating: 0,
      repeatAssignments: 0
    },
    history: [],
    avatarUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Rahul'
  }
];

export const employer = {
  id: 'e1',
  name: 'Surya Solar Solutions',
  contactName: 'Vikram Mehta',
  location: 'Meerut',
  stats: {
    activeJobs: 1,
    workersHired: 12,
    tasksCompleted: 45
  }
};

export const jobs = [
  {
    id: 'j1',
    title: 'Rooftop Solar Installer Needed',
    skill: 'Solar Installation',
    location: 'Meerut',
    status: 'Open',
    date: '2026-09-03',
    matches: [] // to be populated
  }
];

export const mockAIRequirements = {
  "I need someone for rooftop solar installation in Meerut tomorrow.": {
    skill: "Solar Installation",
    location: "Meerut",
    availability: "Tomorrow (Available)",
    duration: "1 Day",
    type: "Paid Trial Task",
    budget: "₹800"
  },
  "Electrician for house wiring in Meerut": {
    skill: "Electrical Wiring",
    location: "Meerut",
    availability: "Flexible (Available)",
    duration: "2 Days",
    type: "Paid Trial Task",
    budget: "₹1200"
  }
};
