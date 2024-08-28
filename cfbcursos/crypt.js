let texto = 'ABCDE'
let textoCript = ''
let i = 0

texto.replace('A', 'G')
while (i < texto.length){
    textoCript += texto[i]
    i++
}
textoCript = textoCript.replace('A', 'B')
textoCript.replace('B', 'C')
textoCript.replace('C', 'D')
textoCript.replace('D', 'E')
textoCript.replace('E', 'F')

console.log(textoCript)