import { useState } from 'react';

import Introduction from './Components/Article/introduction copy.jsx';
import CalculatingPerimeter from './Components/Article/calculatingPerimeter.jsx';
import P5Wrapper from './Components/P5Wrapper.jsx';
import Header from './Components/header.jsx';
import StringArray from './docs/articleText.jsx';
import CalculatingArea from './Components/Article/calculatingArea.jsx';
import CalculatingSurfaceArea from './Components/Article/calculatingSurfaceArea.jsx';
import CalculatingVolume from './Components/Article/calculatingVolume.jsx';
import HausdorffD from './Components/Article/HausdorffDimensionality.jsx';
import Summary from './Components/Article/Summary.jsx';
import './App.css'; 
import SimpleDropdown from './Components/dropdown.jsx';
import sketch from './p5/MengerSponge/sketch.js';
import sketch1 from './p5/CanterCube/sketch.js';
import sketch2 from './p5/JerusalemCube/sketch.js';

const sketchMap = {
  'menger': sketch,
  'canter': sketch1,
  'jerusalem': sketch2,
};


function App() {
  const [selectedSketchKey, setSelectedSketchKey] = useState('menger');

  const currentSketch = sketchMap[selectedSketchKey];
  console.log(currentSketch)
  
  return (
   <div className='background-image'>
      <div>
        <Header />
    
        <SimpleDropdown
          selectedValue={selectedSketchKey} 
          setSelectedValue={setSelectedSketchKey} />
        <P5Wrapper 
        key={selectedSketchKey} 
        sketch={currentSketch}
        />
      
        <Introduction content={StringArray[0]} />
        <CalculatingPerimeter/>
        <CalculatingArea/>
        <CalculatingSurfaceArea/>
        <CalculatingVolume/>
        <HausdorffD/>
        <Summary/>

        
      </div>


    </div>
  );
}

export default App;
