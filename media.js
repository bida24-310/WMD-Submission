// media.js
document.addEventListener('DOMContentLoaded', function() {
  const mediaData = [
      { 
          id: 1, 
          title: "Leadership Summit 2025", 
          image: "Leadership summit.jpg", 
          category: "events",
          date: "2025-03-15",
          likes: 42,
          comments: 8
      },
      { 
          id: 2, 
          title: "Community Cleanup", 
          image: "community cleanup.jpeg", 
          category: "projects",
          date: "2025-02-10",
          likes: 28,
          comments: 5
      },
      { 
          id: 3, 
          title: "Member Training", 
          image: "member training.jpg", 
          category: "events",
          date: "2025-04-20",
          likes: 35,
          comments: 6
      }
  ];

  // Render media items
  function renderMedia(filter = "all") {
      const containerId = `media-grid-${filter}`;
      const container = document.getElementById(containerId);
      
      if (container) {
          container.innerHTML = mediaData
              .filter(item => filter === "all" || item.category === filter)
              .map(item => `
                  <div class="col-md-6 col-lg-4 mb-4">
                      <div class="card h-100 shadow-sm">
                          <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 200px; object-fit: cover;">
                          <div class="card-body">
                              <h5 class="card-title">${item.title}</h5>
                              <p class="text-muted"><small>${item.date}</small></p>
                              <div class="d-flex justify-content-between align-items-center">
                                  <span><i class="fas fa-heart text-danger"></i> ${item.likes}</span>
                                  <span><i class="fas fa-comment"></i> ${item.comments}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              `).join('');
      }
  }

  // Initialize all tabs
  renderMedia("all");
  renderMedia("events");
  renderMedia("projects");

  // Tab switching functionality
  const tabLinks = document.querySelectorAll('#mediaTabs .nav-link');
  tabLinks.forEach(link => {
      link.addEventListener('click', function() {
          const tabId = this.getAttribute('href').substring(1);
          renderMedia(tabId);
      });
  });
});