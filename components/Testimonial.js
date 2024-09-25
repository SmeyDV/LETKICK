import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Import the Star icon from lucide-react

const Testimonial = ({ author, role, content, avatarSrc, rating, color }) => {
  const getInitials = (name) => {
    if (typeof name !== 'string' || name.trim() === '') return '?';
    return name.trim().split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center text-center mb-8">
      {/* Colorful rounded effect */}
      <div className={`w-full h-2 ${color} rounded-t-lg`}></div>
      <CardContent className="pt-6 pb-0">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src={avatarSrc} alt={author || 'Anonymous'} />
          <AvatarFallback>{getInitials(author)}</AvatarFallback>
        </Avatar>
        <blockquote className="text-lg font-medium mb-4">"{content || 'No content provided'}"</blockquote>
        {/* Display star rating */}
        <div className="flex items-center mb-2 justify-center">
          {renderStars(rating)}
        </div>
        <div className="font-semibold mb-1">{author || 'Anonymous'}</div>
        <div className="text-sm text-muted-foreground mb-4">{role || 'Unknown'}</div>
      </CardContent>
    </div>
  );
};

const testimonials = [
  {
    author: "Emma Thompson",
    role: "Marketing Manager",
    content: "This product has revolutionized our marketing strategies. It's user-friendly and incredibly effective!",
    avatarSrc: "/api/placeholder/100/100",
    rating: 5,
    color: 'bg-green-500'
  },
  {
    author: "Michael Chen",
    role: "Software Developer",
    content: "As a developer, I appreciate the robust API and excellent documentation. It's a joy to work with!",
    avatarSrc: "/api/placeholder/100/100",
    rating: 4,
    color: 'bg-purple-500'
  },
  {
    author: "Sophia Rodriguez",
    role: "Small Business Owner",
    content: "This solution has helped my business grow exponentially. The customer support is top-notch too!",
    avatarSrc: "/api/placeholder/100/100",
    rating: 5,
    color: 'bg-blue-500'
  },
  {
    author: "Alex Kim",
    role: "Data Analyst",
    content: "The insights we've gained from this tool are invaluable. It's changed the way we make decisions.",
    avatarSrc: "/api/placeholder/100/100",
    rating: 4,
    color: 'bg-indigo-500'
  }
];

const TestimonialsGrid = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto mb-6 shadow-lg rounded-lg">
      {/* Add a title to the testimonials card */}
      <h2 className="text-3xl font-bold text-center mb-4 text-purple-600">Customer Reviews</h2>
      <p className="text-center mb-8 text-gray-500">What our customers are saying...</p>
      <CardContent className="p-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TestimonialsGrid;
