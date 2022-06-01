const path = require('path')
const fs = require('fs')

var getJson = function (req, res) {
  const pathMock = path.join(__dirname, `getCoverageLimits.json`);
  const pathMockRC = path.join(__dirname, `getCoverageLimits-RC.json`);
   const flowHeader = req.headers['ea-timetraces-operation'];
   
   if (flowHeader.includes('NewBusinessLiabilityFlow')){
    console.log('use json RC -> ', pathMockRC);
    res.sendFile(pathMockRC);
   }else{
    console.log('use json Daños -> ', pathMock);
    res.sendFile(pathMock);
   }
}
module.exports = { getJson };