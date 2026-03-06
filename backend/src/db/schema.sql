CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT,
  name TEXT,
  verified INTEGER DEFAULT 0
);

CREATE TABLE otp_codes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  code TEXT,
  expire_at DATETIME
);

CREATE TABLE boards (
  id TEXT PRIMARY KEY,
  name TEXT,
  user_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);