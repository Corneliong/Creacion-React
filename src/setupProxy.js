const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
 //  app.use("/sai", createProxyMiddleware({target: "http://74.208.31.248:8080", changeOrigin: true}));
    // app.use("/SV", createProxyMiddleware({target: "http://172.25.4.169:8761", changeOrigin: true}));
     app.use("/users", createProxyMiddleware({target: "https://jsonplaceholder.typicode.com/users", changeOrigin: true}));
     //app.use("/api", createProxyMiddleware({target: "https://reqres.in", changeOrigin: true}));


  };
