class Robot {
	constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x_coord, y_coord) {
    let new_coords = []
    new_coords.push(x_coord)
    new_coords.push(y_coord)
    this.coordinates = new_coords
  }

  setBearing(new_bearing) {
    let possBearings = ["north", "south", "east", "west"]
    if (possBearings.includes(new_bearing)) {
      this.bearing = new_bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(new_coords_and_direction) {
    this.setCoordinates(new_coords_and_direction.x, new_coords_and_direction.y)
    this.setBearing(new_coords_and_direction.direction)
  }

  turnRight() {
    let rightWard = ["north", "east", "south", "west"]
    let currentDirection = rightWard.indexOf(this.bearing)
    if (currentDirection < 3) {
      this.bearing = rightWard[currentDirection + 1]
    } else {
      this.bearing = rightWard[0]
    }
  }

  turnLeft() {
    let leftWard = ["north", "west", "south", "east"]
    let currentDirection = leftWard.indexOf(this.bearing)
    if (currentDirection < 3) {
      this.bearing = leftWard[currentDirection + 1]
    } else {
      this.bearing = leftWard[0]
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    }
  }

  translateInstructions(instructions) {
    let instructionSteps = instructions.split("");
    let translator = {
      "L": this.turnLeft,
      "R": this.turnRight,
      "A": this.advance
    }
    for (let i=0; i<instructionSteps.length; i++) {
      translator[instructionSteps[i]].call(this)
    }
  }

}
