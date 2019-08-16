const server = require('./server.js');

const port = process.env.port || 5000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})