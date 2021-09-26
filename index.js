
const IPFSStore = exports.IPFSStore = require("./lib/store");

const IPFSNode = require('./lib/ipfs-node');

exports.stilo = {
        
    routes: {
        
        "/ipfs": new IPFSStore( IPFSNode([
            'http://localhost:5001',
            'http://ipfs.io'
        ]) )
    }
}
