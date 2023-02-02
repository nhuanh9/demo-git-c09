function revStr(str) {
    if (str.length < 2) {
        return str;
    }
    return revStr(str.substring(1)) + str[0];

}
let str = "ABCD"
console.log(revStr(str))
