import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is listening on port 3000');
    }
);

app.get('/', (req, res) => {
    res.send('Server is up and running');
}
);

app.use('/api', router);

app.get('*', (req, res) => {
    res.send('Wrong address!');
}
);




