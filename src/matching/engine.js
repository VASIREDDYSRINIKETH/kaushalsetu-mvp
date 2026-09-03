// Deterministic Matching Engine

export const matchWorkers = (requirement, workers) => {
  return workers
    .map(worker => {
      let score = 0;
      let reasons = [];
      let isEligible = true;

      // 1. Location Match (Critical)
      if (worker.location.toLowerCase() === requirement.location.toLowerCase()) {
        score += 30;
        reasons.push(`Available in ${worker.location}`);
      } else {
        isEligible = false;
      }

      // 2. Skill Match (Critical)
      if (worker.skills.includes(requirement.skill)) {
        score += 40;
        reasons.push(`${requirement.skill} skills verified`);
      } else {
        isEligible = false;
      }

      // 3. Availability (Critical)
      if (worker.availability === 'Available') {
        score += 10;
      } else {
        isEligible = false;
      }

      // 4. Verification Bonus
      if (worker.verification.status === 'Verified') {
        score += 10;
        reasons.push('Practically Verified');
      }

      // 5. Rating Bonus
      if (worker.stats.averageRating >= 4.5) {
        score += 10;
        reasons.push(`${worker.stats.averageRating}/5 average rating`);
      } else if (worker.stats.averageRating >= 4.0) {
        score += 5;
        reasons.push(`${worker.stats.averageRating}/5 average rating`);
      }

      // 6. Experience Bonus
      if (worker.stats.tasksCompleted > 0) {
        // cap at 10 for score calculation
        score += Math.min(worker.stats.tasksCompleted, 10);
        reasons.push(`${worker.stats.tasksCompleted} completed tasks`);
      }

      return {
        worker,
        score: Math.min(score, 100), // Cap at 100
        reasons,
        isEligible
      };
    })
    .filter(match => match.isEligible)
    .sort((a, b) => b.score - a.score); // Highest score first
};
