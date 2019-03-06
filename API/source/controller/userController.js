import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models/index';

const UserController = {
  signupAUser(req, res) {
    const {
      username,
      email,
      password
    } = req.body;

    const isAdmin = false;

    return models.User.create({
        username,
        email,
        password,
        isAdmin
      })
      .then(users => {
        res.status(201).json({
          status: 201,
          message: 'New User has been created',
          data: users
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          status: 500,
          message: 'something went wrong while trying to create a user'
        });
      });
  },

  fetchAllUsers(req, res) {
    return models.User.findAll()
      .then(users => {
        res.status(200).json({
          status: 200,
          data: users
        });
      })
      .catch(() => {
        res.status(404).json({
          status: 404,
          message: 'Cannot fetch all Users'
        });
      });
  },

  getAUser(req, res) {
    const id = parseInt(req.params.id, 10);

    return models.User.findById(id)
      .then(users => {
        res.status(200).json({
          status: 200,
          message: 'User details has been retrieved successfully',
          data: users
        });
      })
      .catch(() => {
        res.status(404).json({
          status: 404,
          message: 'User record does not exist'
        });
      });
  },

  // registerUsers(req, res) {
  //     return models.User
  //         .findOne({
  //             where: {
  //                 id: 5,
  //                 email: req.body.email,
  //             },

  //         })
  //         .then(users => {
  //             if (users) {
  //                 return res.status(400)
  //                     .json({
  //                         email: 'Email already exist'
  //                     });
  //             } else {

  //             }
  //         })
  // }

  loginUsers(req, res) {
    // Dummy user
    const user = {
      id: 1,
      username: 'okiki',
      email: 'okikiola,apelehin@gmail.com',
      isAdmin: true
    };

    jwt.sign({
        user
      },
      'secretkey',
      (err, token) => {
        res.json({
          token
        });
      }
    );
  },

  verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization;

    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        console.log('could not get here');
        res.sendStatus(403);
      } else {
        jwt.verify(req.headers.authorization);
        next();

        // res.json({
        //   message: 'Get all meals',
        //   authData
        // });
      }
    });
    // // check if bearer is undefined
    // if (typeof bearerHeader !== 'undefined') {
    //   // Split at the space
    //   const bearer = bearerHeader.split(' ');
    //   // Get token from array
    //   const bearerToken = bearer[1];
    //   // Set the token
    //   req.token = bearerToken;
    // Next middleware
    // next();
    // //} else {
    // // Forbidden
    // res.sendStatus(403);
    // }
  }
};

export default UserController;