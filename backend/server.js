require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./router/auth-router');
const cookRouter = require('./router/cook-router');
const teamRouter = require('./router/team-router');
const regRouter=require('./router/reg-router');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
// const multer = require('multer');

const corsOptions={
    origin:'*',
    methods:'GET, POST, PUT, DELETE,PATCH, HEAD',
    CRENDENTIALS:true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/form', cookRouter);
app.use('/api/form', teamRouter);
app.use('/api/data', regRouter);
connectDb();
app.use(errorMiddleware);
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname); // Use Date.now() to ensure unique filenames
//     }
//   });
  
//   const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB
//   });
//   app.post('/api/form/cook', async (req, res) => {
//     const { fullName, email, speciality, dish, isAdmin } = req.body;
//     // const numericExperience = parseFloat(experience);
//     // const photoPath = files; // Get the path of the uploaded photo
//     try {
//         const newCook = new Cook({ fullName, email, speciality, dish, isAdmin});
//         const savedCook = await newCook.save();
//         res.status(201).json(savedCook);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

app.use((req, res, next)=>{
    console.log(`Received ${req.method} request at ${req.url}`);
    next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})