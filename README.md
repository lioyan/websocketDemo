# websocketDemo
搭建一个websocket服务器

基于node

使用ws(一个小巧的websocket库)构建

#起步
npm init

npm install ws -save

#tips
ws不能直接发送json

socket.send({}) 服务器端收到的是 [object Object]

方法：JSON.stringify() 转成字符串 然后想干嘛就干嘛