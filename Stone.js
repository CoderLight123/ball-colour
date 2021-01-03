class Stone {
    constructor(x, y, r) {
      var options = { 
        isStatic:false,
        restitution:0,
        density: 1.2, 
        friction: 1};
  
      this.image = loadImage("polygon.png");
      this.body = Bodies.circle(x, y, r, options);
      this.x=x;
      this.y=y;
      this.r=r;
      World.add(world, this.body);
    }
  
    display() {
      var ball=this.body.position ;
      push();
      translate(ball.x, ball.y);
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image,0,0,this.r*2.5,this.r*2.5);
      pop();
    }
  }