var getJson = function (req, res) {
  
  return res.send({
    "documentos": [
      {
        "codigoDocumento": req.body.codigoPoliza,
        "nombreDocumento": "2021-07-08_QA-Vuelta_Oficina",
        "tipoMimeArchivo": "application/pdf",
        "nombreExtensionArchivo": ".pdf"
      }
    ],
    "errors": []
  }

  );
}
module.exports = { getJson };