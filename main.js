document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Theme handling
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.dataset.theme = savedTheme;
        } else {
            document.body.dataset.theme = prefersDarkScheme.matches ? 'dark' : 'light';
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    }
    
    // Event listeners for theme
    themeToggle.addEventListener('click', toggleTheme);
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.body.dataset.theme = e.matches ? 'dark' : 'light';
        }
    });

    const projects = [
        {
            title: "Speed Test",
            description: "A performance benchmarking tool for websites that analyzes loading times and provides optimization recommendations.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "https://speedcv.vercel.app/"
        },
        {
            title: "Favicon Generator",
            description: "An intuitive tool that helps create beautiful favicons for websites with support for multiple sizes and formats.",
            image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "https://faviconcv.vercel.app/"
        }
    ];

    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <img class="project-image" src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }

    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                element.classList.add('revealed');
            }
        });
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize theme and other functionalities
    initializeTheme();
    renderProjects();
    
    // Set up scroll handlers
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
