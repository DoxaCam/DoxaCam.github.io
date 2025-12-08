import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function LetexRender({ content }) {
  return (
    <div style={{margin: '20px auto' }}>
      <BlockMath math= {content} />
    </div>
  );
}

export default LetexRender;

