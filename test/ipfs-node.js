const expect = require("chai").expect;
const IPFSNode = require('../lib/ipfs-node');
const hwCID = "Qmf1rtki74jvYmGeqaaV51hzeiaa6DyWc98fzDiuPatzyy"; // "Hello World!"



async function read (ipfs, cid) {
    var content = "";
    for await (const chunk of ipfs.cat(cid)) {
        content += new TextDecoder().decode(chunk);
    }
    return content;
}


describe('IPFSStore', () => {
    
    it("should resolve a valid ipfs node", async () => {
        const ipfs = IPFSNode([
            'http://localhost:5001',
            'http://ipfs.io'
        ]);
        const content = await read(ipfs, hwCID);
        expect(content).to.equal("Hello World!")
    });
});
