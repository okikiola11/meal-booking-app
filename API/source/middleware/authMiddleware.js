import jwt from 'jsonwebtoken';

// FORMAT OF TOKEN
// Authorization: <access_token>

const authMiddleware = {
  verifyToken(req, res, next) {
    // Get auth Header value

    const bearerHeader = req.headers.authorization;
    jwt.verify(bearerHeader, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { id, isAdmin } = authData;
        req.user = {
          isAdmin,
          id,
        };
        next();
      }
    });
  },
};

export default authMiddleware;
