class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, 20, options);
      //this.width = 50;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

     fill("yellow");
     strokeWeight(4);
      stroke("blue");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20,20);
     
    }
  };
  