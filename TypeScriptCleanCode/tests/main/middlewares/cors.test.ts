import request from 'supertest';
import app from '../../../src/main/config/app';

describe('Cors Middleware', () => {
    test('Should enable CORS', async () => {
        app.get('/test_cors', (req, res) => {
            res.send(req.body);
        });
        await request(app).post('/test_cors').expect('access-control-allow-origin', '*');
        await request(app).post('/test_cors').expect('access-control-allow-headers', '*');
        await request(app).post('/test_cors').expect('access-control-allow-methods', '*');
    });
});
