"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = time.getHours();
  const hours = (hrs % 12 || 12).toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = hrs >= 12 ? "PM" : "AM";

  return (
    <div className="text-2xl md:text-3xl flex cursor-pointer">
      {hours}:{minutes}:<span className="text-[#51a2ff]">{seconds}</span>
    </div>
  );
};

export default Clock;
