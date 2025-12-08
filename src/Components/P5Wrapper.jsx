

// This component receives the selected sketch function as a prop
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const wrapperRef = useRef(null);
  const p5InstanceRef = useRef(null);

  const containerStyle = {
    position: 'relative', 
    width: '600px', 
    margin: '30px auto', 
    opacity: '1',
    borderRadius: '10px'
  };

  useEffect(() => {
    
    p5InstanceRef.current = new p5(sketch, wrapperRef.current);
    
    return () => {
      if (p5InstanceRef.current) {
        // Crucial: This stops the draw loop and removes the canvas from the DOM.
        p5InstanceRef.current.remove(); 
        // Important: Nullify the reference to help garbage collection.
        p5InstanceRef.current = null; 
      }
    };

    // --- STEP 2: SETUP FUNCTION (Runs after cleanup for subsequent renders) ---
    // Create the new p5 instance, attaching it to the wrapperRef element.
  
    
  }, [sketch]); // Dependency array: Effect re-runs when 'sketch' changes

  return (
    // This container is where the canvas will live.
      <div ref={wrapperRef} 
    className="p5-container"
    style={containerStyle}>
      {/* p5 canvas will be appended here */}
    </div>
  );
};
export default P5Wrapper;




