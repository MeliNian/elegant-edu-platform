
import React from 'react';
import { Trophy, Clock, BookOpen, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface ProgressCardProps {
  title: string;
  progress: number;
  totalHours: number;
  completedHours: number;
  nextMilestone: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  certificateProgress: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  totalHours,
  completedHours,
  nextMilestone,
  category,
  level,
  certificateProgress
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Badge className={`text-xs ${getLevelColor(level)}`}>
                {level}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{progress}%</div>
            <div className="text-xs text-muted-foreground">Complete</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Main Progress */}
        <div className="space-y-2">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{completedHours}h completed</span>
            <span>{totalHours}h total</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-medium">{Math.ceil((totalHours - completedHours) * (100 - progress) / 100)}h</div>
              <div className="text-xs text-muted-foreground">Remaining</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-sm font-medium">{Math.floor(progress / 10)}</div>
              <div className="text-xs text-muted-foreground">Lessons</div>
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        <div className="p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Next Milestone</span>
          </div>
          <p className="text-sm text-muted-foreground">{nextMilestone}</p>
        </div>

        {/* Certificate Progress */}
        {certificateProgress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Certificate Progress</span>
              </div>
              <span className="text-sm text-muted-foreground">{certificateProgress}%</span>
            </div>
            <Progress value={certificateProgress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
