import { useState, useEffect } from "react";
interface CountdownTimerProps {
  targetDate: string; // Or "Date" if you expect a Date object
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime(); // Convert to timestamp (number)
    const target = new Date(targetDate).getTime(); // Convert to timestamp (number)
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-row justify-center items-center gap-5 md:gap-12 bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-white p-2 md:p-6 shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] rounded-2xl animate-slidleft800">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold">{timeLeft.days}</h1>
        <p className="text-xs md:text-sm text-gray-300 font-semibold">Days</p>
      </div>
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold">{timeLeft.hours}</h1>
        <p className="text-xs md:text-sm text-gray-300 font-semibold">Hours</p>
      </div>
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold">{timeLeft.minutes}</h1>
        <p className="text-xs md:text-sm text-gray-300 font-semibold">
          Minutes
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold">{timeLeft.seconds}</h1>
        <p className="text-xs md:text-sm text-gray-300 font-semibold">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
