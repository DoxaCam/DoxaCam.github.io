
import MarkdownRenderer from "./mdRenderer.jsx";

const MarkdownContainer = ({ content }) => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={content} /> 
    </div>
  );
};

export default MarkdownContainer;