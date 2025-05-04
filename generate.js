import jwt from 'jsonwebtoken';

const secret = 'a218a6424a81ae765880f8bb0c82fbce354e3a8f494d14ce435a08769529df63227e2e2779d119d9a045c72595f02501b0ef8d1616116de0725fe98f807fc1cf';

const token = jwt.sign(
  { user: 'demoUser' },
  secret,
  { expiresIn: '10y' }
);

console.log('✅ JWT Token:', token);