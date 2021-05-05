class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("255");
      rect(pos.x, pos.y, this.width, this.height);

      // for (var k = 0; k <=width; k = k + 80) {
        
      //   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
      //}
    }
  };
