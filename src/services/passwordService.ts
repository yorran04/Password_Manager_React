export default function generatePass (){
    let password: string = ''
    let characters: string = 'Aa@#$&123456789fgiadroKWOEDT!'
    let passwordLength = 8


    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(
           Math.floor( Math.random() * characters.length)
        )
    }
    
    return password
}