const request = require('supertest');
const { app } = require('../src/app');

describe('Post Endpoints', () => {
  it('should fetch all posts', async (done) => {
    const res = await request(app).get('/api/posts');
    
    done();
  });
});
