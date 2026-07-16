import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2026-07-17T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown text-center my-4 container">
      <div className="row g-2">

        <div className="col-3">
          <div className="time-box">
            <h1>{timeLeft.days}</h1>
            <p>يوم</p>
          </div>
        </div>

        <div className="col-3">
          <div className="time-box">
            <h1>{timeLeft.hours}</h1>
            <p>ساعة</p>
          </div>
        </div>

        <div className="col-3">
          <div className="time-box">
            <h1>{timeLeft.minutes}</h1>
            <p>دقيقة</p>
          </div>
        </div>

        <div className="col-3">
          <div className="time-box">
            <h1>{timeLeft.seconds}</h1>
            <p>ثانية</p>
          </div>
        </div>

      </div>
    </section>

  );
}

export default Countdown;