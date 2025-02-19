const canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight
canvas.width = 200

const ctx = canvas.getContext('2d')
const road = new Road(canvas.width/2, canvas.width*0.9)

const N = 1000
const cars = genereateCars(N)

const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 1)
]

function genereateCars(N) {
    const cars = []
    for(let i = 0; i < N; i++) {
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"))
    }
    return cars
}

animate()

function animate() {

    for(let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, [])
    }

    for(let i = 0; i < cars.length; i++) {
        cars[i].update(road.borders, traffic)
    }
    canvas.height = window.innerHeight

    ctx.save()
    ctx.translate(0, -cars[0].y + canvas.height * 0.7)
    road.draw(ctx)
    for(let i =0; i < traffic.length; i++) {
        traffic[i].draw(ctx, "red")
    }

    ctx.globalAlpha = 0.2
    for(let i =0; i < cars.length; i++) {
        cars[i].draw(ctx, "blue")
    }
    ctx.globalAlpha = 1
    cars[0].draw(ctx, "blue", true)
    ctx.restore()

    requestAnimationFrame(animate)
}
