
import MarkdownRenderer from "../mdRenderer.jsx";
import stringArray from "../../docs/articleText.jsx";

const Summary = () => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={ stringArray[24]} /> 
    </div>
  );
};

export default Summary;