const gateway = require('fast-gateway')
const server = gateway({
  routes: [
    {
        prefix: '/s1',
        target: 'http://127.0.0.1:3000'
    },
    {
        prefix: '/s2',
        target: 'http://127.0.0.1:3001'
    },
]
})

server.start(8080)
