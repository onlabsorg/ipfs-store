
const IPFSStore = exports.IPFSStore = require("./lib/store");
const IPFSNode = exports.IPFSNode = require("./lib/ipfs-node");

exports.stilo = {
    
    async __init__ (store) {
        
        const ipfs = IPFSNode([
            'http://localhost:5001',
            'http://ipfs.io'
        ]);
        
        store.mount('/ipfs', new IPFSStore(ipfs));
    }
}
