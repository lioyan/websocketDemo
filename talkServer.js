var wsServer = require('ws').Server;

wss = new wsServer({
	port: 8880
});

wss.on('connection',function(ws){
	ws.on('message',function(message){
		console.log(message);
		if(message.indexOf('买')>-1){
			ws.send('买你妹');
		}
		else{
			ws.send('好的');
		}
		return false;
	})
});

console.log(' 已经准备好监听 8880端口');