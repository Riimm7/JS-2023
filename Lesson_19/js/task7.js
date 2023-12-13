class Snowflake {
  constructor() {
    this.render();
  }

  getRandomNum(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  render() {
    this.img = document.createElement("img");
    this.img.setAttribute("src", "/Lesson_19/images/snowflake.png");
    const screenWidth = window.screen.width;
    const snowflakeLeft = this.getRandomNum(0, screenWidth);
    this.snowflakeTop = -50;
    this.img.style.position = "absolute";
    this.img.style.left = snowflakeLeft + "px";
    this.img.style.top = this.snowflakeTop + "px";
    this.img.style.width = this.getRandomNum(10, 50) + "px";
    document.body.append(this.img);
  }

  run() {
    const screenHeight = window.screen.height;
    const snowflakeStep = this.getRandomNum(1, 5);
    const snowflakeRotate = this.getRandomNum(-10, 10);
    let snowflakeRotation = 0;
    setInterval(() => {
      this.snowflakeTop += snowflakeStep;
      this.img.style.top = this.snowflakeTop + "px";
      snowflakeRotation += snowflakeRotate;
      if (snowflakeRotation > 360) {
        snowflakeRotation -= 360;
      }
      this.img.style.transform = `rotate(${snowflakeRotation}deg)`;
      if (this.snowflakeTop > screenHeight) this.snowflakeTop = -50;
    }, this.getRandomNum(30, 50));
  }
}

const snowflakes = Array.from({ length: 100 }, () => new Snowflake());

snowflakes.forEach((snowflake) => snowflake.run());
