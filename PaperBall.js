class PaperBall {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("magenta");
      fill("blue");
      ellipse(0, 0,this.radius*1,this.radius*1);
      pop();
    }
  };