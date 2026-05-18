import express from 'express'

const app = express();

app.get('/service', (req, res) => {
    //Request
    const ip = req.ip;
    console.info(ip);
    //Respon
    res.json({
        status : 'ok',
        message : 'Aplikasi service jalan',
        data: {
            timestamp: new Date(Date.now())
        }
    })
});

app.get('/home', (req, res) => {
    res.send(`
        <button>Click Meee</button>
        `);
});

app.listen(3000, () => {
    console.info('Aplikasi jalan di http://localhost:3000')
});