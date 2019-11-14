import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    res.send("Alo");
});

export default routes;
