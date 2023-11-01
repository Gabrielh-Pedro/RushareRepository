const http = require("http");
const sqlite3 = require("sqlite3");

// Cria uma conexão com o banco de dados
const db = new sqlite3.Database("rusharedb.db");

// Cria uma tabela
db.run("CREATE TABLE users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255))", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Tabela criada");

    // Insere um registro
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["John Doe", "johndoe@example.com"], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Registro inserido");
      }
    });
  }
});



// Cria um servidor HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Olá, mundo!");
});

// Inicia o servidor
server.listen(3000);
console.log("Servidor iniciado na porta 3000");
