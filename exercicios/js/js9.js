let amigo = {nome:'Talles', 
sexo:'Masculino', 
idade: 18,
peso: 85.5,
engordar(p){
    console.log('Engordou!')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.idade} e pesa ${amigo.peso}Kg!`)