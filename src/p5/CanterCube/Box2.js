

export class Box2 {
        constructor(p5Instance, pos, size){
        this.p = p5Instance; 
        this.size = size;
        this.pos = pos;
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
    }

    static getChildren(p5Instance, parents) {
        var children = [];
        parents.forEach(parent => {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    for (let k = -1; k < 2; k++) {
                        
                        if (p5Instance.abs(i) + p5Instance.abs(j) + p5Instance.abs(k) > 2 ) {
                            
                            var cord = p5Instance.createVector(
                                    parent.x + i * (parent.size * 1/3),
                                    parent.y + j * (parent.size * 1/3),
                                    parent.z + k * (parent.size * 1/3));
                
                            var child =  new Box2(p5Instance, cord, parent.size * 1/3);
                            children.push(child);
                        }
                    }
                }
            }
        });
        return children;
    }
    
    show(){
        this.p.translate(this.pos);
        this.p.box(this.size);
        this.p.resetMatrix();
    }
}