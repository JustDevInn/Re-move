
// import Home from './components/home';
// import HomeMobile from './components/homemobile';


// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <HomeMobile />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Home from './components/home';
import HomeMobile from './components/homemobile';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? <HomeMobile /> : <Home />}
    </div>
  );
}

export default App;
