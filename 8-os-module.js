//we are coming to use the in built modules
const { log } = require('console');
const os=require('os')

const user=os.userInfo();
console.log(user)
//getting the uptime of the system
const time=os.uptime()
console.log(`the system uptime is ${time} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem()

}
console.log(currentOs)