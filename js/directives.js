// Custom Directives for the Healing App
angular.module('healingApp')

// Smooth Scroll Directive
.directive('smoothScroll', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(attrs.smoothScroll);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    };
})

// Parallax Effect Directive
.directive('parallax', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            const parallaxElement = element[0];
            const speed = parseFloat(attrs.parallax) || 0.5;
            
            angular.element($window).bind('scroll', function() {
                const scrollTop = $window.pageYOffset;
                const rate = scrollTop * speed;
                parallaxElement.style.transform = `translateY(${rate}px)`;
            });
        }
    };
}])

// Fade In Animation Directive
.directive('fadeInOnScroll', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.addClass('fade-in-on-scroll');
            
            $timeout(function() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });
                
                observer.observe(element[0]);
            }, 100);
        }
    };
}])

// Typing Animation Directive
.directive('typeWriter', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            text: '@typeWriter',
            speed: '@typeSpeed'
        },
        link: function(scope, element, attrs) {
            const text = scope.text || element.text();
            const speed = parseInt(scope.speed) || 100;
            let index = 0;
            
            element.text('');
            
            function typeChar() {
                if (index < text.length) {
                    element.text(element.text() + text.charAt(index));
                    index++;
                    $timeout(typeChar, speed);
                }
            }
            
            // Start typing when element becomes visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeChar();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element[0]);
        }
    };
}])

// Floating Animation Directive
.directive('floating', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.addClass('floating');
        }
    };
})

// Count Up Animation Directive
.directive('countUp', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            countTo: '@countUp',
            duration: '@countDuration'
        },
        link: function(scope, element, attrs) {
            const target = parseInt(scope.countTo) || 0;
            const duration = parseInt(scope.duration) || 2000;
            let current = 0;
            const increment = target / (duration / 50);
            
            function updateCount() {
                current += increment;
                if (current < target) {
                    element.text(Math.floor(current));
                    $timeout(updateCount, 50);
                } else {
                    element.text(target);
                }
            }
            
            // Start counting when element becomes visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element[0]);
        }
    };
}])

// Hover Effect Directive
.directive('hoverEffect', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            const effect = attrs.hoverEffect || 'scale';
            
            element.bind('mouseenter', function() {
                switch(effect) {
                    case 'scale':
                        element.css('transform', 'scale(1.05)');
                        break;
                    case 'rotate':
                        element.css('transform', 'rotate(5deg)');
                        break;
                    case 'lift':
                        element.css('transform', 'translateY(-5px)');
                        break;
                }
            });
            
            element.bind('mouseleave', function() {
                element.css('transform', 'none');
            });
        }
    };
});