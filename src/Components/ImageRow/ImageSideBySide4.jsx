import Image from "../image";


const ImageTextComponent4 = () => {
  return (
    <div className="container">
        <Image path={'src/assets/dust1.png'} text={'Iteration 1'} />
         <Image path={'src/assets/dust2.png'} text={'Iteration 2'} />
          <Image path={'src/assets/dust3.png'} text={'Iteration 3'} />
    </div>
  );
};

export default ImageTextComponent4;

