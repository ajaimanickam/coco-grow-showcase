import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="relative mb-6">
          <Leaf 
            size={60} 
            className="text-natural-cream animate-plant-growth mx-auto"
          />
          <div className="absolute inset-0 bg-natural-cream/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-serif font-semibold text-natural-cream mb-2">
          Nature's Coir Pith
        </h2>
        <p className="text-natural-cream/80 font-light">
          Growing Naturally...
        </p>
        
        <div className="mt-8 w-32 h-1 bg-natural-cream/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-natural-cream rounded-full animate-slide-right"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;