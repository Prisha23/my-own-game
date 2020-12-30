class Person {
    constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image = loadImage("happy face.jpg");
    }

    display(){
      this.p1.image(this.image);
      
    }
  };
  