import { Router } from "express";
import candidatosRoutes from "./candidatos.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Eu ouvo música!"})
});

routes.get("/candidatos", candidatosRoutes);

export default routes;