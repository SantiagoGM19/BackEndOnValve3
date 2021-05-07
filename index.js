const {app} = require('./server');

const port = 3000;
app.listen(port, () => {
    console.log(`API node: http://localhost:${port}/`);
});