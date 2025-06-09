import { useState } from 'react';
import {
  Play,
  BookOpen,
  Star,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Heart,
  ShoppingCart,
  Monitor,
  UserCheck,
  GraduationCap,
  Shield,
  Mail,
  Lightbulb
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Development');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const courseCategories = ['Development', 'Design', 'Marketing', 'Business', 'Health'];

  const courseData = {
    Development: [
      {
        id: 'python-course-dev-001',
        title: 'The Python Course: build web application',
        instructor: 'Douglas Howell',
        level: 'Beginner',
        rating: 4.5,
        reviews: 13245,
        price: 19.00,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-blue-800 to-blue-600',
        icon: '🐍',
        category: 'Python'
      },
      {
        id: 'react-course-dev-002',
        title: 'How to easily create a website with React',
        instructor: 'Morris Mccoy',
        level: 'Intermediate',
        rating: 3.5,
        reviews: 7700,
        price: 29.00,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-cyan-600 to-cyan-400',
        icon: '⚛️',
        category: 'React'
      },
      {
        id: 'wordpress-course-dev-003',
        title: 'WordPress: introduction to wordpress for beginners',
        instructor: 'Victor Elliott',
        level: 'Advance',
        rating: 5.0,
        reviews: 9300,
        price: 39.00,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-blue-600 to-blue-400',
        icon: '🌐',
        category: 'WordPress'
      },
      {
        id: 'graphql-course-dev-004',
        title: 'GraphQL: introduction to graphQL for beginners',
        instructor: 'Michael Cundiff',
        level: 'Beginner',
        rating: 4.5,
        reviews: 9300,
        price: 0,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-pink-600 to-pink-400',
        icon: '🔗',
        category: 'GraphQL'
      }
    ],
    Design: [
      {
        id: 'figma-course-design-001',
        title: 'Complete Figma Design Course',
        instructor: 'Sarah Wilson',
        level: 'Beginner',
        rating: 4.8,
        reviews: 5420,
        price: 49.00,
        originalPrice: 89.00,
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-purple-600 to-purple-400',
        icon: '🎨',
        category: 'UI/UX'
      },
      {
        id: 'photoshop-course-design-002',
        title: 'Adobe Photoshop Masterclass',
        instructor: 'James Rodriguez',
        level: 'Intermediate',
        rating: 4.6,
        reviews: 8900,
        price: 35.00,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-blue-800 to-blue-600',
        icon: '📸',
        category: 'Graphics'
      }
    ],
    Marketing: [
      {
        id: 'digital-marketing-course-001',
        title: 'Complete Digital Marketing Course',
        instructor: 'Emma Thompson',
        level: 'Beginner',
        rating: 4.7,
        reviews: 12500,
        price: 59.00,
        originalPrice: 99.00,
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-green-600 to-green-400',
        icon: '📈',
        category: 'Digital Marketing'
      }
    ],
    Business: [
      {
        id: 'business-strategy-course-001',
        title: 'Business Strategy and Leadership',
        instructor: 'Robert Chen',
        level: 'Advance',
        rating: 4.9,
        reviews: 6800,
        price: 79.00,
        originalPrice: null,
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-indigo-600 to-indigo-400',
        icon: '💼',
        category: 'Strategy'
      }
    ],
    Health: [
      {
        id: 'nutrition-course-health-001',
        title: 'Complete Nutrition and Wellness Course',
        instructor: 'Dr. Lisa Martinez',
        level: 'Beginner',
        rating: 4.8,
        reviews: 4200,
        price: 45.00,
        originalPrice: 75.00,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
        color: 'from-green-500 to-green-300',
        icon: '🥗',
        category: 'Nutrition'
      }
    ]
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="course-rating-stars flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 text-yellow-400 fill-current opacity-50" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="geeks-navbar fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="academy-logo flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Akshay Patil</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="nav-link-home text-indigo-600 hover:text-indigo-800 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#courses" className="nav-link-courses text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Courses</a>
                <a href="#about" className="nav-link-about text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#instructors" className="nav-link-instructors text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Instructors</a>
                <a href="#contact" className="nav-link-contact text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="btn-login text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Login
              </button>
              <button className="btn-signup bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="mobile-menu-btn inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="mobile-nav-home block px-3 py-2 text-indigo-600 font-medium">Home</a>
              <a href="#courses" className="mobile-nav-courses block px-3 py-2 text-gray-700 hover:text-indigo-600">Courses</a>
              <a href="#about" className="mobile-nav-about block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#instructors" className="mobile-nav-instructors block px-3 py-2 text-gray-700 hover:text-indigo-600">Instructors</a>
              <a href="#contact" className="mobile-nav-contact block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              <div className="mobile-cta-buttons pt-4 space-y-2">
                <button className="mobile-btn-login w-full text-left px-3 py-2 text-gray-700">Login</button>
                <button className="mobile-btn-signup w-full bg-indigo-600 text-white px-3 py-2 rounded-lg text-left">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="limitless-learning-hero-section pt-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="hero-decorative-elements absolute inset-0 pointer-events-none">
          {/* Orange Circle */}
          <div className="floating-circle-orange absolute top-20 left-10 w-16 h-16 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>

          {/* Green Star */}
          <div className="floating-star-green absolute top-32 left-1/4 text-green-500 text-2xl animate-bounce">✦</div>

          {/* Angular Logo */}
          <div className="floating-angular-logo absolute top-16 right-20 w-12 h-12 bg-red-600 rounded-sm transform rotate-45 flex items-center justify-center">
            <span className="text-white font-bold text-xs transform -rotate-45">A</span>
          </div>

          {/* React Logo */}
          <div className="floating-react-logo absolute top-40 right-1/3 text-cyan-500 text-3xl animate-spin-slow">⚛️</div>

          {/* Figma Logo */}
          <div className="floating-figma-logo absolute bottom-40 left-20 text-purple-500 text-2xl">🎨</div>

          {/* Golden Diamond */}
          <div className="floating-diamond-gold absolute bottom-32 right-32 w-8 h-8 bg-yellow-400 transform rotate-45 animate-pulse"></div>

          {/* Circular Pattern */}
          <div className="floating-pattern-circles absolute bottom-20 right-10 opacity-30">
            <div className="w-32 h-32 border-2 border-orange-300 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="limitless-learning-content">
              <h1 className="limitless-learning-main-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                welcome <br /> I'm
                <span className="fingertips-highlight relative inline-block ml-3">
                  <span className="relative z-10">Akshay Patil</span>
                  <div className="fingertips-underline absolute bottom-2 left-0 w-full h-4 bg-yellow-300 opacity-70 transform -skew-x-12"></div>
                </span>
              </h1>

              <p className="limitless-learning-description text-xl text-gray-600 mb-8 max-w-2xl">
               Hi! I'm , a passionate and detail-oriented Front-End Developer with over 8+ months of hands-on internship experience.  </p>

              {/* Feature Points */}
              <div className="learning-features-list mb-8 space-y-3">
                <div className="feature-point flex items-center">
                  <div className="feature-icon bg-gray-900 rounded-full p-1 mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="feature-text text-gray-700 font-medium">Certified java full stack developer</span>
                </div>
                <div className="feature-point flex items-center">
                  <div className="feature-icon bg-gray-900 rounded-full p-1 mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="feature-text text-gray-700 font-medium">Experience As Front End Developer </span>
                </div>
                <div className="feature-point flex items-center">
                  <div className="feature-icon bg-gray-900 rounded-full p-1 mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="feature-text text-gray-700 font-medium">Get membership</span>
                </div>
              </div>

              <div className="limitless-learning-cta-buttons flex flex-col sm:flex-row gap-4">
                <button className="btn-get-started-limitless bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="btn-watch-video-limitless border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 group">
                  <div className="play-button-circle bg-blue-500 rounded-full p-2 mr-3 group-hover:bg-blue-600 transition-colors">
                    <Play className="h-4 w-4 text-white fill-current" />
                  </div>
                  Watch video
                </button>
              </div>
            </div>

            <div className="limitless-learning-visual relative">
              <div className="student-image-container relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHhm3thWkbFRw/profile-displayphoto-shrink_800_800/B4DZZcTfvcG8Ac-/0/1745305337428?e=1755129600&v=beta&t=6N1d1kRIpGpYPHVV8vEg1MGa0vb9pOhIRXE72ydBo-8"
                  alt="Happy student with learning materials"
                  className="student-main-image rounded-full w-96 h-96 object-cover shadow-2xl mx-auto"
                />

                {/* Floating UI Elements */}
                {/* Daily New Students Card */}
                <div className="daily-students-card absolute top-8 right-0 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="students-avatars flex -space-x-2 mr-3">
                      <div className="student-avatar w-8 h-8 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">J</div>
                      <div className="student-avatar w-8 h-8 bg-red-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">S</div>
                      <div className="student-avatar w-8 h-8 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">M</div>
                      <div className="student-avatar w-8 h-8 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">1K</div>
                    </div>
                  </div>
                  <p className="daily-students-text text-sm font-medium mt-2">FrontEnd Developer  & <br /> Java FullStack Developer</p>
                </div>

                {/* Lightbulb Idea Icon */}
                <div className="idea-lightbulb absolute top-20 left-8 bg-yellow-400 p-3 rounded-full shadow-lg animate-pulse">
                  <Lightbulb className="h-6 w-6 text-yellow-800" />
                </div>

                {/* Congratulations Card */}
                <div className="congratulations-card absolute bottom-16 left-0 bg-white p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center">
                    <div className="congrats-icon bg-yellow-400 p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-yellow-800" />
                    </div>
                    <div>
                      <p className="congrats-title text-sm font-bold text-gray-900">E-Mail ID</p>
                      <p className="congrats-subtitle text-xs text-gray-600">akshaypatil22082002@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="limitless-stats-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" style={{}}>
            <div className="stat-card-enhanced bg-yellow-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow" style={{ display: 'flex', height: '150px' }} >
              <div className="stat-icon-container bg-yellow-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Monitor className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <div className="stat-number-enhanced text-4xl font-bold text-gray-900 mb-2">10+</div>
                <div className="stat-label-enhanced text-gray-600 font-medium">Live Project</div>
              </div>
            </div>

            <div className="stat-card-enhanced bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow" style={{ display: 'flex', height: '150px' }} >
              <div className="stat-icon-container bg-gray-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <div style={{ display: 'flex', gap:'15px',position: 'relative', alignItems: 'center' }}>
                  <div className="stat-number-enhanced text-4xl font-bold text-gray-900 mb-2">8 </div>
                  <div className="stat-label-enhanced text-gray-600 font-medium"><b>/ month's</b> </div>
                </div>
                <div className="stat-label-enhanced text-gray-600 font-medium">Experience </div>
              </div>
            </div>

            <div className="stat-card-enhanced bg-purple-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow" style={{ display: 'flex', height: '150px' }} >
              <div className="stat-icon-container bg-purple-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <div className="stat-number-enhanced text-4xl font-bold text-gray-900 mb-2">B.C.A</div>
                <div className="stat-label-enhanced text-gray-600 font-medium">Education</div>
              </div>
            </div>

            <div className="stat-card-enhanced bg-teal-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow" style={{ display: 'flex', height: '150px' }} >
              <div className="stat-icon-container bg-teal-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <div >
                <div className="stat-number-enhanced text-4xl font-bold text-gray-900 mb-2">2+</div>
                <div className="stat-label-enhanced text-gray-600 font-medium">Certified Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="features-title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
               Experience 
            </h2>
            <p className="features-description text-xl text-gray-600 max-w-3xl mx-auto">
             Work Experience At Following Company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-indigo-100 p-3 rounded-lg w-fit mb-6">
                <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHt0swK34iC_g/company-logo_200_200/company-logo_200_200/0/1630572053683?e=1755129600&v=beta&t=Vg1eGKdFuGCLTN9jfMziMyseUTy-XGiqjt2QVhTRRsA" className="h-9 w-9 text-indigo-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">LogicoWise Systems</h3>
              <p className="feature-text text-gray-600">Access your courses from any device, anywhere in the world. Learn at your own pace.</p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-green-100 p-3 rounded-lg w-fit mb-6">
                <img src='https://media.licdn.com/dms/image/v2/C4E0BAQE_YtPz-B45XQ/company-logo_200_200/company-logo_200_200/0/1630635784772?e=1755129600&v=beta&t=nuDqXHHkY5i7c5gZQ6W460L6bgm7MVs4pETC_DvjKeU' className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="feature-text text-gray-600">Learn from industry professionals with years of real-world experience.</p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <img src='https://media.licdn.com/dms/image/v2/C4E0BAQHjIpicPOY8Qw/company-logo_200_200/company-logo_200_200/0/1630625599228/mnjsoftware_logo?e=1755129600&v=beta&t=NQFvhkbt1lJyRK8UFuhThRd3qY_bgrM489tPyHryNc0' className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">Certificates</h3>
              <p className="feature-text text-gray-600">Earn industry-recognized certificates to boost your career prospects.</p>
            </div>

            {/* <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-orange-100 p-3 rounded-lg w-fit mb-6">
                <Code className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">Hands-on Projects</h3>
              <p className="feature-text text-gray-600">Build real projects that you can add to your portfolio and showcase to employers.</p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">Mobile Learning</h3>
              <p className="feature-text text-gray-600">Download courses and learn offline on your mobile device during commutes.</p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="feature-icon bg-red-100 p-3 rounded-lg w-fit mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">Lifetime Access</h3>
              <p className="feature-text text-gray-600">Get lifetime access to course materials and updates at no extra cost.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Enhanced Popular Courses Section */}
      <section id="courses" className="most-popular-courses-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="popular-courses-header text-center mb-16">
            <h2 className="popular-courses-main-title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Courses
            </h2>
            <p className="popular-courses-subtitle text-xl text-gray-600 mb-12">
              These are the most popular courses among Geeks Courses learners worldwide in year 2022
            </p>

            {/* Course Category Tabs */}
            <div className="course-category-tabs-container bg-gray-100 rounded-lg p-2 inline-flex mb-12">
              {courseCategories.map((category) => (
                <button
                  key={`category-tab-${category.toLowerCase()}`}
                  id={`tab-${category.toLowerCase()}`}
                  className={`course-category-tab px-6 py-3 rounded-md font-medium transition-all duration-200 ${activeCategory === category
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="popular-courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseData[activeCategory]?.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="popular-course-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Course Header with Gradient */}
                <div className={`course-header-gradient bg-gradient-to-br ${course.color} p-8 text-center relative`}>
                  <div className="course-icon-large text-4xl mb-4">{course.icon}</div>
                  <h3 className="course-tech-title text-2xl font-bold text-white mb-2">
                    {course.category}
                  </h3>

                  {/* Wishlist Button */}
                  <button className="course-wishlist-btn absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                    <Heart className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Course Content */}
                <div className="course-detailed-content p-6">
                  {/* Level Badge */}
                  <div className="course-level-container mb-4">
                    <span className={`course-level-badge px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className="course-detailed-title text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h4>

                  {/* Instructor */}
                  <p className="course-instructor-name text-gray-600 mb-4">
                    By: <span className="font-medium">{course.instructor}</span>
                  </p>

                  {/* Rating */}
                  <div className="course-rating-section flex items-center mb-6">
                    {renderStars(course.rating)}
                    <span className="course-rating-number ml-2 text-sm font-medium text-gray-900">
                      {course.rating}
                    </span>
                    <span className="course-review-count ml-1 text-sm text-gray-500">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Price and Enroll */}
                  <div className="course-footer-section flex items-center justify-between">
                    <div className="course-pricing">
                      {course.price === 0 ? (
                        <span className="course-free-price text-2xl font-bold text-green-600">Free</span>
                      ) : (
                        <div className="course-paid-pricing">
                         
                          {course.originalPrice && (
                            <span className="course-original-price text-gray-400 line-through ml-2">
                              ${course.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <button className="course-get-enrolled-btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center group">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Get Enrolled
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="popular-courses-cta text-center mt-12">
            <button className="btn-view-all-popular-courses border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View All Popular Courses
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="testimonials-title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="testimonials-description text-xl text-gray-600">
              Don't just take our word for it - hear from our successful students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="testimonial-rating flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text text-gray-600 mb-6">
                "The React course was amazing! I went from zero to landing my first developer job in just 3 months. The instructors are fantastic and the projects are very practical."
              </p>
              <div className="testimonial-author flex items-center">
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah Johnson"
                  className="testimonial-avatar w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="testimonial-name font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="testimonial-role text-gray-600 text-sm">Frontend Developer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="testimonial-rating flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text text-gray-600 mb-6">
                "The Python course opened up a whole new career path for me. Now I'm working as a data scientist at a Fortune 500 company. Worth every penny!"
              </p>
              <div className="testimonial-author flex items-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Michael Chen"
                  className="testimonial-avatar w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="testimonial-name font-semibold text-gray-900">Michael Chen</div>
                  <div className="testimonial-role text-gray-600 text-sm">Data Scientist</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="testimonial-rating flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text text-gray-600 mb-6">
                "As a career changer, I was nervous about learning design. But the UI/UX course was so well-structured and supportive. I now work at a top design agency!"
              </p>
              <div className="testimonial-author flex items-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Emily Rodriguez"
                  className="testimonial-avatar w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="testimonial-name font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="testimonial-role text-gray-600 text-sm">UX Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="cta-title text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="cta-description text-xl text-indigo-100 mb-8">
            Join thousands of students who have transformed their careers with our courses
          </p>
          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-start-learning bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Learning Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-browse-courses border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Browse Courses
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footer-brand">
              <div className="footer-logo flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">GeeksAcademy</span>
              </div>
              <p className="footer-description text-gray-400 mb-6">
                Empowering learners worldwide with high-quality online education and practical skills for the modern workforce.
              </p>
            </div>

            <div className="footer-links">
              <h3 className="footer-heading text-lg font-semibold mb-4">Courses</h3>
              <ul className="footer-list space-y-2 text-gray-400">
                <li><a href="#" className="footer-link hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Mobile Development</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="footer-heading text-lg font-semibold mb-4">Company</h3>
              <ul className="footer-list space-y-2 text-gray-400">
                <li><a href="#" className="footer-link hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="footer-heading text-lg font-semibold mb-4">Support</h3>
              <ul className="footer-list space-y-2 text-gray-400">
                <li><a href="#" className="footer-link hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="footer-link hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="footer-copyright text-gray-400">
                © 2024 GeeksAcademy. All rights reserved.
              </p>
              <div className="footer-social flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="social-link text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="social-link text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="social-link text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;