const faker = require('faker');

var getJson = function (req, res) {
    return res.send({

        "listaClientes": [
            {
                "codigoFiliacion": faker.random.word(),
                "tipoPersona": "",
                "tipoDocumento": "C",
                "nombrePropio": "",
                "primerApellido": "asd",
                "segundoApellido": "",
                "nombreComercial": faker.random.word(),
                "nombreDomicilioCompactado": faker.lorem.words(),
                "codigoIdentificacionFiscal": faker.random.word()
            }
        ]

    });
}

module.exports = { getJson };

