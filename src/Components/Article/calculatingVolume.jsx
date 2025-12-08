
import MarkdownRenderer from "../mdRenderer.jsx";
import StringArray from "../../docs/articleText.jsx";
import ImageTextComponent3 from "../ImageRow/ImageSideBySide3.jsx";
import LetexRender from "../letexRender.jsx";

const CalculatingVolume = () => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={StringArray[14]} /> 
      <ImageTextComponent3 />
       <MarkdownRenderer content={StringArray[15]} /> 
       <LetexRender content = {'V_n=\\left( \\frac{20}{27} \\right)^n'} />
        <MarkdownRenderer content={StringArray[16]} />
        <LetexRender content = {'V_{total} = \\lim_{n\\to\\infty}\\left( \\frac{20}{27} \\right)^n '} />
       <MarkdownRenderer content={StringArray[17]} /> 
    </div>
  );
};

export default CalculatingVolume;