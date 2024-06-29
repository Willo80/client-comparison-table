function showHelp(topic) {
  let helpContent = '';
  switch(topic) {
    case 'adoption':
      helpContent = `
        <h3>Adoption Ladder Stages</h3>
        <ul>
          <li><strong>Seedling:</strong> Initial inquiries, first consultations.</li>
          <li><strong>Sprout:</strong> Attending introductory workshops, requesting basic information.</li>
          <li><strong>Budding:</strong> Actively planning garden projects, requesting quotes, making small purchases.</li>
          <li><strong>Blooming:</strong> Implementing larger projects, ordering significant materials, experimenting with BloomCraft designs.</li>
          <li><strong>Blossoming:</strong> Ongoing projects with regular updates, frequent discussions about innovative ideas.</li>
          <li><strong>Thriving:</strong> Consistent collaboration with multiple ongoing projects, high engagement.</li>
          <li><strong>Flourishing:</strong> Frequently providing positive feedback, influencing others, promoting BloomCraft.</li>
        </ul>`;
      break;
    case 'segmentation':
      helpContent = `
        <h3>Customer Segmentation Categories</h3>
        <ul>
          <li><strong>Perennial Planter:</strong> Clients focused on outcomes, requiring thorough and dependable solutions.</li>
          <li><strong>All-in-One Gardener:</strong> Clients needing comprehensive, all-encompassing gardening services.</li>
          <li><strong>Simple Sower:</strong> Clients preferring straightforward, low-maintenance garden solutions.</li>
          <li><strong>Adventure Gardener:</strong> Clients seeking unique, experience-driven garden designs.</li>
        </ul>`;
      break;
    case '9box':
      helpContent = `
        <h3>9-Box Grid Scoring</h3>
        <ul>
          <li><strong>A1:</strong> Score > 3.3</li>
          <li><strong>A2:</strong> Score 3.0 - 3.3</li>
          <li><strong>A3:</strong> Score 2.6 - 2.9</li>
          <li><strong>B1:</strong> Score 2.0 - 2.5</li>
          <li><strong>B2:</strong> Score 1.5 - 1.9</li>
          <li><strong>B3:</strong> Score 1.0 - 1.4</li>
          <li><strong>C1:</strong> Score 0.5 - 0.9</li>
          <li><strong>C2:</strong> Score 0.1 - 0.4</li>
          <li><strong>C3:</strong> Score <= 0.0</li>
        </ul>`;
      break;
  }
  // Display the help content in a modal or tooltip
  document.getElementById('help-modal-content').innerHTML = helpContent;
  document.getElementById('help-modal').style.display = 'block';
}

// Hide the help modal
function closeHelp() {
  document.getElementById('help-modal').style.display = 'none';
}

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
    const selections = ['9-box', 'segment', 'adoption'];
    
    // Handle criteria dropdowns
    criteria.forEach(criterion => {
      const selectElement = document.getElementById(`${criterion}-${client}`);
      const savedValue = localStorage.getItem(`${criterion}-${client}`);
      if (savedValue) {
        selectElement.value = savedValue;
      }
      selectElement.addEventListener('change', () => {
        localStorage.setItem(`${criterion}-${client}`, selectElement.value);
        calculateTotalScore(client);
      });
    });
    
    // Handle other dropdowns
    selections.forEach(selection => {
      const selectElement = document.getElementById(`${selection}-${client}`);
      const savedValue = localStorage.getItem(`${selection}-${client}`);
      if (savedValue) {
        selectElement.value = savedValue;
      }
      selectElement.addEventListener('change', () => {
        localStorage.setItem(`${selection}-${client}`, selectElement.value);
      });
    });
    
    calculateTotalScore(client); // Calculate initial scores based on saved values
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

    const totalScoreElement = document.getElementById(`total-score-${client}`);
    totalScoreElement.textContent = totalScore.toFixed(1);
    localStorage.setItem(`total-score-${client}`, totalScore.toFixed(1));
  }
});