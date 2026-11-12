import { useEffect, useState } from "react";
import "../styles/clock.css";

// ======= Clock Component ======= \\
const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  return (
    <>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </>
  );
};

export default Clock;
