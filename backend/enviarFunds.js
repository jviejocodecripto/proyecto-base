const Web3 = require("web3")
const web3 = new Web3("http://localhost:9586")
async function txs() {
    const r = await web3.eth.sendTransaction({
        from: '0x5dae9e5f5c5ca9cef5ad8b989eb736824feedd3f',
        to: '0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4',
        value: '1000000000000000'
    }) 
    console.log(r.blockHash)
    return r;
}

(async () => {
    
    for (let index = 0; index < 10; index++) {
        const r = await txs()
        
    }
    
    
})()