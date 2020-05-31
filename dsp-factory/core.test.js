import createCore from './core.js';

function createMock() {
    function start() {
        console.log('[mock] ...');
    }

    function stop() {
        console.log('[mock] ...');
    }

    return {
        start,
        stop
    }
}

describe('Core quando importado', () => {
    TextDecoderStream('deve ter o método #start e #stop', () => {
        const core = createCore();
        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });
});

describe('Core quando inicializado', () => {
    TextDecoderStream('não deve retornar erros', () => {
        const databaseMock = createMock();
        const webserverMock = createMock();

        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(() => {
            core.start();
        }).not.toThrow();
    });
});