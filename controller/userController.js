const User = require('../model/usersModel');
const Teacher = require('../model/teacherModel');
const Admin = require('../model/adminModel');
const Student = require('../model/studentModel');

//gpt
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const mongoose = require("mongoose");

// Create fnction for storing user
const createUser = async (req, res) => {
  try {
    // Create a new User document
    const user = new User({
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
      registerAs: req.body.registerAs,
      gender: req.body.gender,
      profile_picture: req.body.profile_picture,

      theme: {
        color: req.body.theme?.color || "white",
        name: req.body.theme?.name || "light",
     
      }
    });

    // Save the User document
    const savedUser = await user.save();

    // Based on the user's role, create the corresponding child document
    if (req.body.registerAs === 'teacher') {
      console.log("teacher");
      const teacher = new Teacher({
        userId: savedUser._id,
        designation: req.body.designation,
        fypStatus: req.body.fypStatus

      });
      await teacher.save();

    } else if (req.body.registerAs === 'admin') {
      const admin = new Admin({
        userId: savedUser._id,
        adminRole: req.body.adminRole
      });
      await admin.save();
    } else if (req.body.registerAs === 'student') {
      const student = new Student({
        userId: savedUser._id,
        teamlead: req.body.teamlead
      });
      await student.save();
    }

    res.status(200).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error storing user data' });
  }
};


// Create function for getting all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create function for getting a single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create function for deleting a single user
const deleteUser = async (req, res) => {
  try {

    console.log(req.body.userId);
    const user = await User.deleteOne({ userId: req.body.userId });//User.findByIdAndDelete(req.body.userId);
    console.log(user);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Create function for changing password
const changePassword = async (req, res) => {
  try {
    console.log(req.body.userId);
    console.log(req.body.password);
    const u = req.body.userId;
    console.log(u);
    const user = await User.findOne({ userId: u });
    console.log(user);
    user.password = req.body.password;
    await user.save();
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create function for changing email
const changeEmail = async (req, res) => {
  try {
    console.log(req.body.userId);
    console.log(req.body.email);
    const u = req.body.userId;
    console.log(u);
    const user = await User.findOne({ userId: u });
    console.log(user);
    user.email = req.body.email;
    await user.save();
    res.status(200).json({ message: 'Email changed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Create function for signin
// const signin = async (req, res) => {

//     try {
//             const u= req.body.userId;
//             const p= req.body.password;
//             console.log(u);
//             console.log(p);
//         const user= await User.findOne({userId: u});
//         console.log(user)
//         if(user.password===p){
//             //jwt 
//             const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
//             res.status(200).json({ user: user, message: 'User logged in successfully' });
//         }
//         else{
//             res.status(500).json({ message: 'logging unsuccessful' });

//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }

// };

//jwt signin
const signIn = async (request, response) => {
  const { userId, password } = request.body

  const user = await User.findOne({ userId: u })

  let passCorrect = false;

  if (password === user.password) {
    passCorrect = true
  }

  if (!(user && passCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
}











// const user= await User.findOne({password: p});





module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  changePassword,
  changeEmail,
  signIn,

}
