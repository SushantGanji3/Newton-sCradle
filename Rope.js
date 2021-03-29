class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 150,
            stiffness: 0.05
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var bodyA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        stroke("white");
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    }
}