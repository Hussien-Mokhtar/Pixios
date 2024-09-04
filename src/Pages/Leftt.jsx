import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملف CSS الخاص بـ AOS

const App = () => {
  useEffect(() => {
    AOS.init(); // تهيئة AOS
  }, []);

  return (
    <div className="App">
    </div>
  );
};

export default App;
