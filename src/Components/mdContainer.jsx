
import MarkdownRenderer from "./mdRenderer";

const MarkdownContainer = ({ content }) => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={content} /> 
    </div>
  );
};

export default MarkdownContainer;