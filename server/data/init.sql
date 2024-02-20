CREATE TABLE newsMedia (
  id TEXT NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE news (
  id TEXT NOT NULL PRIMARY KEY,
  title TEXT NOT NULL,
  newsMediaId TEXT NOT NULL REFERENCES newsMedia (id),
  description TEXT
);

CREATE TABLE reporters (
  id TEXT NOT NULL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  newsMediaId TEXT NOT NULL REFERENCES newsMedia (id)
);

INSERT INTO newsMedia (id, name, description) VALUES
  ('pVbRRBQtMVw6lUAkj1k43', 'Test Company 1', 'We are a startup on a mission to disrupt social search engines. '),
  ('wvdB54Gqbdp_NZTXK9Tue', 'Test Company 2', 'We are a startup on a mission to disrupt search social media.');

INSERT INTO news (id, title, newsMediaId, description) VALUES
  ('soP9m8MdKeQX_ZXZOCSaL', 'Frontend Developer', 'pVbRRBQtMVw6lUAkj1k43', 'We are looking for a Frontend Developer familiar with React.'),
  ('yX71WsWqBRAFuMAIDj4W0', 'Full-Stack Developer', 'wvdB54Gqbdp_NZTXK9Tue', 'We are looking for a Full-Stack Developer familiar with Node.js, Express, and React.'),
  ('ujXXXjSBmd0o9NJXMZDdT', 'Senior DevOps Engineer', 'pVbRRBQtMVw6lUAkj1k43', 'We need somebody to restart the servers when they fall over.'),
  ('4diUGe8AmGDijRhHhaiNm', 'QA Tester', 'wvdB54Gqbdp_NZTXK9Tue', 'You must be good at finding bugs.'),
  ('Tmo63zELubKbjxWZ9wD2T', 'Product Owner', 'wvdB54Gqbdp_NZTXK9Tue', 'You need to give the developers something to do otherwise they get bored.');

INSERT INTO reporters (id, email, password, newsMediaId) VALUES
  ('uogQAZnLcAlT6lMuNbpQg', 'alice@demo.io', 'alice123', 'pVbRRBQtMVw6lUAkj1k43'),
  ('i0Nn6qvicHP5DTuKTyaq0', 'bob@demo.io', 'bob123', 'wvdB54Gqbdp_NZTXK9Tue');