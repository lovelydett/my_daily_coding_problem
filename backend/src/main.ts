/**
 * @description The main entry point of the koa2 application
 * @author Yuting Xie
 * @date Oct 15, 2024
 */

import { app } from "./app/app";

// Start the application
app.listen(3000, "0.0.0.0", () => {
  console.log("Starting the application...");
});
