import bcrypt from "bcrypt";

// it is not safe to save password directly this will make user data vulnerable
// using bcrypt we can hash password which takes secret key available in the environment
export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // 12 denotes strength of encrption
    bcrypt.genSalt(12, (error, salt) => {
      if (error) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hashPassword) => {
        if (error) {
          reject(err);
        }
        resolve(hashPassword);
      });
    });
  });
};

// to check hashed password and login password
export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
