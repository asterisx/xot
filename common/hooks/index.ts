import { useEffect, useState } from "react";
import dayjs from "dayjs";

export const useTimeSpent = () => {
  const [startDate] = useState(dayjs());
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  });

  return `${date.diff(startDate, "minute")}m`;
};
