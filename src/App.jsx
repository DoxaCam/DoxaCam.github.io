

import MarkdownContainer from './Components/mdContainer.jsx';
import ArtEssay from './docs/ArtEssay.js';
import './App.css'; 


function App() {
  return (
    // Apply your centering CSS class here
    <div className="centered-layout"> 
      <MarkdownContainer content={ArtEssay} />
    </div>
  );
}

export default App;
