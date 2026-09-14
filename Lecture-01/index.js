const http=require('http');

const server=http.createServer((req,res)=>{
    res.end("hello bhai");
});
server.listen(3000,()=>{
    console.log("hello this is first server");
    
})