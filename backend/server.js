import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URL;

