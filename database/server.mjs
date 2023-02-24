import express from 'express';
import cors from 'cors';
import { connect, Schema, model } from 'mongoose';
import bodyParser from 'body-parser';
const { json } = bodyParser;


const port = process.env.PORT || 5000;

const app = express();

// Enable parsing of JSON requests
app.use(json());

// Use cors middleware to enable CORS
app.use(cors());

// Connect to the MongoDB database
connect('mongodb+srv://brysongulley25:Birdie2555@cluster0.m33mioj.mongodb.net/form?retryWrites=true&w=majority', { useNewUrlParser: true });

// Define a Mongoose schema
const dataSchema = new Schema({
    last_name: String,
    first_name: String,
    middle_initial: String,
    preferred_name: String,
    pronouns: String,
    address: String,
    city: String,
    zip: Number, // Updated from String to Number
    home_phone: Number, // Updated from String to Number
    cell_phone: Number, // Updated from String to Number
    dob: Date, // Updated from String to Date
    age: Number, // Updated from String to Number
    ssn: Number, // Updated from String to Number
    patient_email: String,
    parent_email: String,
    emergency_name: String,
    emergency_phone: Number,
    emergency_relation: String,
    primary_care_provider_name: String,
    primary_care_provider_phone: Number,
    pharmacy_name: String,
    pharmacy_address: String,
    dentist_name: String,
    sex: [String],
    gender: [String],
    allergies: [String]
});

// Create a Mongoose model from the schema
const Data = model('Data', dataSchema);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.post('/data', (req, res) => {
    const data = new Data({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        middle_initial: req.body.middle_initial,
        preferred_name: req.body.preferred_name,
        pronouns: req.body.pronouns,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        home_phone: req.body.home_phone,
        cell_phone: req.body.cell_phone,
        dob: req.body.dob,
        age: req.body.age,
        ssn: req.body.ssn,
        patient_email: req.body.patient_email,
        parent_email: req.body.parent_email,
        emergency_name: req.body.emergency_name,
        emergency_phone: req.body.emergency_phone,
        emergency_relation: req.body.emergency_relation,
        primary_care_provider_name: req.body.primary_care_provider_name,
        primary_care_provider_phone: req.body.primary_care_provider_phone,
        pharmacy_name: req.body.pharmacy_name,
        pharmacy_address: req.body.pharmacy_address,
        dentist_name: req.body.dentist_name,
        sex: req.body.sex,
        gender: req.body.gender,
        allergies: req.body.allergies
    });

    // Save the data to the database
    data.save()
        .then(() => res.send('Data saved successfully'))
        .catch(err => res.status(400).send(err));
});
