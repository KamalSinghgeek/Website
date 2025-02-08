
import { ThreeScene } from "@/components/ThreeScene";
import { FeatureCard } from "@/components/FeatureCard";
import { Wand2, Layers, Zap, Monitor, Smartphone, Laptop, CircuitBoard, Orbit, Box } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white perspective-1000">
      <ThreeScene />
      
      {/* Enhanced Hero Section with Complex Header */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pointer-events-none">
        {/* 3D Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse transform rotate-3d-slow" />
          <div className="absolute top-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-pulse delay-300 transform -rotate-3d-slow" />
          <div className="absolute top-40 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float transform rotate-3d-fast" />
        </div>

        {/* Header Content with 3D Effects */}
        <div className="relative text-center max-w-4xl mx-auto transform hover:translate-z-8 transition-transform duration-500">
          {/* 3D Floating Icons */}
          <div className="absolute -top-20 left-1/4 transform -translate-x-1/2 animate-float delay-100 hover:scale-110 transition-transform">
            <CircuitBoard className="w-8 h-8 text-primary/70 transform rotate-3d-slow" />
          </div>
          <div className="absolute -top-16 right-1/4 transform translate-x-1/2 animate-float delay-200 hover:scale-110 transition-transform">
            <Orbit className="w-10 h-10 text-secondary/70 transform -rotate-3d-slow" />
          </div>
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 animate-float delay-300 hover:scale-110 transition-transform">
            <Box className="w-12 h-12 text-primary/60 transform rotate-3d-fast" />
          </div>

          {/* Enhanced 3D Title */}
          <div className="relative transform hover:translate-z-12 transition-transform duration-500">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="relative inline-block transform hover:translate-z-8 transition-transform">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transform hover:scale-105 transition-transform">
                  The Dev Guy
                </span>
              </span>
            </h1>
            
            {/* 3D Animated Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 relative transform hover:translate-z-4 transition-transform">
              <span className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left after:duration-300">
                Develop the future and be the future
              </span>
              <br />
              <span className="text-lg text-gray-400">DM today for queries</span>
            </p>
          </div>

          {/* Enhanced 3D Button */}
          <button className="relative px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-z-4 hover:shadow-lg hover:shadow-primary/25 active:scale-95 pointer-events-auto group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Contact Me</span>
          </button>
        </div>
      </section>

      {/* Enhanced 3D Features Section */}
      <section className="py-20 px-4 transform hover:translate-z-4 transition-transform">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 transform hover:translate-z-8 transition-transform">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wand2 className="w-8 h-8" />}
              title="AI-Powered Design"
              description="Create stunning designs instantly with our advanced AI algorithms"
            />
            <FeatureCard
              icon={<Layers className="w-8 h-8" />}
              title="Smart Layout"
              description="Automatically organize your elements for perfect composition"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Real-time Collaboration"
              description="Work together seamlessly with your team in real-time"
            />
          </div>
        </div>
      </section>

      {/* Enhanced 3D Platform Support */}
      <section className="py-20 px-4 bg-black/20 transform hover:translate-z-4 transition-transform">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 transform hover:translate-z-8 transition-transform">Available Everywhere</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center transform hover:translate-z-8 hover:scale-110 transition-transform">
              <Monitor className="w-12 h-12 mb-2 text-primary" />
              <span>Web</span>
            </div>
            <div className="flex flex-col items-center transform hover:translate-z-8 hover:scale-110 transition-transform">
              <Smartphone className="w-12 h-12 mb-2 text-primary" />
              <span>Mobile</span>
            </div>
            <div className="flex flex-col items-center transform hover:translate-z-8 hover:scale-110 transition-transform">
              <Laptop className="w-12 h-12 mb-2 text-primary" />
              <span>Desktop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3D CTA Section */}
      <section className="py-20 px-4 transform hover:translate-z-4 transition-transform">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 transform hover:translate-z-8 transition-transform">Ready to Transform Your Design Process?</h2>
          <p className="text-xl text-gray-300 mb-8 transform hover:translate-z-4 transition-transform">
            Join thousands of designers who have already revolutionized their workflow
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-secondary rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-z-4 hover:shadow-lg hover:shadow-primary/25 active:scale-95">
            Start Creating Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
