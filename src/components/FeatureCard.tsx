
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-primary/50 transition-all duration-300 animate-float transform hover:translate-z-8 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className="relative z-10">
        <div className="text-primary mb-4 text-2xl transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white transform group-hover:translate-z-4 transition-transform">{title}</h3>
        <p className="text-gray-300 transform group-hover:translate-z-2 transition-transform">{description}</p>
      </div>
    </div>
  );
};
