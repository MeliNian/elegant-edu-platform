
import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Hero from '@/components/Home/Hero';
import CourseCard from '@/components/Courses/CourseCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Star, 
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Download,
  Globe
} from 'lucide-react';

const Index = () => {
  // Sample course data
  const featuredCourses = [
    {
      id: '1',
      title: 'Complete React Developer Course 2024',
      instructor: 'Sarah Chen',
      description: 'Master React.js with hooks, context, Redux, and Next.js. Build real-world projects and get job-ready skills.',
      thumbnail: '',
      rating: 4.9,
      reviewCount: 15420,
      duration: '42 hours',
      enrolledCount: 89543,
      level: 'Intermediate' as const,
      price: 49,
      originalPrice: 199,
      category: 'Web Development',
      tags: ['React', 'JavaScript', 'Frontend', 'Redux'],
      lastUpdated: '2024-01-15',
      completionRate: 92
    },
    {
      id: '2',
      title: 'Machine Learning A-Z: Python & R',
      instructor: 'Dr. Michael Rodriguez',
      description: 'Complete hands-on machine learning tutorial with data science, Tensorflow, and artificial intelligence.',
      thumbnail: '',
      rating: 4.8,
      reviewCount: 28934,
      duration: '44 hours',
      enrolledCount: 156789,
      level: 'Advanced' as const,
      price: 0,
      category: 'Data Science',
      tags: ['Python', 'Machine Learning', 'AI', 'TensorFlow'],
      lastUpdated: '2024-01-12',
      completionRate: 87
    },
    {
      id: '3',
      title: 'iOS App Development with Swift',
      instructor: 'Jennifer Park',
      description: 'Learn iOS development from scratch. Build 12 apps including a clone of popular apps like Instagram.',
      thumbnail: '',
      rating: 4.7,
      reviewCount: 9876,
      duration: '38 hours',
      enrolledCount: 34567,
      level: 'Beginner' as const,
      price: 89,
      originalPrice: 299,
      category: 'Mobile Development',
      tags: ['Swift', 'iOS', 'Xcode', 'Mobile'],
      lastUpdated: '2024-01-10',
      completionRate: 89
    }
  ];

  const features = [
    {
      icon: PlayCircle,
      title: 'Interactive Video Lessons',
      description: 'HD video content with transcripts, playback speed control, and picture-in-picture support.'
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Visual progress indicators, milestone rewards, and personalized learning paths.'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Discussion forums, peer reviews, and collaborative study groups.'
    },
    {
      icon: Award,
      title: 'Certificates & Badges',
      description: 'Industry-recognized certificates and achievement badges for completed courses.'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'Download lessons for offline learning on mobile devices.'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Courses available in multiple languages with automatic translations.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Software Engineer at Google',
      content: 'The courses here helped me transition from frontend to full-stack development. The hands-on projects were exactly what I needed.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist at Microsoft',
      content: 'Outstanding machine learning courses with real-world applications. The instructors are industry experts who know their stuff.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Manager at Stripe',
      content: 'Perfect for busy professionals. The bite-sized lessons and mobile app made it easy to learn during my commute.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose EduPlatform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {' '}Excel in Learning
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven pedagogical methods 
              to create an unparalleled learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-background rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">
                Hand-picked courses from our top-rated instructors
              </p>
            </div>
            <Button variant="outline" className="group">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Learners Worldwide</h2>
            <p className="text-xl opacity-90">
              Join millions of students who have transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2.5M+', label: 'Students Enrolled' },
              { value: '12K+', label: 'Courses Available' },
              { value: '500+', label: 'Expert Instructors' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Student Success Stories</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from learners who've achieved their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-background border rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-blue-500/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with our 
            expert-led courses. Start with a free course today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl">EduPlatform</span>
              </div>
              <p className="text-muted-foreground">
                Empowering learners worldwide with high-quality, accessible education.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Courses</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Design</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
