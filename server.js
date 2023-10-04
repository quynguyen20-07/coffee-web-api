const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Cấu hình middleware cho JSON Server
server.use(middlewares);

// Cấu hình router cho JSON Server
server.use("/api", router);

// Triển khai JSON Server trên cổng 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
