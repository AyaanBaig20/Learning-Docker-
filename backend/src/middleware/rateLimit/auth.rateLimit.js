import { rateLimit } from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  ipv6Subnet: 56,
  message: {
    success: false,
    message: "Too many requests. Please try again after 5 minutes.",
  },
});

export default { authLimiter };
