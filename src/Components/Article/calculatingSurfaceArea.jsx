
import MarkdownRenderer from "../mdRenderer.jsx";
import StringArray from "../../docs/articleText.jsx";
import ImageTextComponent4 from "../ImageRow/ImageSideBySide4.jsx";
import LetexRender from "../letexRender.jsx";

const CalculatingSurfaceArea = () => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={StringArray[9]} /> 
      <ImageTextComponent4 />
       <MarkdownRenderer content={StringArray[10]} /> 
       <LetexRender content = {'S_n = 8^n*6\\left( \\frac{1}{9} \\right)^n'} />
       <MarkdownRenderer content={StringArray[11]} /> 
       <LetexRender content = {'S_{total} = \\lim_{n\\to\\infty} { 8^n*6\\left( \\frac{1}{9} \\right)^n}'} />
       <MarkdownRenderer content={StringArray[12]} />
      <MarkdownRenderer content={StringArray[13]} />
    </div>
  );
};

export default CalculatingSurfaceArea;