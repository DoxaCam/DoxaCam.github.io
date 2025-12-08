import Image from "../image";


const ImageTextComponent2 = () => {
  return (
    <div className="container">
        <Image path={'src/assets/cross1.png'} text={'Iteration 1'} />
         <Image path={'src/assets/cross2.png'} text={'Iteration 2'} />
          <Image path={'src/assets/cross3.png'} text={'Iteration 3'} />
    </div>
  );
};

export default ImageTextComponent2;

