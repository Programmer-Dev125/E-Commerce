import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const clientToken = jwt.sign(
  JSON.parse(process.env.CLIENT_PAYLOAD),
  process.env.CLIENT_KEY,
  { algorithm: "HS384", expiresIn: "3d" }
);

export function ClientVerify(clientToken) {
  return jwt.verify(clientToken, process.env.CLIENT_KEY, {
    algorithms: "HS384",
  });
}
