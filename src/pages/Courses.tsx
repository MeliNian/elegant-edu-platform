
import React, { useState } from 'react';
import Navigation from '@/components/Layout/Navigation';
import CourseCard from '@/components/Courses/CourseCard';
import CourseFilter from '@/components/Courses/CourseFilter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Grid, List, Filter } from 'lucide-react';

const Courses = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(true);

  // Sample course data - in a real app, this would come from an API
  const courses = [
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
    },
    {
      id: '4',
      title: 'Full Stack Web Development Bootcamp',
      instructor: 'Alex Johnson',
      description: 'Complete full-stack development course covering HTML, CSS, JavaScript, Node.js, MongoDB, and React.',
      thumbnail: '',
      rating: 4.6,
      reviewCount: 12543,
      duration: '65 hours',
      enrolledCount: 45678,
      level: 'Beginner' as const,
      price: 79,
      originalPrice: 249,
      category: 'Web Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      lastUpdated: '2024-01-08',
      completionRate: 84
    },
    {
      id: '5',
      title: 'Digital Marketing Masterclass',
      instructor: 'Emma Wilson',
      description: 'Learn SEO, social media marketing, content marketing, and Google Ads from industry professionals.',
      thumbnail: '',
      rating: 4.5,
      reviewCount: 8765,
      duration: '28 hours',
      enrolledCount: 32145,
      level: 'Intermediate' as const,
      price: 59,
      originalPrice: 199,
      category: 'Marketing',
      tags: ['SEO', 'Social Media', 'Google Ads', 'Content Marketing'],
      lastUpdated: '2024-01-05',
      completionRate: 91
    },
    {
      id: '6',
      title: 'UI/UX Design Complete Course',
      instructor: 'David Chang',
      description: 'Master user interface and user experience design with Figma, Adobe XD, and design thinking principles.',
      thumbnail: '',
      rating: 4.8,
      reviewCount: 11234,
      duration: '35 hours',
      enrolledCount: 28456,
      level: 'Intermediate' as const,
      price: 0,
      category: 'Design',
      tags: ['Figma', 'Adobe XD', 'UI Design', 'UX Design', 'Prototyping'],
      lastUpdated: '2024-01-03',
      completionRate: 88
    }
  ];

  const handleFilterChange = (filters: any) => {
    // In a real app, this would filter the courses based on the selected filters
    console.log('Filters changed:', filters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
              <p className="text-muted-foreground">
                Discover {courses.length.toLocaleString()} courses from expert instructors
              </p>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Breadcrumb & Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>Home</span>
              <span>/</span>
              <span className="text-foreground">All Courses</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">
                {courses.length} courses
              </Badge>
              <span>Showing all results</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {(showFilters || window.innerWidth >= 1024) && (
            <div className="w-80 flex-shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <CourseFilter onFilterChange={handleFilterChange} />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} variant="compact" />
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Courses
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Showing 6 of 1,247 courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
