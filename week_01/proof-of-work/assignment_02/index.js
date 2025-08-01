// Give me an input string starting with 100xdevs that outputs a SHA-256 hash that starts with '00000'

const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 2274855;
    while(true){
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash}
        }
            input++;
    }
}
const result = findHashWithPrefix('00000')
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

