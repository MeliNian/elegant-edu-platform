
import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import ProgressCard from '@/components/Dashboard/ProgressCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  Bell,
  Target,
  Users,
  PlayCircle,
  CheckCircle2,
  Star,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const currentCourses = [
    {
      title: 'Complete React Developer Course 2024',
      progress: 68,
      totalHours: 42,
      completedHours: 28.5,
      nextMilestone: 'Complete Redux section to unlock the next module',
      category: 'Web Development',
      level: 'Intermediate' as const,
      certificateProgress: 68
    },
    {
      title: 'Machine Learning A-Z: Python & R',
      progress: 34,
      totalHours: 44,
      completedHours: 15,
      nextMilestone: 'Finish Linear Regression chapter',
      category: 'Data Science',
      level: 'Advanced' as const,
      certificateProgress: 25
    },
    {
      title: 'UI/UX Design Complete Course',
      progress: 89,
      totalHours: 35,
      completedHours: 31,
      nextMilestone: 'Submit final project for certification',
      category: 'Design',
      level: 'Intermediate' as const,
      certificateProgress: 95
    }
  ];

  const recentAchievements = [
    { icon: Award, title: 'Course Completion', description: 'Completed "JavaScript Fundamentals"', date: '2 days ago' },
    { icon: Target, title: 'Learning Streak', description: '30-day learning streak achieved!', date: '1 week ago' },
    { icon: Star, title: 'Top Performer', description: 'Ranked in top 10% of the class', date: '2 weeks ago' },
  ];

  const upcomingDeadlines = [
    { title: 'React Project Submission', course: 'React Developer Course', dueDate: 'Due in 3 days', urgent: true },
    { title: 'ML Assignment #3', course: 'Machine Learning A-Z', dueDate: 'Due in 1 week', urgent: false },
    { title: 'Design Portfolio Review', course: 'UI/UX Design Course', dueDate: 'Due in 2 weeks', urgent: false },
  ];

  const stats = [
    { label: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Hours Learned', value: '156', icon: Clock, color: 'text-green-600' },
    { label: 'Certificates', value: '5', icon: Award, color: 'text-yellow-600' },
    { label: 'Streak Days', value: '30', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
              <p className="text-muted-foreground">
                You're making great progress. Keep up the excellent work!
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">3</Badge>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Continue Learning</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid gap-6">
                {currentCourses.map((course, index) => (
                  <ProgressCard key={index} {...course} />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Learning Path Recommendation */}
            <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
              <CardHeader>
                <CardTitle>Recommended Learning Path</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Complete React Developer Course</p>
                      <p className="text-sm text-muted-foreground">68% completed</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-muted border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Next.js Advanced Concepts</p>
                      <p className="text-sm text-muted-foreground">Recommended next</p>
                    </div>
                    <PlayCircle className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-muted-foreground">Full Stack Development</p>
                      <p className="text-sm text-muted-foreground">Complete prerequisites first</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-4">
                  <Target className="h-4 w-4 mr-2" />
                  Follow Learning Path
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${deadline.urgent ? 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800' : 'bg-muted/30'}`}>
                    <p className="font-medium text-sm">{deadline.title}</p>
                    <p className="text-xs text-muted-foreground">{deadline.course}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${deadline.urgent ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'}`}>
                        {deadline.dueDate}
                      </span>
                      {deadline.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Study Groups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">React Developers</p>
                    <Badge variant="success" className="text-xs">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">12 members • Next session: Tomorrow 7 PM</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Join Session
                  </Button>
                </div>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">ML Study Circle</p>
                    <Badge variant="outline" className="text-xs">Weekly</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">8 members • Next: Sunday 3 PM</p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse New Courses
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  View Certificates
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Study Partners
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set Learning Goals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
