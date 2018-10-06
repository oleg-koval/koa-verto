// Type definitions for koa-verto 0.0

import * as Koa from 'koa';

export = setVersionHeaders;

declare function setVersionHeaders(options?: verto.Options): Koa.Middleware;

declare namespace verto {
  interface Options {
    name?: string;
    version?: string;
  }
}
