import { useEffect, useState } from 'react';

export default (ref) => {
  const [dimentions, setDementions] = useState(null);
  useEffect(() => {
    let unmounted = false;
    const observerTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (!unmounted) {
          setDementions(entry.contentRect);
        }
      });
    });
    resizeObserver.observe(observerTarget);
    return () => {
      unmounted = true;
      resizeObserver.unobserve(observerTarget);
    };
  }, [ref]);
  return dimentions;
};
