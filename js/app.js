// Main AngularJS Application
angular.module('healingApp', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/marriage-counselling', {
            templateUrl: 'views/marriage-counselling.html',
            controller: 'ServiceController'
        })
        .when('/fears-phobias', {
            templateUrl: 'views/fears-phobias.html',
            controller: 'ServiceController'
        })
        .when('/family-conflicts', {
            templateUrl: 'views/family-conflicts.html',
            controller: 'ServiceController'
        })
        .when('/parent-child', {
            templateUrl: 'views/parent-child.html',
            controller: 'ServiceController'
        })
        .when('/emotional-disorders', {
            templateUrl: 'views/emotional-disorders.html',
            controller: 'ServiceController'
        })
        .when('/psychological-problems', {
            templateUrl: 'views/psychological-problems.html',
            controller: 'ServiceController'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    // Smooth page transitions
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.loading = true;
    });
    
    $rootScope.$on('$routeChangeSuccess', function() {
        $timeout(function() {
            $rootScope.loading = false;
            // Scroll to top on route change
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Initialize scroll animations
            initScrollAnimations();
        }, 100);
    });
    
    // Initialize scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all elements with fade-in-on-scroll class
        document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Initialize on app load
    $timeout(initScrollAnimations, 500);
}]);