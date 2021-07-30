const {create} = require('ipfs-http-client');


const defineAsyncMethod = (clients, name) => async (...args) => {
    let lastError = new Error('No clients defined');
    for (let client of clients) {
        try {
            return await client[name](...args);
        } catch (e) {
            lastError = e;
        }
    }
    throw lastError;
}

const defineAsyncGeneratorMethod = (clients, name) => async function* (...args) {
    let lastError = new Error('No clients defined');
    for (let client of clients) {
        try {
            for await (let promise of client[name](...args)) yield promise;
            return;
        } catch (e) {
            lastError = e;
        }
    }
    throw lastError;
}


const IPFSNode = urls => {
    const clients = urls.map(create);
    const ipfs = {};
    for (let method of ['add']) {
        ipfs[method] = defineAsyncMethod(clients, method);
    }
    for (let method of ['addAll', 'cat', 'get', 'ls']) {
        ipfs[method] = defineAsyncGeneratorMethod(clients, method);
    }
    return ipfs;
}

module.exports = IPFSNode;