const Admin = require('../Models/Admin'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login admin
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token, admin: { id: admin._id, username: admin.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
