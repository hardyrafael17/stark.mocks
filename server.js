const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const path = require('path')
const fs = require('fs')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/auth/realms/emp-inter/protocol/openid-connect/auth', (req, res) => {
  const url = req.query.redirect_uri;
  res.redirect(url);
})

server.get('/stark-api/session', (req, res) => {
  res.json({});
});
server.get('/stark-api/csrf/token', (req, res) => {
  res.json({
    csrfToken: 'qWQva73J-BmEbtdmVgaRqwvwvo-Sh4_Lg0J8',
  });
});

server.get('/downloadpdf', (req, res) => {
  const filePath = path.join(__dirname, 'assets/sample.pdf');
  res.download(filePath);
});


server.use(function (req, res, next) {
  if (req.url.includes('stark-api')){
    const pathMockJS = path.join(__dirname, req.url + ".js")
    const pathMock = path.join(__dirname, req.url + ".json")
    if (fs.existsSync(pathMockJS)){
      const loadJS = require(pathMockJS);
      loadJS.getJson(req, res);
    }
    else if (fs.existsSync(pathMock)){
      res.setTimeout(1000, () => res.sendFile(pathMock));
    }else{
      res.setTimeout(1000, () => res.send({}));
    }
  }else{
    next(); // MUST call this or the routes will not be hit
  }
  
});


// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router

server.listen(3000, () => {
  console.log('JSON Server is running')
})