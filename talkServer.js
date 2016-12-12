var wsServer = require('ws').Server;

wss = new wsServer({
	port: 8880
});

wss.on('connection',function(ws){
	console.log('有人连进来了')
});

console.log(' 已经准备好监听 8880端口');