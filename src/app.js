import express, { json } from 'express';
import {engine} from 'express-handlebars';
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();


app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs", 
    engine({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
}));
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));



// Routes
app.use(indexRoutes);

// Static files
app.use(express.static(path.join(__dirname, "public")));

export default app;