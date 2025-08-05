function bytesToAscii(byteArray) {
  const chars = byteArray.map(byte => String.fromCharCode(byte));
  return chars.join('');
}

const bytes = [72, 101, 108, 108, 111];
const result = bytesToAscii(bytes);
console.log(result);

