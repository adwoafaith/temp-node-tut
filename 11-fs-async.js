//interacting with the file system ,the module and the name of the module is fs
//synchronousle-non blocking
//asynchronously-blocking
//this is all about reading the contents in a folder
//asynchronous approach
const {readFile,writeFile}=require('fs')
console.log('starting')
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err)
    {
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err)
        {
            console.log(err)
            return
        }
        const second=result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first},${second} `,
        {flag:'a'},(err,result)=>{
            if (err)
            {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
})
})
console.log('starting the next task')
