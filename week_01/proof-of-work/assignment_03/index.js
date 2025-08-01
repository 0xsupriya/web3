// Give me an input string starting with (supriya => arijit | rs 100) that outputs a SHA-256 hash that starts with '00000'

const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 784866;
    while(true){
        let inputStr = "supriya => arijit | rs 100 " + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}
const result = findHashWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

