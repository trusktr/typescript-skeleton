//import './setup-globals'
import Foo from './Foo'
//import './Bar'

// Prove we can import IMVU code in `module()` format:
//import cps from 'imvu/cps'
//console.log(' -- imported IMVU module:\n', cps)
//cps.sequence_([()=>{}], ()=>{}) // <-- no type errors.

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
