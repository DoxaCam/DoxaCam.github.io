import { Box } from "./Box";


const sketch = (p) => {

let iterations = [];
let iter = 0;
let reverse = false;
let cam;

p.setup = () => {
  p.createCanvas(500, 500, p.WEBGL)
  p.setAttributes({ antialias: false });
  p.normalMaterial();

  cam = p.createCamera();
  cam.setPosition(400, -400, 400);
  cam.lookAt(0, 0, 0);


  iterations.push([new Box(p,p.createVector(0,0,0), 250)]);

  iterations.push(Box.getChildren(p, iterations[0]))
  iterations.push(Box.getChildren(p, iterations[1]))
  iterations.push(Box.getChildren(p, iterations[2])) 
 
};

p.draw = () => {
  p.clear()

  if (p.frameCount % 90 === 0) {
          

          if (reverse == false) {
            iter++
          }

          if (reverse == true) {
            iter--
          }

          if (iter == 0) {
            reverse = false

          }
          if (iter == 3) {
            reverse = true;
          }
          
        }

    p.orbitControl();
      iterations[iter].forEach(box => {
        p.rotateY(p.frameCount * 0.001);
        p.rotateX(p.frameCount * 0.001);
        p.rotateZ(p.frameCount * 0.001);
        box.show()
      });

  };
};

export default sketch

