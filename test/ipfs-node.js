const expect = require("chai").expect;
const IPFS = require('../lib/ipfs-node');
const hwCID = "Qmf1rtki74jvYmGeqaaV51hzeiaa6DyWc98fzDiuPatzyy"; // "Hello World!"



async function read (ipfs, cid) {
    var content = "";
    for await (const chunk of ipfs.cat(cid)) {
        content += new TextDecoder().decode(chunk);
    }
    return content;
}


describe('IPFSStore', () => {
    
    it("should return a promise", () => {
        expect(IPFS).to.be.instanceof(Promise);
    });
    
    it("should resolve a valid ipfs node", async () => {
        const ipfs = await IPFS;
        const content = await read(ipfs, hwCID);
        expect(content).to.equal("Hello World!")
    });
    
    it.skip("should return the local daemon if available", async () => {});
});
