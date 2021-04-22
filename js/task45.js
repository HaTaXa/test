// 45. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str = "aaa bbb ccc";
let chrStart = 0;
getChrs(str);

function getChrs (sString) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "b") {
            setNewString(i);
            break;
        }
    }
}

function setNewString(chr) {
    let sSubstr = str.substr(chr, (str.length - chr) - chr);
    let sString = str.substring(chr, str.length - chr);
    let sSlice = str.slice(chr, str.length - chr);
    console.log(`chrStart = ${chr}\n` + `chrEnd = ${str.length - chr}`);
    printNewString(sSubstr, sString, sSlice);
}

function printNewString (strSubstr, strString, strSlice) {
    alert(`Задача № 45.\n` + `Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).\n\n` +
            `substr = ${strSubstr}\n` + `substring = ${strString}\n` + `strslice = ${strSlice}`);
}
