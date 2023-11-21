const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Habilita CORS para todas las rutas

app.get('/config', (req, res) => {
    // Obtén el valor del header Client-Domain
    const clientDomain = req.get('Client-Domain') || 'no se obtiene datos';
    console.log('clientDomain', clientDomain);

    const config = {
        title: 'Macenas',
        favIcon: 'https://nbxdigital.com/wp-content/uploads/2023/09/NBX_LOGO_FONDO-BLANCO.svg',
        ld: {
            address: clientDomain,
        },
    };

    res.json(config);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
