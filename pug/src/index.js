import express from "express";
import { productRouter } from "./routers/productRouter.js";

const app = express();

const PORT = 8080;


app.set("view engine", "pug");
app.set("views", "../views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productRouter);

app.get("/", (req, res) => {
  res.render("forms");
});


const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor. ${error}`));