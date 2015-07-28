CREATE DATABASE memetube;

\c memetube

CREATE TABLE videos (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  description TEXT,
  url VARCHAR(200),
  genre VARCHAR(20)
);

INSERT INTO videos (title, description, url, genre)
VALUES ('Suicide Squad Trailer', 'First look at Suicide Squad, to be released in 2016', 'https://www.youtube.com/watch?v=PLLQK9la6Go', 'trailer');

INSERT INTO videos (title, description, url, genre)
VALUES ('We Are Your Friends Trailer', 'Movie starring Zac Efron', 'https://www.youtube.com/watch?v=gZzAeYWXFpk', 'trailer');

INSERT INTO videos (title, description, url, genre)
VALUES ('The Interns', 'Movie starring Anne Hathaway and Robert De Niro', 'https://www.youtube.com/watch?v=ZU3Xban0Y6A', 'trailer');
