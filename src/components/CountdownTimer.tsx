import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'DÍAS' },
    { value: timeLeft.hours, label: 'HORAS' },
    { value: timeLeft.minutes, label: 'MINUTOS' },
    { value: timeLeft.seconds, label: 'SEGUNDOS' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-neon-green/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative bg-tech-surface border border-tech-border rounded-xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 min-w-[100px] md:min-w-[120px] lg:min-w-[140px]">
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground block leading-none font-orbitron">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-muted-foreground mt-3 tracking-wider">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;