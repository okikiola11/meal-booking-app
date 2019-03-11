import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../model/index';

const UserController = {
  signupAUser(req, res) {
    const {
      username,
      email,
    } = req.body;

    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
    const isAdmin = false;

    return models.User.create({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    })
      .then((user) => {
        const token = jwt.sign({
          id: user.id,
        },
        'secretkey', {
          expiresIn: 86400, // expires cmdin 24hours
        },);
        return res.status(201).json({
          status: 201,
          message: 'New User has been created',
          data: [{
            auth: 'true',
            token,
          }],
        });
      })
      .catch(() => res.status(500).json({
        status: 500,
        message: 'something went wrong while trying to create a user',
      }));
  },

  // loginUsers(req, res) {
  //   // Dummy user
  //   const user = {
  //     id: 1,
  //     username: 'okiki',
  //     email: 'okikiola,apelehin@gmail.com',
  //     isAdmin: true
  //   };

  //   jwt.sign({
  //       user
  //     },
  //     'secretkey',
  //     (err, token) => {
  //       res.json({
  //         token
  //       });
  //     }
  //   );
  // },

  loginUsers(req, res) {
    const {
      email,
    } = req.body;

    models.User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) return res.status(404).send('No user found.');
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          return res.status(401).json({
            auth: 'false',
            message: 'Incorrect Password',
          });
        }
        const token = jwt.sign({
          id: user.id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        'secretkey', {
          expiresIn: 86400, // expires in 24hours
        },);
        return res.status(200).json({
          status: 200,
          message: `Welcome ${user.email}, you have successfully logged in`,
          data: [{
            auth: 'true',
            token,
            user,
          }],
        });
      })
      .catch(() => {
        res.status(404).json({
          status: 404,
          message: 'User record does not exist',
        });
      });
  },
};

export default UserController;
