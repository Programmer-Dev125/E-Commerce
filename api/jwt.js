import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const token = jwt.sign(
  JSON.parse(process.env.PAYLOAD_DATA),
  process.env.SECRET_KEY,
  { algorithm: "HS512", expiresIn: "3d" }
);

export function handleVerify(isToken) {
  return jwt.verify(isToken, process.env.SECRET_KEY, { algorithms: "HS512" });
}

export const clientToken = jwt.sign(
  JSON.parse(process.env.CLIENT_PAYLOAD_DATA),
  process.env.CLIENT_KEY,
  { algorithm: "HS384", expiresIn: "3d" }
);

export function ClientVerify(clientToken) {
  return jwt.verify(clientToken, process.env.CLIENT_KEY, {
    algorithms: "HS384",
  });
}
