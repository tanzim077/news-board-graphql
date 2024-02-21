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
  ('pVbRRBQtMVw6lUAkj1k43', 'NovaPulse News', 'Bringing you the latest breaking stories with a fresh perspective, NovaPulse News delivers timely updates and in-depth analysis on global events.'),
  ('wvdB54Gqbdp_NZTXK9Tue', 'InsightInk Chronicle', 'Your trusted source for insightful journalism, InsightInk Chronicle explores the stories behind the headlines, providing readers with comprehensive coverage and thought-provoking commentary.');

INSERT INTO news (id, title, newsMediaId, description) VALUES
  ('soP9m8MdKeQX_ZXZOCSaL', 'Breaking: Cyberattack Hits Global Financial Institutions, Threatening Data Security', 'pVbRRBQtMVw6lUAkj1k43', 'A massive cyberattack targets major financial institutions worldwide, jeopardizing data security. Experts warn of potential financial fallout and urge enhanced cybersecurity measures to prevent further breaches.'),
  ('yX71WsWqBRAFuMAIDj4W0', 'Political Turmoil in Eastern Europe: Protests Erupt Following Controversial Election Results Developer', 'wvdB54Gqbdp_NZTXK9Tue', 'Eastern European nations witness widespread protests amid allegations of electoral fraud and government corruption. Tensions escalate as demonstrators demand accountability and electoral transparency.'),
  ('ujXXXjSBmd0o9NJXMZDdT', 'Amazon Rainforest Under Threat: Deforestation Rates Reach Alarming Levels Engineer', 'pVbRRBQtMVw6lUAkj1k43', 'Deforestation in the Amazon rainforest accelerates, reaching alarming levels despite international conservation efforts. Environmentalists raise concerns over biodiversity loss and climate impact, calling for urgent action to protect the world's largest tropical rainforest.'),
  ('4diUGe8AmGDijRhHhaiNm', 'Tech Giants Face Antitrust Scrutiny: Regulatory Crackdown Looms Over Market Dominance', 'wvdB54Gqbdp_NZTXK9Tue', 'Tech giants like Facebook, Google, and Amazon face increasing antitrust scrutiny as regulators investigate their market dominance and alleged anti-competitive practices. Legal battles loom as authorities seek to rein in Big Tech's influence.'),
  ('Tmo63zELubKbjxWZ9wD2T', 'Humanitarian Crisis Unfolds: Refugee Camps Overwhelmed Amidst Conflict and Famine', 'wvdB54Gqbdp_NZTXK9Tue', 'Refugee camps worldwide are overwhelmed as conflict, famine, and displacement escalate in various regions. Humanitarian organizations struggle to meet the growing demand for aid, highlighting the urgent need for international support and intervention.');

INSERT INTO reporters (id, email, password, newsMediaId) VALUES
  ('uogQAZnLcAlT6lMuNbpQg', 'alice@demo.io', 'alice123', 'pVbRRBQtMVw6lUAkj1k43'),
  ('i0Nn6qvicHP5DTuKTyaq0', 'bob@demo.io', 'bob123', 'wvdB54Gqbdp_NZTXK9Tue');