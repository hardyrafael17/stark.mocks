const path = require('path')
const fs = require('fs')

var getJson = function (req, res) {
  const pathMock = path.join(__dirname, "valuesSituations", `${req.body.codigoElementoCobertura}.json`);
  if (fs.existsSync(pathMock)) {
    res.sendFile(pathMock);
  } else {
    const pathMock = path.join(__dirname, "valuesSituations", "default.json");
    res.sendFile(pathMock);
  }
}
module.exports = { getJson };