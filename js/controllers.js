// Controllers for the Healing App
angular.module('healingApp')

// Navigation Controller
.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.isMenuOpen = false;
    
    $scope.toggleMenu = function() {
        $scope.isMenuOpen = !$scope.isMenuOpen;
    };
    
    $scope.closeMenu = function() {
        $scope.isMenuOpen = false;
    };
    
    // Close menu when route changes
    $scope.$on('$routeChangeSuccess', function() {
        $scope.isMenuOpen = false;
    });
}])

// Home Page Controller
.controller('HomeController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.pageTitle = "Welcome to Healing Through Counselling";
    $scope.heroTitle = "Welcome! This is the first step towards giving your life a Positive Change.";
    $scope.heroSubtitle = "Professional psychological counselling and therapy services focused on your mental wellbeing and emotional healing.";
    
    $scope.services = [
        {
            title: "Pre-Marriage & Marriage Counselling",
            description: "Marriage is one of the most important events in someone's life. It may sound like a long lasting road to happiness; however, it isn't as simple as that.",
            link: "#!/marriage-counselling",
            icon: "💕"
        },
        {
            title: "Tackling Fears and Phobias",
            description: "Almost everyone has something that they are scared of such as water, heights, intimacy, low self-esteem, animals, public speaking, crowded places.",
            link: "#!/fears-phobias",
            icon: "🌟"
        },
        {
            title: "Family & Joint Family Conflicts",
            description: "Family is the most important aspect of our lives and having a strong relationship with your parents, siblings and so on is extremely beneficial.",
            link: "#!/family-conflicts",
            icon: "👨‍👩‍👧‍👦"
        },
        {
            title: "Parent-Child Teenage Issues",
            description: "Children are a source of joy in everyone's life but parenting is never an easy task and bringing up kids is quite tough.",
            link: "#!/parent-child",
            icon: "👶"
        },
        {
            title: "Emotional Disorders",
            description: "Often people have to deal with various issues, be it at work or at home. A lot of times these issues lead to stress, anxiety, anger and depression.",
            link: "#!/emotional-disorders",
            icon: "🧘‍♀️"
        },
        {
            title: "Psychological Problems",
            description: "Psychological problems can be caused due to a variety of issues and are often ignored. Issues such as OCD, Bipolar disorder, personality disorders.",
            link: "#!/psychological-problems",
            icon: "🧠"
        }
    ];
    
    $scope.aboutPreview = {
        title: "What to expect from me:",
        content: "I am a Counsellor / Psychologist / Psycho-therapist, who understands that the mental well-being of an individual is as important as being physically healthy. I provide support and therapy to help people face their challenges in a productive and positive manner.",
        qualifications: "Parul Khona (M.S.) Counsellor & Psychotherapist"
    };
}])

// About Page Controller
.controller('AboutController', ['$scope', function($scope) {
    $scope.pageTitle = "About Parul Khona";
    $scope.aboutContent = {
        title: "Professional Counselling & Psychotherapy Services",
        subtitle: "The strength of the mind is one of the most powerful gifts that people have. And keeping your mind positive and strong is not always easy.",
        description: [
            "As a Psychologist and Counsellor in Pune, I provide guidance in situations which might be difficult. I help in enabling you to enhance the quality of your life through a holistic manner of positive thinking and problem solving.",
            "I provide a safe, nurturing and confidential environment; a place where I can listen to you and help you find your way.",
            "With years of experience, I counsel people and help them realise what is standing in the way of their goals. My passion for my profession has led me to areas such as interpersonal relationships, family matters, marriage and counselling for psychological issues."
        ],
        qualifications: "Parul Khona (M.S.) Counsellor & Psychotherapist",
        mission: [
            "Provide insight and guidance towards improving your emotional well being.",
            "Help you to gauge and enhance your abilities, be it in professional, social and interpersonal situations.",
            "Guide you to empower yourself with problem solving tools which will help in improving your lifestyle."
        ]
    };
    
    $scope.corporateServices = [
        "Managing Interpersonal Conflict at work",
        "Learning to manage Work related Stress",
        "Learning to help each other at work (Team Spirit) to achieve Company's objectives",
        "Improving Interpersonal communication ability, to help eliminate unnecessary conflicts",
        "Inspiring and Motivating individuals to deliver their best at work",
        "Employee Assistance Program: Help employees with their personal issues that adversely impact their work performance"
    ];
}])

