document.addEventListener('DOMContentLoaded', function() {
    const clients = ['ecohaven', 'profG', 'sunny', 'flora', 'whims', 'blossom', 'wellness', 'paed', 'petunia', 'comms',]; // Add all client IDs here
  
    clients.forEach(client => {
      const criteria = ['budget', 'engagement', 'history', 'growth', 'alignment'];
      
      criteria.forEach(criterion => {
        const selectElement = document.getElementById(`${criterion}-${client}`);
        selectElement.addEventListener('change', () => calculateTotalScore(client));
      });
    });
  
    function calculateTotalScore(client) {
      let totalScore = 0;
      const criteriaWeights = {
        'budget': 0.3,
        'engagement': 0.3,
        'history': 0.2,
        'growth': 0.1,
        'alignment': 0.1
      };
  
      Object.keys(criteriaWeights).forEach(criterion => {
        const selectElement = document.getElementById(`${criterion}-${client}`);
        const value = parseFloat(selectElement.value);
        totalScore += value * criteriaWeights[criterion];
      });
  
      document.getElementById(`total-score-${client}`).textContent = totalScore.toFixed(1);
    }
  });
  
