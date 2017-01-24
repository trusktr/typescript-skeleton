import Foo from './Foo'

const sleep = time => new Promise(r => setTimeout(r, time))

async function main() {
    const f = new Foo
    f.sayHello()
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    f.sayWorld()
}

console.log(new Map)

main()
