DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
  id INTEGER PRIMARY KEY,
  sold_count INTEGER NOT NULL
);

INSERT INTO inventory (id, sold_count) VALUES (1, 8347);