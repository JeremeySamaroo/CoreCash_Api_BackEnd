
import express, { Application } from "express";

const app: Application = express();

// Sets the port for the application.
const port =  3000;
app.listen(port, () => console.log(`Server running on ${port}`));
