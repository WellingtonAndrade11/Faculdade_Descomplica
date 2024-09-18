function somarArray(array){
    return new Promise((resolve,reject) =>{
        if(!Array.isArray(array)){
            reject("O argumento passado não é uma array")
            
        }
        const soma = array.reduce((total,num) => total + num,0);
        resolve(soma)
    })
}

const myArray = "sdfsd"
somarArray(myArray)
.then((resultado)=>{
    console.log("a soma dos elemtentos é : ", resultado);
})
.catch((erro) => {
    console.log("Ocorreu um erro: ", erro);
})