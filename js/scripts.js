function showTab(tabId) {
  var tab = document.getElementById(tabId);
  
  // Toggle display
  if (tab.style.display === "block") {
    tab.style.display = "none";
  } else {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(t) {
      t.style.display = 'none';
    });
    // Show the selected tab
    tab.style.display = "block";
  }
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
