
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  CarouselApi
} from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-col items-center justify-center mt-6 gap-4">
          <div className="flex items-center justify-center gap-2">
            <CarouselPrevious className="static translate-y-0 mx-2" />
            <CarouselNext className="static translate-y-0 mx-2" />
          </div>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: count }).map((_, i) => (
              <motion.span
                key={i}
                className={`block h-2 w-2 rounded-full ${i === current - 1 ? "bg-tmrm-green" : "bg-gray-300"}`}
                whileHover={{ scale: 1.5 }}
                animate={i === current - 1 ? { scale: [1, 1.2, 1] } : {}}
                transition={i === current - 1 ? { repeat: Infinity, repeatType: "reverse", duration: 1 } : {}}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </motion.div>
  );
};

export default TestimonialsCarousel;
