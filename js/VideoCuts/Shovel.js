class Shovel {
  constructor(x, y) {
    this.__init__(x, y);
  }

  __init__(x, y) {
    this.shovel = new createjs.Bitmap(window.loader.getResult("Shovel"));
    this.shovel.x = 800;
    this.shovel.y = 0;
    this.shovel.name = "Shovel";
    this.shovel.regX = 30;
    this.shovel.regY = 10;
    window.stage.getChildByName("plantContainer").addChild(this.shovel);
    // 跟随鼠标
    window.stage.addEventListener(
      "stagemousemove",
      this.stagemousemove.bind(this)
    );
    // 点击铲子
    this.shovel.addEventListener("click", this.click.bind(this));
  }

  stagemousemove(e) {
    // 跟随鼠标
    this.shovel.x = e.stageX;
    this.shovel.y = e.stageY;
  }

  click(e) {
    // 点击铲子
    console.log(this.shovel.x, this.shovel.y);
    for (var i = 0; i < window.gameData.land.length; i++) {
      console.log(window.gameData.land[i]);
      for (var j = 0; j < window.gameData.land[i].length; j++) {
        console.log(window.gameData.land[i][j]);
        if (
          this.shovel.x > window.gameData.land[i][j].x + 10 &&
          this.shovel.x < window.gameData.land[i][j].x + 50 &&
          this.shovel.y > window.gameData.land[i][j].y &&
          this.shovel.y < window.gameData.land[i][j].y + 40
        ) {
          if (window.gameData.land[i][j].plant != null) {
            console.log("铲子点击了植物");
            window.stage
              .getChildByName("plantContainer")
              .removeChild(window.gameData.land[i][j].plant.peaShooter);
            window.gameData.land[i][j].plant = null;
          }
        }
      }
    }
    // 删除铲子
    window.stage.getChildByName("plantContainer").removeChild(this.shovel);
    new ShovelCard();
  }
}

class ShovelCard {
  constructor(x, y) {
    this.__init__(x, y);
  }

  __init__(x, y) {
    var shovel = new createjs.Bitmap(window.loader.getResult("Shovel"));
    shovel.x = 800;
    shovel.y = 0;
    shovel.name = "Shovel";
    shovel.regX = 0;
    shovel.regY = 0;
    window.stage.getChildByName("plantContainer").addChild(shovel);
    this.shovel = shovel;
    this.shovel.addEventListener("click", this.click.bind(this));
  }

  click() {
    // 移除铲子
    window.stage.getChildByName("plantContainer").removeChild(this.shovel);
    // 添加铲子
    new Shovel();
  }
}

export { Shovel, ShovelCard };
