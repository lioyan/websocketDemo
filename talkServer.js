var wsServer = require('ws').Server;

wss = new wsServer({
	port: 8880
});

wss.on('connection',function(ws){
	ws.on('message',function(message){
		console.log(wss.clients.length + '个用户已经连接');
		
		wss.clients.forEach(function(client){
			client.send(wss.clients.length + '个用户已经连接')
		});
		return false;
	});
	ws.on('close',function(message){//close事件，在关闭连接的时候做一些收尾操作
		console.log(message);
	})
});

console.log(' 已经准备好监听 8880端口');