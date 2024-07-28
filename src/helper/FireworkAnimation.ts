type HistoryType = {
  x: number;
  y: number;
}

const PI2 = Math.PI * 2;

class FireworkAnimation {
  public dead;
  private offsprings;
  private x;
  private y;
  private targetX;
  private targetY;
  private shade;
  private madeChilds: boolean = false;
  private history: HistoryType[] = [];
  static hasBindEvent = false;
  static startTime = new Date().getTime();

  constructor(x: number, y: number, targetX: number, targetY: number, shade: number, offsprings: number) {
    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }
  update(delta: number, birthday: any, ctx: CanvasRenderingContext2D) {
    if (this.dead) return

    let xDiff = this.targetX - this.x
    let yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) this.history.shift()

    } else {
      if (this.offsprings && !this.madeChilds) {
        
        let babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

          birthday.fireworks.push(new FireworkAnimation(this.x, this.y, targetX, targetY, this.shade, 0))

        }

      }
      this.madeChilds = true
      this.history.shift()
    }

    if (this.history.length === 0) {
      this.dead = true;
    } else if (this.offsprings) {
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        }
      } else {
      ctx.beginPath()
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      ctx.arc(this.x, this.y, 1, 0, PI2, false)
      ctx.fill()
    }

  }

  static start(birthday: any) {
    if (FireworkAnimation.hasBindEvent) return;
    window.onresize = () => birthday.resize();
    document.onclick = evt => birthday.onClick(evt);
    document.ontouchstart = evt => birthday.onClick(evt);
    FireworkAnimation.hasBindEvent = true;
    (function loop(){
      requestAnimationFrame(loop)
      const now = new Date().getTime();
      const delta = now - FireworkAnimation.startTime
      FireworkAnimation.startTime = now;
      birthday.update(delta / 1000)
    })()
  }
}

export {
  FireworkAnimation
}