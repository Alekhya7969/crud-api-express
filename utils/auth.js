import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function verifyToken(headers) {
  const authHeader = headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('❌ No Bearer token provided in Authorization header.');
    throw new Error('Unauthorized: No Bearer token provided');
  }

  const token = authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error('❌ JWT_SECRET is undefined. Check your .env file.');
    throw new Error('Server Error: Missing JWT secret');
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log('✅ JWT verified successfully. Payload:', decoded);
    return true;
  } catch (err) {
    console.error('❌ Invalid JWT token:', err.message);
    throw new Error('Unauthorized: Invalid JWT token');
  }
}