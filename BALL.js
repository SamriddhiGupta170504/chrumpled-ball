class Ball{
    constructor(x,y,radius){
    
    var options ={
        restitution: 0.3,
        density:1.0,
        friction:0.2,
        isStatic:false
    }
    
     this.radius=radius;
    
     this.body=Bodies.circle(x,y,radius,options);
     World.add(world,this.body);

}

display(){

    var ballpos=this.body.position;

    //push ()
    //translate(ballpos.x,ballpos.y)
    ellipseMode (RADIUS)
    ellipse(ballpos.x,ballpos.y,this.radius,this.radius)
    //pop ()
}
}
