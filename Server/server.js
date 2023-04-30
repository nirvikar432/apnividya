/* eslint-disable import/extensions */

// Interactor - Bussiness Login Blueprint
// entities - Holds bussiness data and manpulate to the bussiness requirement
// Persistance - Works with the Database
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createUserController from './controller/createUserController.js';
import connectDB from './config/db.js';
import validateUserController from './controller/validateUserController.js';
import createChangePasswordTokenController from './controller/createChangePasswordTokenController.js';
import validateChangePasswordTokenController from './controller/validateChangePasswordTokenController.js';
import validateServicesController from './controller/validateServicesController.js';
import smartNotesController from './controller/smartNotesController.js';
import createClassroomController from './controller/createClassroomController.js';
import getClassroomController from './controller/getClassroomController.js';
import createMeetingController from './controller/createMeetingController.js';
import getClassroomsDataController from './controller/getClassroomsDataController.js';
import checkIfUserHasClassroomController from './controller/checkIfUserHasClassroomController.js';
import joinClassroomsController from './controller/joinClassroomsController.js';
import getStudentClassroomsDataController from './controller/getStudentClassroomsDataController.js';

const AUTH_PATH = '/api/auth/';
const VALIDATE_PATH = '/api/validate/';
const NOTES_PATH = '/api/notes/';
const CLASSROOM_PATH = '/api/classroom/';
// Config for the path of .env file
dotenv.config({ path: '../server/hidden/.env' });

// Adding functionality to the node js
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT ?? 5000;

app.post(`${NOTES_PATH}smartnotes`, smartNotesController);
app.post(`${AUTH_PATH}register`, createUserController);
app.post(`${AUTH_PATH}login`, validateUserController);
app.post(`${AUTH_PATH}send-email-to-change-password`, createChangePasswordTokenController);
app.post(`${CLASSROOM_PATH}create-classroom`, createClassroomController);
app.post(`${CLASSROOM_PATH}create-meeting`, createMeetingController);
app.post(`${CLASSROOM_PATH}join-classrooms`, joinClassroomsController);
app.get(`${VALIDATE_PATH}validate-protected-pages`, validateServicesController);
app.get(`${CLASSROOM_PATH}get-classroom-data`, getClassroomController);
app.get(`${CLASSROOM_PATH}get-classrooms-data`, getClassroomsDataController);
app.get(`${CLASSROOM_PATH}check-if-user-has-classrooms`, checkIfUserHasClassroomController);
app.get(`${CLASSROOM_PATH}get-student-classrooms-data`, getStudentClassroomsDataController);
app.put(`${AUTH_PATH}reset-password`, validateChangePasswordTokenController);
// Starting the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running on ${PORT}`);
});
