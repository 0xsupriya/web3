function asciiToBytes(string){
    const byteArray = [];
    for(let i = 0; i<=string.length; i++){
        byteArray.push(string.charCodeAt(i));
    }
    return byteArray;
}
const asciiString = "Supriya";
const result = asciiToBytes(asciiString);
console.log(result);
