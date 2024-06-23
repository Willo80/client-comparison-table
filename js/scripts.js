document.addEventListener('DOMContentLoaded', function() {
    const criteria = ['budget', 'engagement', 'history', 'growth', 'alignment'];
  
    criteria.forEach(criterion => {
      const selectElement = document.getElementById(`${criterion}-ecohaven`);
      selectElement.addEventListener('change', calculateTotalScore);
    });
  
    function calculateTotalScore() {
      let totalScore = 0;
  
      criteria.forEach(criterion => {
        const selectElement = document.getElementById(`${criterion}-ecohaven`);
        const value = parseFloat(selectElement.value);
        switch (criterion) {
          case 'budget':
          case 'engagement':
            totalScore += value * 0.3;
            break;
          case 'history':
            totalScore += value * 0.2;
            break;
          case 'growth':
          case 'alignment':
            totalScore += value * 0.1;
            break;
        }
      });
  
      document.getElementById('total-score-ecohaven').textContent = totalScore.toFixed(1);
    }
  });
  
