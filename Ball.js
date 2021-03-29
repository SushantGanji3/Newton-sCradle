class Ball {
    constructor(x, y, radius) {
        var options = {
            airFriction: 0.01,
            density: 0.05
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}