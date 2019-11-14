import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    res.send("Alo");
});

routes.get("/books", (req, res) => {
    res.json([{ id: 1, name: "Default Book" }]);
});

export default routes;
