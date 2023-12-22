import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import config from '../config/config.js';

async function register(req, res) {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 86400 }); // 24 hours

    res.status(200).send({ auth: true, token: token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user.');
  }
}

// import User from '../models/user.js';  // Adjust the path based on your project structure

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).send('Invalid username or password.');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send('Invalid username or password.');
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 86400 }); // 24 hours

    res.status(200).send({ auth: true, token: token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal server error');
  }
}

export { register, login };
