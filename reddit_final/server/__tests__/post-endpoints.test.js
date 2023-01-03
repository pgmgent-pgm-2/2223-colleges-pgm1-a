const request = require('supertest');
const { app } = require('../src/app');

describe('Post Endpoints', () => {
  let postId;

  it('should fetch all posts', async (done) => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    done();
  });

  it('should fetch a single post', async (done) => {
    const postId = '88fe844f-8a95-4af7-abba-53c8d058a710';
    const res = await request(app).get(`/api/posts/${postId}`).set('Accept', 'application/json');
    expect(res.statusCode).toEqual(200);
    expect(typeof res).toBe('object');
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('body');
    expect(res.body).toHaveProperty('userId');
    expect(res.body).toHaveProperty('communityId');
    expect(res.body).toHaveProperty('createdAt');

    done();
  });

  it('should return status code 404 if a specific post is not found', async (done) => {
    const postId = 'unknown';
    const res = await request(app).get(`/api/posts/${postId}`).set('Accept', 'application/json');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
    done();
  });

  it('should create a new post', async (done) => {
    const userId = 1;
    const res = await request(app)
      .post('/api/posts')
      .send({
        title: 'test is cool',
        body: 'Lorem ipsum',
        userId: '882c63c4-2506-46e1-851e-ecccf3dbccd0',
        communityId: '627056fd-b335-472e-9b33-905ca9feac22'
    }).set('Accept', 'application/json');
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    postId = res.body.id;
    expect(res.body).toHaveProperty('createdAt');
    done();
  });

  it('should update a post', async () => {
    const res = await request(app)
      .put(`/api/posts/${postId}`)
      .send({
        userId: 1,
        title: 'updated title',
        content: 'Lorem ipsum',
      }).set('Accept', 'application/json');

    expect(res.statusCode).toEqual(200);
  });

  it('should delete a post', async (done) => {
    const res = await request(app).delete(`/api/posts/${postId}`);
    expect(res.statusCode).toEqual(200);

    done();
  });
});
