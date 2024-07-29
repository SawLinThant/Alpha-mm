// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./auth');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());  // Enable CORS for all routes

// // Routes
// app.use('/auth', authRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to the Auth Server');
//   });

// // Start the server
// app.listen(port, () => {
//   console.log(`Auth server running on port ${port}.`);
// });
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const HASURA_ENDPOINT = "https://assured-gar-44.hasura.app/v1/graphql";
const HASURA_ADMIN_SECRET ="ufBB46MNkGJIJDAenfM0WCCkhfOwGJJ2HpjFPMtZ7yd3MW3b14s7O5w5olc9165C";
const JWT_SECRET = "mySuperSecretKeyThatIsLongAndRandom12345";

// Helper function to generate JWT token
const generateJWT = (userId) => {
  const payload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': userId.toString(),
    },
  };
  return jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
};

// Login route
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = {
      query: `
        query getUserByEmail($email: String!) {
          User(where: { email: { _eq: $email } }) {
            id
            username
            password
          }
        }
      `,
      variables: { email },
    };

    const response = await axios.post("https://assured-gar-44.hasura.app/v1/graphql", query, {
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': "ufBB46MNkGJIJDAenfM0WCCkhfOwGJJ2HpjFPMtZ7yd3MW3b14s7O5w5olc9165C",
      },
    });

    let user = response.data.data.user[0];

    if (!user) {
      res.sendStatus(401); // User not found
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateJWT(user.id);
      res.json({ token });
    } else {
      res.sendStatus(401); // Invalid password
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal server');
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Auth Server');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}.`);
});
