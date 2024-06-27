function showTab(tabId) {
  var tabs = document.querySelectorAll('.nav-tabs button');
  tabs.forEach(function(tab) {
      tab.classList.remove('active');
  });

  var contents = document.querySelectorAll('.tab-content');
  contents.forEach(function(content) {
      content.style.display = 'none';
  });

  document.getElementById(tabId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const clients = ['ecohaven', 'profG', 'sunny', 'flora', 'whims', 'blossom', 'wellness', 'paed', 'petunia', 'comms']; // Add all client IDs here

  clients.forEach(client => {
    const criteria = ['budget', 'history', 'growth'];
    
    criteria.forEach(criterion => {
      const selectElement = document.getElementById(`${criterion}-${client}`);
      selectElement.addEventListener('change', () => calculateTotalScore(client));
    });
  });

  function calculateTotalScore(client) {
    let totalScore = 0;
    const criteriaWeights = {
      'budget': 0.4,
      'history': 0.3,
      'growth': 0.3
    };

    Object.keys(criteriaWeights).forEach(criterion => {
      const selectElement = document.getElementById(`${criterion}-${client}`);
      const value = parseFloat(selectElement.value);
      totalScore += value * criteriaWeights[criterion];
    });

    document.getElementById(`total-score-${client}`).textContent = totalScore.toFixed(1);
  }
});

  
