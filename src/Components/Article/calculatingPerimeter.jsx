
import MarkdownRenderer from "../mdRenderer.jsx";
import StringArray from "../../docs/articleText.jsx";
import ImageTextComponent from "../ImageRow/ImageSideBySide.jsx";
import LetexRender from "../letexRender.jsx";

const CalculatingPerimeter = () => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={StringArray[1]} /> 
      <ImageTextComponent />
       <MarkdownRenderer content={StringArray[2]} /> 
       <LetexRender content = {'P_n = \\frac{1}{2}\\left( \\frac{8}{3} \\right)^{n}'} />
       <MarkdownRenderer content={StringArray[3]} /> 
       <LetexRender content = {'P_{sum} = \\sum_{n=1}^{\\infty}\\frac{1}{2}\\left( \\frac{8}{3} \\right)^{n} \\\\ \\text{geometric series converges if} \\left| r \\right|\\lt 1,\\text{where }r=\\frac{8}{3}\\\\ r \\text{ fails the convergence test; }P_{sum} \\text{ diverges to } \\infty '} />
       <MarkdownRenderer content={StringArray[4]} />
    </div>
  );
};

export default CalculatingPerimeter;