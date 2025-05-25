document.addEventListener('DOMContentLoaded', function() {
  // Mock data that matches the HTML structure
  const candidates = [
    { 
      id: 1, 
      name: "Galaletsang Sefakwe", 
      role: "Chapter President", 
      votes: 124, 
      image: "Gala.jpg" 
    },
    { 
      id: 2, 
      name: "Mooketsi Kgosi Mooketsi Jr", 
      role: "VP Operations", 
      votes: 89, 
      image: "kgosi.jpg" 
    }
  ];

  // Enhance voting buttons (works with both HTML and JS-generated content)
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const candidateId = parseInt(this.getAttribute('data-id'));
      const candidate = candidates.find(c => c.id === candidateId);
      
      // Update UI immediately
      const votesElement = this.nextElementSibling;
      candidate.votes += 1;
      votesElement.innerHTML = `<small>${candidate.votes} votes</small>`;
      
      alert(`Voted for ${candidate.name}! (Backend integration pending)`);
    });
  });

  // Real-time countdown
  function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5); // 5 days from now
    
    const now = new Date();
    const diff = endDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-timer').textContent = 
      `${days}d ${hours}h ${mins}m ${secs}s`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});