// Service Pages Controller
.controller('ServiceController', ['$scope', '$route', function($scope, $route) {
    const serviceName = $route.current.params ? $route.current.params.service : '';
    
    $scope.serviceData = getServiceData($route.current.originalPath);
    
    function getServiceData(path) {
        const services = {
            '/marriage-counselling': {
                title: "Pre-Marriage & Marriage Counselling",
                hero: "Building Strong Relationships Through Understanding",
                description: "Marriage is one of the most important events in someone's life. It may sound like a long lasting road to happiness; however, it isn't as simple as that.",
                content: [
                    "As a client once told me 'When I got married, I was looking for an ideal, but I married an ordeal and now I want a new deal.'",
                    "Marriage counselling helps couples understand each other better, communicate more effectively, and work through challenges together.",
                    "Whether you're preparing for marriage or working through relationship challenges, professional guidance can make a significant difference.",
                    "I provide a safe space for couples to express their feelings, understand each other's perspectives, and develop healthy relationship patterns."
                ],
                benefits: [
                    "Improved communication skills",
                    "Better conflict resolution",
                    "Deeper emotional connection",
                    "Stronger relationship foundation"
                ]
            },
            '/fears-phobias': {
                title: "Tackling Fears and Phobias",
                hero: "Overcoming What Holds You Back",
                description: "Almost everyone has something that they are scared of such as water, heights, intimacy, low self-esteem, animals, public speaking, crowded places, and relationships to name a few.",
                content: [
                    "Often enough these fears/phobias in reality pose no actual threat, but they can become so severe and can cause extreme anxiety.",
                    "Fear and phobias can significantly impact your quality of life, limiting your experiences and opportunities.",
                    "Through systematic therapy approaches, these fears can be addressed and overcome gradually.",
                    "I help you understand the root causes of your fears and develop coping strategies to manage and overcome them."
                ],
                benefits: [
                    "Reduced anxiety levels",
                    "Increased confidence",
                    "Better quality of life",
                    "Freedom to pursue goals"
                ]
            },
            '/family-conflicts': {
                title: "Family & Joint Family Conflicts",
                hero: "Healing Family Relationships",
                description: "Family is the most important aspect of our lives and having a strong relationship with your parents, siblings and so on is extremely beneficial to a happy life.",
                content: [
                    "However, every family has its fair share of issues and sometimes if these issues are not addressed, they can lead to larger and more bitter conflicts.",
                    "Family therapy helps address communication breakdowns, resolve conflicts, and strengthen family bonds.",
                    "Joint family situations can present unique challenges that require careful navigation and understanding.",
                    "I provide mediation and guidance to help families work through their differences and build stronger relationships."
                ],
                benefits: [
                    "Better family communication",
                    "Resolved conflicts",
                    "Stronger family bonds",
                    "Peaceful home environment"
                ]
            },
            '/parent-child': {
                title: "Parent-Child & Teenage Issues",
                hero: "Supporting Healthy Family Dynamics",
                description: "Children are a source of joy in everyone's life but parenting is never an easy task and bringing up kids is quite tough.",
                content: [
                    "The psychological well-being and growth of child is extremely important as this will only help them make better decisions as adults.",
                    "Teenage years can be particularly challenging as children navigate identity formation, peer pressure, and emotional changes.",
                    "Parent-child counselling helps improve communication, understanding, and mutual respect.",
                    "I work with both parents and children to develop healthier relationship patterns and coping strategies."
                ],
                benefits: [
                    "Improved parent-child communication",
                    "Better understanding of developmental needs",
                    "Effective discipline strategies",
                    "Stronger family relationships"
                ]
            },
            '/emotional-disorders': {
                title: "Dealing with Emotional Disorders",
                hero: "Managing Anxiety, Stress, Anger & Depression",
                description: "Often enough, people have to deal with various issues, be it at work or at home. A lot of times these issues are difficult to deal with and therefore lead to problems such as stress, anxiety, anger and depression.",
                content: [
                    "These emotional challenges can significantly impact your daily life, relationships, and overall well-being.",
                    "Professional support can help you understand these emotions and develop healthy coping mechanisms.",
                    "Through therapy, you can learn to manage stress, reduce anxiety, control anger, and overcome depression.",
                    "I provide evidence-based techniques and personalized strategies to help you regain emotional balance."
                ],
                benefits: [
                    "Better emotional regulation",
                    "Reduced stress and anxiety",
                    "Improved mood and outlook",
                    "Enhanced coping skills"
                ]
            },
            '/psychological-problems': {
                title: "Psychological Problems",
                hero: "Addressing Complex Mental Health Issues",
                description: "Psychological problems can be caused due to a variety of issues and are often ignored. People often go to doctors for physical ailments, but not for mental help.",
                content: [
                    "Issues such as OCD, Bipolar disorder, personality disorders are often ignored or misunderstood.",
                    "Mental health is as important as physical health and deserves professional attention and care.",
                    "Early intervention and proper treatment can significantly improve quality of life and prevent complications.",
                    "I provide comprehensive assessment and treatment for various psychological conditions with compassion and expertise."
                ],
                benefits: [
                    "Proper diagnosis and treatment",
                    "Improved daily functioning",
                    "Better quality of life",
                    "Ongoing support and monitoring"
                ]
            }
        };
        
        return services[path] || services['/marriage-counselling'];
    }
}])

