import express from 'express';

const app = express();
const PORT = process.env.PORT || 5080

app.use(express.static('./public'));

app.listen(PORT); 