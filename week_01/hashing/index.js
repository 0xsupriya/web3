const crypto = require('crypto');

const input = "0xsupriya";

const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);
