var config = {
            username: 'ashraf@cedrus.digital',
    password: 'C3drus20!6',
        serverPort: process.env.PORT || 2002,
    swaggerRouterOptions: {
        swaggerUi: __dirname + '/../' + '/swagger.json',
        controllers: __dirname + '/../' + './controllers/v1',
        useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    }
    };
module.exports = config;