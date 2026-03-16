const user = require('../../models/userModel')
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "Name, email and password are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "Email already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role
  });
  await user.save();
  res.json({ message: "User registered successfully", user });
};

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: "Invalid password" });
  }
  res.json({ message: "Login successful", user });
};

exports.logoutUser = async (req, res) => {
  res.json({ message: "User logged out successfully" });
};