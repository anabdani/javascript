var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0 :
       console.log('Domindo')
       break 
     case 1 :
        console.log('segunda')
        break
      case 2 :
            console.log('Terça')
            break
     case 3 :
             console.log('Quarta')
             break
     case 4 :
             console.log('Quinta')
             break
     case 5 :
             console.log('Sexta')
             break
     case 6:
          console.log('Sábado')
          break 
          
          default:
            console.log('[ERRO] dia inválido')
            break

}