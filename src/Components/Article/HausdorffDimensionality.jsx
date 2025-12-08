
import MarkdownRenderer from "../mdRenderer.jsx";
import Image from "../image.jsx";
import LetexRender from "../letexRender.jsx";
import stringArray from "../../docs/articleText.jsx";
const HausdorffD = () => { 
  return (
    <div className="markdown-container">
       <MarkdownRenderer content={stringArray[18]} /> 
      <Image path={'src/assets/screenshot-2025-11-23_00-48-05.png'} text={'3rd Iteration'} />
       <MarkdownRenderer content={stringArray[19]} /> 
       <LetexRender content={'N = \\left( \\frac{1}{r} \\right)^{H_d}\\text{ or } H_d = \\frac{log(N)}{log(\\frac{1}{r})}'}/>
         <MarkdownRenderer content={stringArray[20]} /> 
       <LetexRender content={'8(\\sqrt2 -1 )^N + 12(\\sqrt2 -1 )^{2N}'}/>
           <MarkdownRenderer content={stringArray[22]} /> 
               <LetexRender content={'N = \\frac{-2 + \\sqrt7}{6}'}/>
             <MarkdownRenderer content={stringArray[21]} /> 
              <LetexRender content={'\\frac{log(\\frac{-2 + \\sqrt7}{6})}{log(\\sqrt2 -1)} \\simeq 2.5291'}/>
              <MarkdownRenderer content={stringArray[23]} /> 
    </div>
  );
};

export default HausdorffD ;