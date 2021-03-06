class Stone{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:0.5,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        this.image=loadImage("stone.png")
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}