// News Page Controller
.controller('NewsController', ['$scope', function($scope) {
    $scope.pageTitle = "Parul in the News";
    $scope.newsItems = [
        {
            title: "Mental Health Awareness",
            publication: "India Today",
            date: "March 12, 2018",
            image: "assets/india-today.jpg",
            description: "Expert insights on mental health awareness and the importance of seeking professional help."
        },
        {
            title: "Relationship Counselling Insights",
            publication: "Sakal Times",
            date: "February 11, 2018",
            image: "assets/sakal-times.jpg",
            description: "Professional guidance on maintaining healthy relationships and communication."
        },
        {
            title: "Managing Work Stress",
            publication: "Femina",
            date: "August 3, 2017",
            image: "assets/femina.jpg",
            description: "Strategies for managing workplace stress and maintaining work-life balance."
        },
        {
            title: "Family Therapy Approaches",
            publication: "Sunday Times",
            date: "December 18, 2016",
            image: "assets/sunday-times.jpg",
            description: "Innovative approaches to family therapy and conflict resolution."
        }
    ];
    
    // Helper function to get topics for each news item
    $scope.getTopicsForNews = function(index) {
        const topics = [
            ["Mental Health", "Awareness", "Stigma"],
            ["Relationships", "Communication", "Marriage"],
            ["Stress", "Workplace", "Work-Life Balance"],
            ["Family", "Therapy", "Conflict Resolution"]
        ];
        return topics[index] || ["Mental Health"];
    };
}])

// Contact Page Controller
.controller('ContactController', ['$scope', function($scope) {
    $scope.pageTitle = "Get in Touch";
    $scope.contactInfo = {
        phone: "98230-75357",
        whatsapp: "91-98230-75357",
        email: "contact@parulkhona.com",
        location: "Pune, Maharashtra",
        officeHours: "Monday - Saturday: 10:00 AM - 7:00 PM"
    };
    
    // Appointment Form Data
    $scope.contactForm = {
        appointmentFor: '',
        yourName: '',
        yourPhone: '',
        yourEmail: '',
        yourCity: '',
        sessionType: '',
        additionalMessage: '',
        privacyConsent: false,
        contactConsent: false
    };

    // Online Consultation Form Data
    $scope.onlineForm = {
        name: '',
        phone: '',
        email: '',
        timezone: '',
        sessionFor: '',
        consultationType: '',
        platform: '',
        preferredTime: '',
        emergencyContact: '',
        message: '',
        privacyConsent: false,
        techConsent: false,
        recordConsent: false
    };
    
    // Submit Appointment Form
    $scope.submitForm = function() {
        // Validation check
        if (!$scope.contactForm.privacyConsent) {
            alert('Please consent to our privacy policy to continue.');
            return;
        }
        
        if (!$scope.contactForm.appointmentFor || !$scope.contactForm.yourName || 
            !$scope.contactForm.yourEmail || !$scope.contactForm.yourPhone || 
            !$scope.contactForm.yourCity || !$scope.contactForm.sessionType) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Form submission logic would go here
        alert('Thank you for your appointment request! We will contact you within 24 hours to confirm your consultation details.');
        
        // Reset form
        $scope.contactForm = {
            appointmentFor: '',
            yourName: '',
            yourPhone: '',
            yourEmail: '',
            yourCity: '',
            sessionType: '',
            additionalMessage: '',
            privacyConsent: false,
            contactConsent: false
        };
    };

    // Submit Online Consultation Form
    $scope.submitOnlineForm = function() {
        // Validation check
        if (!$scope.onlineForm.privacyConsent || !$scope.onlineForm.techConsent) {
            alert('Please consent to all required terms to continue with online consultation.');
            return;
        }
        
        if (!$scope.onlineForm.name || !$scope.onlineForm.email || !$scope.onlineForm.phone || 
            !$scope.onlineForm.timezone || !$scope.onlineForm.sessionFor || 
            !$scope.onlineForm.consultationType || !$scope.onlineForm.platform || 
            !$scope.onlineForm.preferredTime || !$scope.onlineForm.message) {
            alert('Please fill in all required fields for online consultation.');
            return;
        }
        
        // Online consultation submission logic would go here
        alert('Thank you for booking an online consultation! You will receive a confirmation email with session details and the meeting link within 2 hours.');
        
        // Reset online form
        $scope.onlineForm = {
            name: '',
            phone: '',
            email: '',
            timezone: '',
            sessionFor: '',
            consultationType: '',
            platform: '',
            preferredTime: '',
            emergencyContact: '',
            message: '',
            privacyConsent: false,
            techConsent: false,
            recordConsent: false
        };
    };
    
    $scope.location = {
        address: "Parul Khona (M.S.) Counselling Center",
        street: "North Main Road, Koregaon Park",
        area: "Near Osho Ashram, Opposite German Bakery",
        city: "Pune, Maharashtra 411001",
        phone: "+91 98765 43210",
        email: "info@parulkhona.com",
        hours: "Mon-Sat: 9:00 AM - 7:00 PM"
    };
}]);