const faker = require('faker');

var getJson = function (req, res) {
    return res.send({
        cuentaGPP: "1605",
        nombrePropio: "CASA SANTIVERI SL",
        enlaceHerramientaPrecio: "https://gpp-app.zurich.com/pc/Job.do?JobNumber=1605",
        nombreIntermediario: 'intermediaro',
        nombreSuscriptor: 'suscriptor',
        versiones: Array.from({ length: 10 }, (_, i) => {
            return {
                "indicadorPrincipal": false,
                "descripcionVersion": faker.name.title(),
                "cuentaGPP": faker.random.number().toString(),
                "versionGPP": 0,
                "codigoPoliza": Math.random() > 0.5
                    ? faker.random.number().toString()
                    : undefined,
                "versionPoliza": 0,
                "fechaRecepcion": "2021-03-11",
                "importeLimiteGeneral": faker.random.number(),
                "importeFranquicia": faker.random.number(),
                "primaTotal": faker.random.number(),
                "primaQuoted": faker.random.number()
            }
        })
    });
    //return res.send({"errors":[{"code":"ARC00031","severity":8,"message":"Algo ha ido mal, por favor revisa tu petición"}]});
}

module.exports = { getJson };