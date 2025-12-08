import Image from "../image";


const ImageTextComponent1 = () => {
  return (
    <div className="container">
        <Image path={'src/assets/screenshot-2025-11-13_12-56-27.png'} text={'Interation 1'} />
         <Image path={'src/assets/screenshot-2025-11-13_12-57-01.png'} text={'Interation 2'} />
          <Image path={'src/assets/screenshot-2025-11-13_13-00-43.png'} text={'Interation 3'} />
    </div>
  );
};

export default ImageTextComponent1;