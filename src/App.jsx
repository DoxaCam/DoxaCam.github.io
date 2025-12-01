

import MarkdownContainer from './Components/mdContainer';
import ArtEssay from './docs/ArtEssay';
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
