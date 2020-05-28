class Polygon{
    constructor(){
        this.body = Bodies.circle(50,100,20);
        this.radius = 40;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("Purple");
        ellipse(this.body.position.x, this.body.position.y, 40, 40);
    }
}