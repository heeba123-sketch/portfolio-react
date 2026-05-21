  // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Projects filter
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // Here we'll just show an alert
            alert(`Merci ${name} ! Votre message a été envoyé avec succès. Je vous répondrai bientôt à ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animate skill bars on scroll
        const animateSkillsOnScroll = () => {
            const skillsSection = document.querySelector('.skills');
            const skillLevels = document.querySelectorAll('.skill-level');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillLevels.forEach(level => {
                            const width = level.style.width;
                            level.style.width = '0';
                            
                            setTimeout(() => {
                                level.style.transition = 'width 1.5s ease-in-out';
                                level.style.width = width;
                            }, 200);
                        });
                        
                        // Stop observing after animation
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            if (skillsSection) {
                observer.observe(skillsSection);
            }
        };
        
        // Créer des cercles flottants animés
        function createFloatingCircles() {
            const container = document.getElementById('floatingCircles');
            const circleCount = 20;
            
            for (let i = 0; i < circleCount; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                
                // Taille aléatoire entre 50px et 300px
                const size = Math.random() * 250 + 50;
                
                // Position aléatoire
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                
                // Durée d'animation aléatoire entre 20s et 60s
                const duration = Math.random() * 40 + 20;
                
                // Délai aléatoire
                const delay = Math.random() * 10;
                
                // Opacité aléatoire
                const opacity = Math.random() * 0.4 + 0.3;
                
                // Appliquer les styles
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                circle.style.left = `${left}%`;
                circle.style.top = `${top}%`;
                circle.style.animationDuration = `${duration}s`;
                circle.style.animationDelay = `${delay}s`;
                circle.style.opacity = opacity;
                
                // Ajouter des couleurs variées
                const colors = [
                    'radial-gradient(circle, rgba(106, 17, 203, 0.1) 0%, rgba(37, 117, 252, 0.05) 70%, transparent 100%)',
                    'radial-gradient(circle, rgba(37, 117, 252, 0.1) 0%, rgba(106, 17, 203, 0.05) 70%, transparent 100%)',
                    'radial-gradient(circle, rgba(32, 201, 151, 0.1) 0%, rgba(37, 117, 252, 0.05) 70%, transparent 100%)',
                    'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, rgba(255, 193, 7, 0.05) 70%, transparent 100%)'
                ];
                
                circle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                container.appendChild(circle);
            }
        }
        
        // Initialiser les animations
        document.addEventListener('DOMContentLoaded', () => {
            animateSkillsOnScroll();
            createFloatingCircles();
           
        });
   