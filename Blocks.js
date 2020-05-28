class BOX {
    constructor(x,y) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.width = 20;
      this.height = 20;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      console.log(this.body.speed);
    if(this.body.speed<3){
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }else{
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity-5;
      tint(255,this.visiblity);
      //rect(pos.x, pos.y, this.width, this.height);s
      pop();
    } 
    }
  };
