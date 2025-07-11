
import React from 'react';
import { ArrowRight, Play, Users, Award, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const stats = [
    { value: '50K+', label: 'Active Learners', icon: Users },
    { value: '1,200+', label: 'Expert Courses', icon: BookOpen },
    { value: '4.8/5', label: 'Average Rating', icon: Star },
    { value: '95%', label: 'Completion Rate', icon: Award },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-4 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="w-fit">
              🚀 New: AI-Powered Learning Paths Available
            </Badge>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {' '}Learning Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Discover world-class courses from industry experts. Learn at your own pace with 
                interactive content, assessments, and AI-powered personalization.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Learning Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading organizations</p>
              <div className="flex items-center space-x-8 opacity-60">
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                  <div key={company} className="text-lg font-semibold text-muted-foreground">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-background/80 backdrop-blur-sm border rounded-2xl p-6 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-4 right-4">
                  <Badge variant="success">Live</Badge>
                </div>
                <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg px-3 py-1 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>2,847 watching</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Advanced React Patterns</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>By Sarah Chen</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <Badge variant="outline">12 hrs</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-background border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Certificate</div>
                  <div className="text-xs text-muted-foreground">95% Complete</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-500" />
                <div>
                  <div className="font-semibold text-sm">Study Group</div>
                  <div className="text-xs text-muted-foreground">12 members</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
