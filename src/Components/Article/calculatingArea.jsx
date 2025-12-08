
import MarkdownRenderer from "../mdRenderer.jsx";
import StringArray from "../../docs/articleText.jsx";
import ImageTextComponent2 from "../ImageRow/ImageSideBySide2.jsx";
import LetexRender from "../letexRender.jsx";

const CalculatingArea = () => { 
  return (
    <div className="markdown-container">
      <MarkdownRenderer content={StringArray[5]} /> 
      <ImageTextComponent2 />
       <MarkdownRenderer content={StringArray[6]} /> 
       <LetexRender content = {'\\text{let } A_{L} \\text{ be the total area smaller squares in the middle sides of the fractals at any iteration n:}\\\\ A_{L} = 4^n(\\sqrt2  -1 )^{4n}\\\\ \\text{let } A_{S} \\text{ be the area of the larger squares in corners the fractals at any iteration n:}\\\\ A_{S} = 4^n(\\sqrt2  -1 )^{2n}\\\\ \\text{Lets sums both parts of the fractal: }\\\\ \\sum_{n=0}^{\\infty}4^n(\\sqrt2  -1 )^n + \\sum_{n=0}^{\\infty }4^n(\\sqrt2  -1 )^{2n}\\\\ \\text{ see convergance formula, where } a\\text{ is the first term in the series and r is the common ratio: }\\\\ S =\\frac{a}{1-r} \\\\ \\text{Sum for } A_S +A_L: \\\\\\ \\frac{4(\\sqrt2 -1)^2}{1 - (\\sqrt2 -1)^2} + \\frac{4(\\sqrt2 -1)^2}{1 - (\\sqrt2 -1)^2} = \\frac{-4 +3\\sqrt2}{2} = A_{t}\\\\ \\text{Take the area total removed },A_{t} \\text{ and subtract from the unit square\'s area:} \\\\ 1 - A_{t} = \\frac{10 -7\\sqrt2}{2}'} />
        <MarkdownRenderer content={StringArray[8]} />
       <MarkdownRenderer content={StringArray[7]} /> 
    </div>
  );
};

export default CalculatingArea;