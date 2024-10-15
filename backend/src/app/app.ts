/**
 *@description Define application and incoporate sub routers here
 *@author Yuting Xie
 *@date Oct 15, 2024
 */

import Koa from "koa";
import Router from "koa-router";
import KoaLogger from "koa-logger";

// The main Koa2 application
const app = new Koa();
app.use(KoaLogger());

// The router of the application, to be shared across the controllers
const router = new Router();

router.get("/sample", async (ctx, next) => {
  ctx.body = "Testing the sample route";
});

app.use(router.routes());
export { app, router };
