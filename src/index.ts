import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors'
import kelasRoute from './routes/kelas.route';
import kriteriaRoute from './routes/kriteria.route';
import siswaRoute from './routes/siswa.route';



const app = express();
const PORT = process.env.APP_PORT || 3000;


// Middleware to parse JSON
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));



app.use('/api/v1', kelasRoute, kriteriaRoute, siswaRoute)

// Basic route to check server status
app.get('/', (req: Request, res: Response) => {
    res.send('Hello via Bun!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});