const Koa = require('koa');
const axios = require('axios');
const setVersionHeaders = require('..');

const { name, version } = require('../package.json');

const verify = (headers) => {
  expect(headers['x-service-name']).to.be.equal(name);
  expect(headers['x-service-version']).to.be.equal(version);
};

describe('Should work with Koa as middleware', () => {
  let app;
  const url = 'http://localhost:3000/';

  before((done) => {
    app = new Koa();
    app.use(setVersionHeaders());
    app.use((ctx) => {
      ctx.body = 'ok';
    });
    app.listen(3000);
    done();
  });

  it('has headers for GET request', async () => {
    const response = await axios.get(url);
    verify(response.headers);
  });

  it('has headers for POST request', async () => {
    const response = await axios.get(url);
    verify(response.headers);
  });

  it('has headers for PUT request', async () => {
    const response = await axios.put(url);
    verify(response.headers);
  });

  it('has headers for PATCH request', async () => {
    const response = await axios.patch(url);
    verify(response.headers);
  });

  it('has headers for HEAD request', async () => {
    const response = await axios.head(url);
    verify(response.headers);
  });

  it('has headers for OPTIONS request', async () => {
    const response = await axios.options(url);
    verify(response.headers);
  });

  it('has headers for DELETE request', async () => {
    const response = await axios.delete(url);
    verify(response.headers);
  });
});
