import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abort = false;
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!abort) setData(json);
      } catch (err) {
        if (!abort) setError(err.message);
      } finally {
        if (!abort) setIsLoading(false);
      }
    };
    if (url) load();
    return () => { abort = true; };
  }, [url]);

  return { data, isLoading, error };
};
