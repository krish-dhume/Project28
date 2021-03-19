class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        }
       this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
  charge(){
      this.sling.bodyA=null
  }


    display(){
        if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.pointB;
    push()
    stroke("green");
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop()
        }
     }
 }