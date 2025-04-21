import { useEffect } from 'react';

const Chatbot= () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-3eca900e-7e59-4af5-a0cc-35c336e232a3"
      data-elfsight-app-lazy
    ></div>
  );
};

export default Chatbot;
