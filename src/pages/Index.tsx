import Navbar from "@/components/Navbar";
import TechBackground from "@/components/TechBackground";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
const Index = () => {
  // Set target date for countdown (December 1, 2025 at 00:00)
  const targetDate = new Date('2025-12-01T00:00:00');
  return <div className="min-h-screen relative">
      <TechBackground />
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          {/* Latest Product Label */}
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold text-muted-foreground tracking-widest uppercase">HOME</span>
            <div className="w-16 h-0.5 bg-neon-green mx-auto mt-2"></div>
          </div>

          {/* Main Heading */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 leading-tight font-orbitron">
              Bios v3.0
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text font-orbitron">
              Próximamente!
            </h2>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button variant="neon" size="lg" className="w-full sm:w-auto px-8 py-4 text-base font-bold tracking-wide">
              MUY PRONTO
            </Button>
            
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">La próxima generación de BiosComputer está llegando...</p>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;