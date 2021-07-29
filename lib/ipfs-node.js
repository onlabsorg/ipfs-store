const {create} = require('ipfs-http-client');
const DEFAULT_GATEWAY = 'http://ipfs.io';


async function getNode () {
    const ipfs = create();
    try {
        await ipfs.add("Hello World!");
        return ipfs;
    } catch (e) {
        return create(DEFAULT_GATEWAY);
    }
}

module.exports = getNode();
