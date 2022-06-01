const faker = require('faker');

var getJson = function (req, res) {
    return res.send({
        "graficas": [2021, 2020, 2019, 2018, 2017].map(year => {
            return {
                "anualContable": year,
                "porcentajePremiumMedio": faker.random.number(1000000),
                "porcentajeApMp": faker.random.float({
                    'min': 0,
                    'max': 1
                }),
                "porcentajeRatioSmall": faker.random.float({
                    'min': 0,
                    'max': 1
                }),
                "porcentajeTotalCargaTramo": faker.random.float({
                    'min': 0,
                    'max': 1
                }),
                "porcentajeHitRatio": faker.random.float({
                    'min': 0,
                    'max': 1
                }),
                "porcentajeQuoteRatio": faker.random.float({
                    'min': 0,
                    'max': 1
                }),
                "descripcionFiabilidadInformacion": "88"
            }
        }),
        "codigoApetitoRiesgo": faker.lorem.word(),
        "descripcionFiabilidadInformacion": "88",
        "codigoGuidelines": "",
        "codigoGrlgading": "37-98",
        "descripcionAgrupacion": "Services",
        "codigoProductoRiesgoCivil": "",
        "descripcionAclaracionActividad": faker.lorem.words(),
        "productos": Array.from({ length: 8 }, (_, i) => {
            return {
                codigoProductoRiesgoCivil: faker.lorem.slug(),
                descripcionProductoRiesgoCivil: faker.lorem.words()
            }
        })
    });
}

module.exports = { getJson };