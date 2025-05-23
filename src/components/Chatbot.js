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
      className="elfsight-app-55d7184b-4905-4953-9c4a-227081ab3c8d"
      data-elfsight-app-lazy
    ></div>
  );
};

export default Chatbot;
