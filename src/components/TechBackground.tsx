const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-background to-tech-surface"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-neon-green/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      
      {/* Corner accent glows */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-neon-green/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/20 to-transparent"></div>
    </div>
  );
};

export default TechBackground;