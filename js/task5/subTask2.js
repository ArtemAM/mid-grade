const Gila = {
  dps: 600,
  speed: 1200,
  warp: function () {
    setTimeout(() => {
      console.log(`Gila is moving at ${this.speed} au/s`);
    }, 1000);
  },
};

Gila.warp();
