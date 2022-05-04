"use strict";

(function () {
  const holst = document.querySelector(".frame");
  const canvas = holst.getContext("2d");

  holst.width = 1024;
  holst.height = 576;
  canvas.fillRect(0, 0, holst.width, holst.height);

  const gravity = 0.7;
  const keys = {
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    ArrowRight: {
      pressed: false,
    },
    ArrowLeft: {
      pressed: false,
    },
  };

  class Sprite {
    constructor({
      position,
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
    }) {
      this.position = position;
      this.width = 50;
      this.height = 150;
      this.image = new Image();
      this.image.src = imageSrc;
      this.scale = scale;
      this.framesMax = framesMax;
      this.framesCurrent = 0;
      this.framesElapsed = 0;
      this.framesHold = 5;
      this.offset = offset;
    }

    draw() {
      canvas.drawImage(
        this.image,
        // х от верх лев угол
        this.framesCurrent * (this.image.width / this.framesMax),
        // у от верх лев угол
        0,
        // Ширина фрагмента
        this.image.width / this.framesMax,
        //высота фрагмента
        this.image.height,
        // Координата по оси Х, обозначающая стартовую точку
        this.position.x - this.offset.x,
        // Координата по оси Y, обозначающая стартовую точку
        this.position.y - this.offset.y,
        // Ширина изображения, полученного из исходного
        (this.image.width / this.framesMax) * this.scale,
        // Высота изображения, полученного из исходного
        this.image.height * this.scale
      );
    }

    animateFrames() {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
      if (this.framesElapsed === this.framesMax + 1) {
        this.framesElapsed = 0;
      }
    }

    update() {
      this.draw();
      this.animateFrames();
    }
  }

  class Fighter extends Sprite {
    constructor({
      position,
      velocity,
      color = "red",
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBox = { offset: {}, width: undefined, height: undefined },
    }) {
      super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset,
      });

      this.velocity = velocity;
      this.width = 50;
      this.height = 150;
      this.lastKey;
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },
        offset: attackBox.offset,
        width: attackBox.width,
        height: attackBox.height,
      };
      this.color = color;
      this.isAttacking;
      this.health = 100;
      this.framesCurrent = 0;
      this.framesElapsed = 0;
      this.framesHold = 4;
      this.sprites = sprites;
      this.dead = false;

      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image();
        sprites[sprite].image.src = sprites[sprite].imageSrc;
      }
    }

    update() {
      this.draw();
      if (!this.dead) this.animateFrames();

      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

      // draw the attack box
      // c.fillRect(
      //   this.attackBox.position.x,
      //   this.attackBox.position.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height + this.velocity.y >=
        holst.height - 96
      ) {
        this.velocity.y = 0;
        this.position.y = 330;
      } else this.velocity.y += gravity;
    }

    attack() {
      this.switchSprite("attack1");
      this.isAttacking = true;
    }

    takeHit() {
      this.health -= 20;

      if (this.health <= 0) {
        this.switchSprite("death");
      } else this.switchSprite("takeHit");
    }

    switchSprite(sprite) {
      if (this.image === this.sprites.death.image) {
        if (this.framesCurrent === this.sprites.death.framesMax - 1) {
          this.dead = true;
        }
        return;
      }

      // отмена, если наносит удар
      if (
        this.image === this.sprites.attack1.image &&
        this.framesCurrent < this.sprites.attack1.framesMax - 1
      )
        return;

      // отмена, если получает удар
      if (
        this.image === this.sprites.takeHit.image &&
        this.framesCurrent < this.sprites.takeHit.framesMax - 1
      )
        return;

      switch (sprite) {
        case "idle":
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image;
            this.framesMax = this.sprites.idle.framesMax;
            this.framesCurrent = 0;
          }
          break;
        case "runRight":
          if (this.image !== this.sprites.runRight.image) {
            this.image = this.sprites.runRight.image;
            this.framesMax = this.sprites.runRight.framesMax;
            this.framesCurrent = 0;
          }
          break;
        case "runLeft":
          if (this.image !== this.sprites.runLeft.image) {
            this.image = this.sprites.runLeft.image;
            this.framesMax = this.sprites.runLeft.framesMax;
            this.framesCurrent = 0;
          }
          break;
        case "jump":
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image;
            this.framesMax = this.sprites.jump.framesMax;
            this.framesCurrent = 0;
          }
          break;

        case "fall":
          if (this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image;
            this.framesMax = this.sprites.fall.framesMax;
            this.framesCurrent = 0;
          }
          break;

        case "attack1":
          if (this.image !== this.sprites.attack1.image) {
            this.image = this.sprites.attack1.image;
            this.framesMax = this.sprites.attack1.framesMax;
            this.framesCurrent = 0;
          }
          break;

        case "takeHit":
          if (this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image;
            this.framesMax = this.sprites.takeHit.framesMax;
            this.framesCurrent = 0;
          }
          break;

        case "death":
          if (this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image;
            this.framesMax = this.sprites.death.framesMax;
            this.framesCurrent = 0;
          }
          break;
      }
    }
  }

  const background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "./models/background.png",
  });

  const shop = new Sprite({
    position: {
      x: 600,
      y: 128,
    },
    imageSrc: "./models/shop.png",
    scale: 2.75,
    framesMax: 6,
  });

  const player = new Fighter({
    position: {
      x: 100,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    imageSrc: "./models/masked/Idle.png",
    framesMax: 7,
    scale: 2.5,
    offset: {
      x: 215,
      y: 157,
    },
    sprites: {
      idle: {
        imageSrc: "./models/masked/Idle.png",
        framesMax: 8,
      },
      runRight: {
        imageSrc: "./models/masked/Run.png",
        framesMax: 8,
      },
      runLeft: {
        imageSrc: "./models/masked/RunLeft.png",
        framesMax: 8,
      },
      jump: {
        imageSrc: "./models/masked/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "./models/masked/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "./models/masked/Attack1.png",
        framesMax: 6,
      },
      takeHit: {
        imageSrc: "./models/masked/Take Hit.png",
        framesMax: 4,
      },
      death: {
        imageSrc: "./models/masked/Death.png",
        framesMax: 6,
      },
    },
    attackBox: {
      offset: {
        x: 100,
        y: 50,
      },
      width: 160,
      height: 50,
    },
  });

  const enemy = new Fighter({
    position: {
      x: holst.width - 200,
      y: 100,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    imageSrc: "./models/akaji/Idle.png",
    framesMax: 7,
    scale: 2.5,
    offset: {
      x: 215,
      y: 167,
    },
    sprites: {
      idle: {
        imageSrc: "./models/akaji/Idle.png",
        framesMax: 4,
      },
      runLeft: {
        imageSrc: "./models/akaji/Run.png",
        framesMax: 8,
      },
      runRight: {
        imageSrc: "./models/akaji/RunRight.png",
        framesMax: 8,
      },
      jump: {
        imageSrc: "./models/akaji/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "./models/akaji/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "./models/akaji/Attack2.png",
        framesMax: 4,
      },
      takeHit: {
        imageSrc: "./models/akaji/Take hit.png",
        framesMax: 3,
      },
      death: {
        imageSrc: "./models/akaji/Death.png",
        framesMax: 7,
      },
    },
    attackBox: {
      offset: {
        x: -200,
        y: 50,
      },
      width: 160,
      height: 50,
    },
  });

  function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
      rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y &&
      rectangle1.attackBox.position.y <=
        rectangle2.position.y + rectangle2.height
    );
  }
  let i = 0;
  function animate() {
    window.requestAnimationFrame(animate);
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, holst.width, holst.height);
    background.update();
    shop.update();
    canvas.fillStyle = "rgba(255, 255, 255, 0.15)";
    canvas.fillRect(0, 0, holst.width, holst.height);
    player.update();
    enemy.update();
    player.velocity.x = 0;
    enemy.velocity.x = 0;
    i++;
    console.log(i);
    // player movement

    if (keys.a.pressed && player.lastKey === "a") {
      if (player.position.x > 5) {
        player.velocity.x = -5;
        player.switchSprite("runLeft");
      }
    } else if (keys.d.pressed && player.lastKey === "d") {
      if (player.position.x < holst.width - (10 + player.width)) {
        player.velocity.x = 5;
        player.switchSprite("runRight");
      }
    } else {
      player.switchSprite("idle");
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      if (enemy.position.x > 5) {
        enemy.velocity.x = -5;
        enemy.switchSprite("runLeft");
      }
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      if (enemy.position.x < holst.width - (10 + enemy.width)) {
        enemy.velocity.x = 5;
        enemy.switchSprite("runRight");
      }
    } else {
      enemy.switchSprite("idle");
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision & enemy gets hit
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 3
    ) {
      enemy.takeHit();
      player.isAttacking = false;
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 3) {
      player.isAttacking = false;
    }

    // this is where our player gets hit
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 1
    ) {
      player.takeHit();
      enemy.isAttacking = false;
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 1) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      enemy.health = 100;
      player.health = 100;
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }

  window.addEventListener("keydown", (event) => {
    if (!player.dead) {
      switch (event.key) {
        case "d":
          keys.d.pressed = true;
          player.lastKey = "d";
          break;
        case "a":
          keys.a.pressed = true;
          player.lastKey = "a";
          break;
        case "w":
          if (player.velocity.y === 0) player.velocity.y = -15;
          break;
        case " ":
          player.attack();
          break;
      }
    }

    if (!enemy.dead) {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          enemy.lastKey = "ArrowRight";
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastKey = "ArrowLeft";
          break;
        case "ArrowUp":
          if (enemy.velocity.y === 0) enemy.velocity.y = -15;
          break;
        case "ArrowDown":
          enemy.attack();

          break;
      }
    }
  });

  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
    }

    // enemy keys
    switch (event.key) {
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
    }
  });
  animate();
})();
