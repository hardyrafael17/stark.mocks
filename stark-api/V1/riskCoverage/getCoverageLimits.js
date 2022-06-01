const path = require("path");
var getJson = function (req, res) {
  console.log("---------------------------");
  const pathMock = path.join(
    __dirname,
    "stark-api/V1/riskCoverage",
    "getCoverageLimits.json"
  );
  return res.sendFile(pathMock);
};

module.exports = { getJson };
