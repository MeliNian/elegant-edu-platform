
import React, { useState } from 'react';
import { Filter, X, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface CourseFilterProps {
  onFilterChange: (filters: any) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    'Web Development', 'Data Science', 'Mobile Development', 'Design', 
    'Business', 'Marketing', 'Photography', 'Music', 'Health & Fitness'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => 
      checked 
        ? [...prev, category]
        : prev.filter(c => c !== category)
    );
  };

  const handleLevelChange = (level: string, checked: boolean) => {
    setSelectedLevels(prev => 
      checked 
        ? [...prev, level]
        : prev.filter(l => l !== level)
    );
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    setSelectedLanguages(prev => 
      checked 
        ? [...prev, language]
        : prev.filter(l => l !== language)
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
    setPriceRange([0, 500]);
    setDuration('');
    setRating('');
    setSortBy('popular');
  };

  const activeFiltersCount = 
    selectedCategories.length + 
    selectedLevels.length + 
    selectedLanguages.length + 
    (duration ? 1 : 0) + 
    (rating ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Search Courses</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by title, instructor, or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Sort By</label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Categories</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <label htmlFor={category} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Level</label>
        <div className="space-y-2">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={selectedLevels.includes(level)}
                onCheckedChange={(checked) => 
                  handleLevelChange(level, checked as boolean)
                }
              />
              <label htmlFor={level} className="text-sm">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Free</span>
          <span>$500+</span>
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Duration</label>
        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger>
            <SelectValue placeholder="Any duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any duration</SelectItem>
            <SelectItem value="short">0-2 hours</SelectItem>
            <SelectItem value="medium">2-6 hours</SelectItem>
            <SelectItem value="long">6-17 hours</SelectItem>
            <SelectItem value="extended">17+ hours</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Minimum Rating</label>
        <Select value={rating} onValueChange={setRating}>
          <SelectTrigger>
            <SelectValue placeholder="Any rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any rating</SelectItem>
            <SelectItem value="4.5">4.5 & up</SelectItem>
            <SelectItem value="4.0">4.0 & up</SelectItem>
            <SelectItem value="3.5">3.5 & up</SelectItem>
            <SelectItem value="3.0">3.0 & up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Language */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Language</label>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {languages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={selectedLanguages.includes(language)}
                onCheckedChange={(checked) => 
                  handleLanguageChange(language, checked as boolean)
                }
              />
              <label htmlFor={language} className="text-sm">
                {language}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">
              {activeFiltersCount} active
            </Badge>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your course search with these filters
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge key={category} variant="secondary" className="group">
              {category}
              <Button
                variant="ghost" 
                size="sm"
                className="h-auto p-0 ml-2 hover:bg-transparent"
                onClick={() => handleCategoryChange(category, false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          {selectedLevels.map((level) => (
            <Badge key={level} variant="secondary" className="group">
              {level}
              <Button
                variant="ghost" 
                size="sm"
                className="h-auto p-0 ml-2 hover:bg-transparent"
                onClick={() => handleLevelChange(level, false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          {selectedLanguages.map((language) => (
            <Badge key={language} variant="secondary" className="group">
              {language}
              <Button
                variant="ghost" 
                size="sm"
                className="h-auto p-0 ml-2 hover:bg-transparent"
                onClick={() => handleLanguageChange(language, false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      {/* Desktop Filter Panel */}
      <div className="hidden md:block">
        <FilterContent />
      </div>
    </div>
  );
};

export default CourseFilter;
