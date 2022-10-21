import authRouter from "./auth"; // Routes
/**
 * @swagger
 * tags:
 *  name: Craete User
 *  description: user create account
 * /register:
 *  post:
 *      tags: [Resgister User]
 *      summary: Create user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          phone:
 *                              type: string
 *                          name:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          '200':
 *            description: successful
 * /login:
 *  post:
 *      tags: [Resgister User]
 *      summary: Create user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          phone:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          '200':
 *            description: successful
 * */
const initRoutes = (app) => {
  app.use("/v1/api/auth", authRouter);
  return app.use("/", (req, res) => {
    res.send("Ok");
  });
};
export default initRoutes;
