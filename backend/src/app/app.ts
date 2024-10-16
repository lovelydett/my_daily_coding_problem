/**
 *@description Define application and incoporate sub routers here
 *@author Yuting Xie
 *@date Oct 15, 2024
 */

import Koa from "koa";
import Router from "koa-router";
import KoaLogger from "koa-logger";

// The routers of sub applications
import { router as problemsRouter } from "./problems";

// The main Koa2 application
const app = new Koa();
app.use(KoaLogger());

// The router of the application, to be shared across the controllers
const router = new Router();

router.get("/sample", async (ctx, next) => {
  ctx.body = "Testing the sample route";
});

// Incorporate the sub routers
router.use("/problems", problemsRouter.routes());

app.use(router.routes());
app.use(router.allowedMethods());
export { app, router };
