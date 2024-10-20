CREATE TABLE problems (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(256) NOT NULL,
    insight TEXT,
    description TEXT,
    difficulty ENUM('easy', 'medium', 'hard') NOT NULL
);