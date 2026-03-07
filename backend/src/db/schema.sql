CREATE TABLE users (
 id TEXT PRIMARY KEY,
 name TEXT,
 email TEXT UNIQUE,
 password TEXT,
 verified INTEGER
);

CREATE TABLE otp_codes (
 email TEXT,
 code TEXT,
 expire_at TEXT
);

CREATE TABLE boards (
  id TEXT PRIMARY KEY,
  name TEXT,
  user_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);