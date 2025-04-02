document.addEventListener('DOMContentLoaded', function() {
    // Function to filter projects by technology
    function setupProjectFilters() {
        // Collect all unique technologies from project cards
        const techTags = document.querySelectorAll('.tech-tag');
        const technologies = new Set();
        
        techTags.forEach(tag => {
            technologies.add(tag.textContent.trim());
        });
        
        // Create filter buttons
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        
        // Add 'All' filter button
        const allButton = document.createElement('button');
        allButton.textContent = 'All Projects';
        allButton.className = 'filter-button active';
        allButton.addEventListener('click', function() {
            setActiveFilter(this);
            filterProjects('all');
        });
        filterContainer.appendChild(allButton);
        
        // Add technology filter buttons
        technologies.forEach(tech => {
            const button = document.createElement('button');
            button.textContent = tech;
            button.className = 'filter-button';
            button.addEventListener('click', function() {
                setActiveFilter(this);
                filterProjects(tech);
            });
            filterContainer.appendChild(button);
        });
        
        // Insert filter container before projects grid
        const projectsSection = document.getElementById('data-science-projects');
        projectsSection.insertBefore(filterContainer, projectsSection.querySelector('h2').nextSibling);
    }
    
    // Function to set active filter button
    function setActiveFilter(activeButton) {
        const buttons = document.querySelectorAll('.filter-button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    // Function to filter projects
    function filterProjects(technology) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            if (technology === 'all') {
                card.style.display = 'block';
                return;
            }
            
            const tags = card.querySelectorAll('.tech-tag');
            let hasTag = false;
            
            tags.forEach(tag => {
                if (tag.textContent.trim() === technology) {
                    hasTag = true;
                }
            });
            
            card.style.display = hasTag ? 'block' : 'none';
        });
    }
    
    // Initialize project filters
    setupProjectFilters();
});
