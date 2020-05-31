function createDatabaseConnection() {
    function start() {
        console.log('> [database] Starting');
        console.log('> [database] Connecting to Postgres...');
        console.log('> [database] Running migrations...');
        console.log('> [database] Starting done!');

        // Erro proposital de teste de conexão
        //throw new Error('Connection failed.');
    }

    function stop() {
        console.log('> [database] Stopping...');
        console.log('> [database] Closing Postgress connection...');
        console.log('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection;