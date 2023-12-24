//import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/posts';
import loger from './middle/log';


const PORT: any = process.env.PORT ?? 4000;

const router: Express = express();
router.use(loger);

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});






router.use('/', routes);


router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});





router.listen(PORT,()=>{
    console.log("server running on ",PORT);
})

export default router;