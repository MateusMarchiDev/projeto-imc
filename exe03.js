let btCalc = document.getElementById('btCalc')
let resultado = document.getElementById('resultado')
btCalc.addEventListener('click',calcular)

function calcular(){//SEMPRE BOTAR AS VARIÁVEIS QUE RECEBEM ELEMENTO HTML DENTRO DO ESCOPO DA FUNÇÃO!!!!
    let btPeso = document.getElementById('peso')
    let btAltura = document.getElementById('altura')

    if(btPeso.value =='' || btAltura.value ==''){
        resultado.style.color='red'
        resultado.style.fontWeight='bold'
        resultado.innerHTML='Dados Inválidos! Por Favor, digite os dados nos campos acima'
    } else{
    let peso = parseFloat(btPeso.value)
    let altura = parseFloat(btAltura.value)
    resultado.style.color='black'
    resultado.style.fontWeight='normal'
    let imc = peso/(altura**2)
    if (imc < 18.5){
     resultado.innerHTML += 'Você está muito magro! ' + imc.toFixed(2)
        }   else if(imc >=18.5 && imc <=24.9){
            resultado.innerHTML='Peso Normal ' + imc.toFixed(2)
        }   else if (imc >24.9 && imc <=29.9){
            resultado.innerHTML = 'Você está com sobrepeso! ' + imc.toFixed(2)
        }   else if(imc >29.9 && imc <= 39.9){
            resultado.innerHTML='Você está obeso! ' + imc.toFixed(2)
        } else {
            resultado.innerHTML = 'Você está MUITO obeso! ' + imc.toFixed(2)
        }
    }
}
/*peso/altura²
MENOR QUE 18.5 = MAGREZA
ENTRE 18.5 E 24.9 = NORMAL
ENTRE 25 E 29.9 = SOBREPESO
ENTRE 30 E 39,9 = OBESIDADE
MAIOR QUE 40 = OBESIDADE GRAVE */