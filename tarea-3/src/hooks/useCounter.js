import { useState } from "react";

export const useCounter = (initial = 0) => {
  const [index, setIndex] = useState(initial);
  const increment = (max) => setIndex((i) => Math.min(max, i + 1));
  const decrement = () => setIndex((i) => Math.max(0, i - 1));
  return [index, increment, decrement];
};
