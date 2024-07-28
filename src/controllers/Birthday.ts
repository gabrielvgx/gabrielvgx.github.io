import Random from "../util/Random";
import { FireworkAnimation } from "../helper/FireworkAnimation";

class Birthday {
  public fireworks: FireworkAnimation[] = [];
  private counter = 0;
  private width = 0;
  private height = 0;
  private spawnA = 0;
  private spawnB = 0;
  private spawnC = 0;
  private spawnD = 0;

  constructor() {
    this.resize()

    // create a lovely place to store the firework
    this.fireworks = []
    this.counter = 0

  }

  getCanvas(): HTMLCanvasElement | null {
    return document.getElementById('birthday') as HTMLCanvasElement;
  }
  getCtx(): CanvasRenderingContext2D | null {
    const canvas = this.getCanvas();
    if (!canvas) {
      return null;
    }
    return canvas.getContext('2d');
  }

  resize() {
    const canvas = this.getCanvas();
    if (!canvas) {
      return null;
    };
    this.width = canvas.width = window.innerWidth
    let center = this.width / 2 | 0
    this.spawnA = center - center / 4 | 0
    this.spawnB = center + center / 4 | 0

    this.height = canvas.height = window.innerHeight
    this.spawnC = this.height * .1
    this.spawnD = this.height * .5
  }
  
  onClick(evt: MouseEvent | TouchEvent) {
    const x = evt instanceof MouseEvent ? evt.clientX : evt.touches && evt.touches[0].pageX
    const y = evt instanceof MouseEvent ? evt.clientY : evt.touches && evt.touches[0].pageY

    const count = Random.getNumberInRange(3,5);
    for(let i = 0; i < count; i++) {
    this.fireworks.push(new FireworkAnimation(
      Random.getNumberInRange(this.spawnA, this.spawnB),
      this.height,
      x,
      y,
      Random.getNumberInRange(0, 260),
      Random.getNumberInRange(30, 110))
    )
    }

    this.counter = -1
  }

  update(delta: number) {
    const ctx = this.getCtx();
    if (!ctx) return null;
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let firework of this.fireworks) {
      firework.update(delta, this, ctx);
    }

    // if enough time passed... create new new firework
    this.counter += delta * 3 // each second
    if (this.counter >= 1) {
      this.fireworks.push(new FireworkAnimation(
        Random.getNumberInRange(this.spawnA, this.spawnB),
        this.height,
        Random.getNumberInRange(0, this.width),
        Random.getNumberInRange(this.spawnC, this.spawnD),
        Random.getNumberInRange(0, 360),
        Random.getNumberInRange(30, 110))
      )
      this.counter = 0
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

  }

  start() {
    FireworkAnimation.start(this);
  }

}

export default new Birthday();