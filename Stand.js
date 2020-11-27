class Stand{
    constructor(){
        var opt={
            isStatic: true
        }
        this.body = Bodies.rectangle(500,500,400,340,opt);
        this.width = 400;
        this.height = 340;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("pink");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
};