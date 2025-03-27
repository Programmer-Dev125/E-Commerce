import jwt from "jsonwebtoken";

export const token = jwt.sign(
  JSON.parse(process.env.ADMIN_PAYLOAD),
  process.env.ADMIN_KEY,
  { algorithm: "HS512", expiresIn: "3d" }
);

export function handleVerify(isToken) {
  return jwt.verify(isToken, process.env.ADMIN_KEY, { algorithms: "HS512" });
}

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
