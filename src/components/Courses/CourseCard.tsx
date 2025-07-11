
import React from 'react';
import { Star, Clock, Users, BookOpen, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    description: string;
    thumbnail: string;
    rating: number;
    reviewCount: number;
    duration: string;
    enrolledCount: number;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    originalPrice?: number;
    category: string;
    tags: string[];
    lastUpdated: string;
    completionRate: number;
  };
  variant?: 'default' | 'compact';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant = 'default' }) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  if (variant === 'compact') {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
        <div className="flex">
          <div className="relative w-32 h-24 bg-gradient-to-br from-primary/10 to-blue-500/10 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-6 w-6 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            {course.price === 0 && (
              <Badge variant="success" className="absolute top-2 left-2 text-xs">Free</Badge>
            )}
          </div>
          <CardContent className="flex-1 p-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground">{course.instructor}</p>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {course.level}
                </Badge>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-md">
      <CardHeader className="p-0 relative">
        {/* Course Thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center backdrop-blur-sm opacity-70 group-hover:opacity-100 transition-opacity">
              <Play className="h-6 w-6 text-primary" />
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {course.price === 0 && <Badge variant="success">Free</Badge>}
            {discountPercentage > 0 && (
              <Badge variant="destructive">{discountPercentage}% OFF</Badge>
            )}
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              {course.level}
            </Badge>
          </div>

          {/* Duration */}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              <Clock className="h-3 w-3 mr-1" />
              {course.duration}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {course.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-3 w-3 mr-1" />
            <span>{course.enrolledCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground">by {course.instructor}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">
              ({course.reviewCount})
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            {course.completionRate}% completion rate
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {course.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {course.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{course.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Progress Bar (if enrolled) */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.random() * 60}%` }}
          ></div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        {/* Price */}
        <div className="flex items-center space-x-2">
          {course.price === 0 ? (
            <span className="text-lg font-bold text-green-600">Free</span>
          ) : (
            <>
              <span className="text-lg font-bold">${course.price}</span>
              {course.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${course.originalPrice}
                </span>
              )}
            </>
          )}
        </div>

        {/* Action Button */}
        <Button size="sm" className="group-hover:shadow-md transition-shadow">
          <BookOpen className="h-4 w-4 mr-2" />
          {Math.random() > 0.5 ? 'Continue' : 'Start Course'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
