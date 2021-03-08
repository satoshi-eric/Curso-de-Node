SHOW DATABASES;
CREATE DATABASE sistemaDeCadastro;
USE sistemaDeCadastro;
CREATE TABLE usuarios (
	nome CHAR(50),
	email CHAR(100),
	idade INT
);
INSERT INTO usuarios(nome, email, idade) VALUES ("Eric Satoshi", "eric@gmail.com", 20);
SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE idade = 20;
DELETE FROM usuarios;
DELETE FROM usuarios WHERE nome = "Ariel";
UPDATE usuarios SET nome = "Nome de teste";
UPDATE usuarios SET nome = "Nome de teste" WHERE nome = "Guilherme";