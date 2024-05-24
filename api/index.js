const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const QRCode = require('qrcode');
const User = require('./models/User');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:123@cluster0.hvvcy25.mongodb.net/?retryWrites=true&w=majority&appName=Qrcode', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.post('/generate-qrcode', async (req, res) => {
  try {
    // Generate QR Code
    const websiteUrl = 'https://scanhubgenweb.vercel.app/';
    const uniqueIdentifier = req.body.uniqueIdentifier;
    const qrCodeData = await QRCode.toDataURL(websiteUrl + uniqueIdentifier);

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    // Save User and QR Code to Database
    const newUser = new User({
      uniqueIdentifier: req.body.uniqueIdentifier,
      userDetails: req.body.userDetails,
      qrCodeData: qrCodeData,
      expirationDate: expirationDate,
    });
    await newUser.save();

    res.status(200).json({ qrCodeData: qrCodeData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating QR Code' });
  }
}); 


app.post('/scan-qrcode', async (req, res) => {
  try {
    const { qrCodeData } = req.body;
    
    // Find user by QR code data
    const user = await User.findOne({ qrCodeData });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error scanning QR Code' });
  }
});


app.get('/user-details/:uniqueNumber', async (req, res) => {
  try {
    const { uniqueNumber } = req.params;

    let user = await User.findOne({ uniqueIdentifier: uniqueNumber });

    if (!user) {
      return res.status(200).json({ message: 'User information not found', promptForInfo: true });
    }

    // If user found, send their details
    res.status(200).json({ user, promptForInfo: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});

app.post('/update-details', async (req, res) => {
  try {

    console.log(req)
    // Extract data from request body
    const { uniqueIdentifier, userDetails } = req.body;

    // Validate data
    if (!uniqueIdentifier || !userDetails) {
      console.log('Missing required fields in request body');
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Update user details in the database
    const updatedUser = await User.findOneAndUpdate(
      { uniqueIdentifier: uniqueIdentifier },
      { userDetails: userDetails },
      { new: true }
    );

    if (!updatedUser) {
      console.log('User not found with unique identifier:', uniqueIdentifier);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User details updated successfully:', updatedUser);
    res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ message: 'Error updating user details' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});


app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    console.log(id)

    const upd = await User.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log(upd);

    if (!upd) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully', upd });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));