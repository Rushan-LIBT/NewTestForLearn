import { Children } from "react";

export const siteData = {
  contactInfo: {
    phone: '+44-20-3870-5111',
    email: 'enquiries@libt.co.uk',
    address: '51 Gloucester Place, London W1U 8JF'
  },
  
  hero: {
    title: 'You can transform your dreams into reality!',
    description: 'At London Institute of Business and Technology',
    searchPlaceholder: 'Enter the course name or awarding body'
  },
  
  footer: {
    contactInfo: {
      phone: '+44 20 7262 0022',
      email: 'info@libt.co.uk',
      address: '51 Gloucester Place, London W1U 8JF'
    },
    description: 'Leading provider of flexible higher education, delivering world-class qualifications from top UK universities to students worldwide.'
  },
  
  courses: {
    title: 'Popular Courses',
    subtitle: 'Discover our most sought-after programs designed to advance your career',
    list: [
      {
        id: 1,
        title: 'MBA - Master of Business Administration',
        university: 'University of Chichester',
        duration: '18-24 months',
        students: '2,500+ enrolled',
        rating: '4.8',
        image: '/course-placeholder.svg',
        features: ['100% Online', 'Flexible Schedule', 'Career Support']
      },
      {
        id: 2,
        title: 'BSc (Hons) Computing',
        university: 'University of Hertfordshire',
        duration: '3-4 years',
        students: '1,800+ enrolled',
        rating: '4.7',
        image: '/course-placeholder.svg',
        features: ['Industry Focused', 'Practical Projects', 'Work Placement']
      },
      {
        id: 3,
        title: 'MSc Healthcare Management',
        university: 'University of Wolverhampton',
        duration: '12-18 months',
        students: '1,200+ enrolled',
        rating: '4.9',
        image: '/course-placeholder.svg',
        features: ['NHS Approved', 'Expert Faculty', 'Real-world Case Studies']
      },
      {
        id: 4,
        title: 'MSc Psychology',
        university: 'University of East London',
        duration: '15-20 months',
        students: '950+ enrolled',
        rating: '4.6',
        image: '/course-placeholder.svg',
        features: ['Research Focused', 'Clinical Training', 'Dissertation Support']
      },
      // {
      //   id: 5,
      //   title: 'BA (Hons) Business Management',
      //   university: 'University of Bedfordshire',
      //   duration: '3 years',
      //   students: '3,200+ enrolled',
      //   rating: '4.5',
      //   image: '/course-placeholder.svg',
      //   features: ['Entrepreneurship', 'Global Perspective', 'Internship Program']
      // },
      // {
      //   id: 6,
      //   title: 'MSc Data Science & Analytics',
      //   university: 'University of Hertfordshire',
      //   duration: '12-16 months',
      //   students: '1,600+ enrolled',
      //   rating: '4.8',
      //   image: '/course-placeholder.svg',
      //   features: ['Machine Learning', 'Big Data', 'Industry Projects']
      // },
      // {
      //   id: 7,
      //   title: 'LLM International Commercial Law',
      //   university: 'University of Wolverhampton',
      //   duration: '12-15 months',
      //   students: '780+ enrolled',
      //   rating: '4.7',
      //   image: '/course-placeholder.svg',
      //   features: ['International Focus', 'Legal Practice', 'Moot Court']
      // },
      // {
      //   id: 8,
      //   title: 'MSc Cybersecurity',
      //   university: 'University of Greenwich',
      //   duration: '12-18 months',
      //   students: '1,400+ enrolled',
      //   rating: '4.9',
      //   image: '/course-placeholder.svg',
      //   features: ['Ethical Hacking', 'Risk Assessment', 'Industry Certified']
      // },
      // {
      //   id: 9,
      //   title: 'BA (Hons) Digital Marketing',
      //   university: 'University of Chichester',
      //   duration: '3 years',
      //   students: '2,100+ enrolled',
      //   rating: '4.6',
      //   image: '/course-placeholder.svg',
      //   features: ['SEO/SEM', 'Social Media', 'Analytics Tools']
      // },
    {
        id: 5,
        title: 'BA (Hons) Business Management',
        university: 'University of Bedfordshire',
        duration: '3 years',
        students: '3,200+ enrolled',
        rating: '4.5',
        image: '/course-placeholder.svg',
        features: ['Entrepreneurship', 'Global Perspective', 'Internship Program']
    }
    ]
  },

  feelingLost: {
    title: 'Feeling a bit lost?',
    description: 'Take a look at our course offerings and find the perfect starting point for your educational journey.',
    categories: [
      {
        id: 1,
        icon: '💼',
        title: 'Business and Management',
        description: 'Develop leadership skills and business acumen'
      },
      {
        id: 2,
        icon: '💻',
        title: 'Computer Science and IT',
        description: 'Master technology and programming skills'
      },
      {
        id: 3,
        icon: '👥',
        title: 'Human Resources',
        description: 'Learn people management and organizational skills'
      },
      {
        id: 4,
        icon: '⚖️',
        title: 'Law',
        description: 'Understand legal principles and justice systems'
      },
      {
        id: 5,
        icon: '🏥',
        title: 'Healthcare',
        description: 'Advance your career in healthcare and medical fields'
      },
      {
        id: 6,
        icon: '🧠',
        title: 'Psychology',
        description: 'Explore human behavior and mental processes'
      }
    ],
    buttons: {
      primary: 'View All Courses',
      secondary: 'Speak to an Advisor'
    }
  },

  restSpreadDemo: {
    title: 'Advanced Learning Experience',
    subtitle: 'Discover how modern technology enhances your educational journey with dynamic features and personalized learning paths.',
    primaryFeature: {
      title: 'Dynamic Learning Platform',
      description: 'Experience a cutting-edge educational platform that adapts to your learning style and pace, powered by advanced algorithms and personalized content delivery.'
    },
    additionalInfo: [
      {
        icon: '🚀',
        title: 'Accelerated Progress',
        description: 'Fast-track your learning with optimized study paths and adaptive content that adjusts to your performance.'
      },
      {
        icon: '🎯',
        title: 'Personalized Goals',
        description: 'Set and achieve custom learning objectives with AI-powered recommendations and progress tracking.'
      },
      {
        icon: '🌟',
        title: 'Premium Resources',
        description: 'Access exclusive study materials, expert insights, and industry-relevant case studies.'
      }
    ],
    // These will be spread into the component using ...restProps
    extraFeatures: ['AI-Powered Tutoring', '24/7 Support', 'Mobile Learning'],
    stats: { students: 15000, courses: 75, satisfaction: 4.9, universities: 12 },
    styles: {
      backgroundColor: '#f1f5f9',
      textColor: '#1a365d',
      borderRadius: '12px'
    },
    mainMessage: 'Transform your career with advanced education',
    subMessages: ['Learn from industry experts', 'Flexible online format', 'Globally recognized certificates'],
    primaryButton: 'Start Learning Today',
    secondaryButton: 'Explore Programs'
  }
};