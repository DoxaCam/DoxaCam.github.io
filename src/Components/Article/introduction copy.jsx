
import MarkdownRenderer from "../mdRenderer.jsx";
import SimpleDropdown from "../dropdown.jsx";

const Introduction = ({ content }) => { 
  return (
    <div className="parent-container">
      <MarkdownRenderer content={content} /> 
    </div>
  );
};

export default Introduction;