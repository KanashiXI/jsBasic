var text = ['hello', 'world', 'i am', 'zebra']
var vowel = ['a', 'e', 'i', 'o', 'u']

// console.log(text)

for (let i=0; i<text.length; i++){
    for (let j=0; j<vowel.length; j++){
        console.log(vowel[j])
        if (text[i].search(vowel[j]) > -1){
            // console.log(vowel[j])
            text[i] = text[i].replace(/vowel[j]/g,"")
        }
    }
    // console.log(text)
}

// for (let i=0; i < text.length; i++){
//     // console.log(text[i])
//     if (text[i].search("a") > -1){
//         text[i] = text[i].replace(/a/g,"")
//     }
//     if (text[i].search("e") > -1) {
//         text[i] = text[i].replace(/e/g,"")
//     }
//     if (text[i].search("i") > -1) {
//         text[i] = text[i].replace(/i/g,"")
//     }
//     if (text[i].search("o") > -1) {
//         text[i] = text[i].replace(/o/g,"")
//     }
//     if (text[i].search("u") > -1) {
//         text[i] = text[i].replace(/u/g,"")
//     }
// }
// console.log(text)