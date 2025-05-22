function Spaceship(name, dps) {
  this.name = name;
  this.dps = dps;

  this.getDetails = function () {
    return `${this.name} deals ${this.dps * 5} critical damage`;
  };
}

const vexor = new Spaceship("Vexor", 3000);
console.log(vexor.getDetails());
