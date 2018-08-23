const Koa = require('koa');
const setVersionHeaders = require('..');

const { name, version } = require('../package.json');

const verify = (headers, options) => {
  expect(headers['x-service-name']).to.be.equal(options.name);
  expect(headers['x-service-version']).to.be.equal(options.version);
};

describe('Should work with Koa as middleware with values from package.json', () => {
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
    const response = await request.get(url);
    verify(response.headers, { name, version });
  });

  it('has headers for POST request', async () => {
    const response = await request.get(url);
    verify(response.headers, { name, version });
  });

  it('has headers for PUT request', async () => {
    const response = await request.put(url);
    verify(response.headers, { name, version });
  });

  it('has headers for PATCH request', async () => {
    const response = await request.patch(url);
    verify(response.headers, { name, version });
  });

  it('has headers for HEAD request', async () => {
    const response = await request.head(url);
    verify(response.headers, { name, version });
  });

  it('has headers for OPTIONS request', async () => {
    const response = await request.options(url);
    verify(response.headers, { name, version });
  });

  it('has headers for DELETE request', async () => {
    const response = await request.delete(url);
    verify(response.headers, { name, version });
  });
});

describe('Should work with Koa as middleware with custom values', () => {
  let app;
  const url = 'http://localhost:3001/';
  const options = {
    name: 'app',
    version: 'v0.1.1'
  };

  before((done) => {
    app = new Koa();
    app.use(setVersionHeaders(options));
    app.use((ctx) => {
      ctx.body = 'ok';
    });
    app.listen(3001);
    done();
  });

  it('has headers for GET request', async () => {
    const response = await request.get(url);
    verify(response.headers, options);
  });

  it('has headers for POST request', async () => {
    const response = await request.get(url);
    verify(response.headers, options);
  });

  it('has headers for PUT request', async () => {
    const response = await request.put(url);
    verify(response.headers, options);
  });

  it('has headers for PATCH request', async () => {
    const response = await request.patch(url);
    verify(response.headers, options);
  });

  it('has headers for HEAD request', async () => {
    const response = await request.head(url);
    verify(response.headers, options);
  });

  it('has headers for OPTIONS request', async () => {
    const response = await request.options(url);
    verify(response.headers, options);
  });

  it('has headers for DELETE request', async () => {
    const response = await request.delete(url);
    verify(response.headers, options);
  });
});
