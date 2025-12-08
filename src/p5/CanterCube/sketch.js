import { Box2 } from "./Box2";


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
        cam.setPosition(1000, -1000, 1000);
        cam.lookAt(0, 0, 0);
        
        iterations.push([new Box2(p, p.createVector(0,0,0), 250)]);
        
        iterations.push(Box2.getChildren(p, iterations[0]));
        iterations.push(Box2.getChildren(p, iterations[1]));
        iterations.push(Box2.getChildren(p, iterations[2]));
        iterations.push(Box2.getChildren(p, iterations[3]));
    }

    p.draw = () => {
        p.clear();
        p.orbitControl();

       if (p.frameCount % 120 === 0) {
            
            if (reverse === false) {
                iter++;
            } else {
                iter--;
            }

            if (iter <= 0) {
                iter = 0;
                reverse = false;
            }
            if (iter >= 3) {
                iter = 3;
                reverse = true;
            }
        }

        if (iterations[iter]) {
            iterations[iter].forEach(box => {
                p.rotateY(p.frameCount * 0.001);
                p.rotateX(p.frameCount * 0.001);
                p.rotateZ(p.frameCount * 0.001);
                box.show();
            });
        }
    }
};

export default sketch;