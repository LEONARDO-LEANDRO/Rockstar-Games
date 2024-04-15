let RockstarGames = ['João', 'maria', 'Camila', 'Ana', 'Pedro', 'Laura', 'Tiago', 'Mariana', 'Matheus', 'Sofia'];
console.log(RockstarGames)


RockstarGames.push('Mateus');
RockstarGames.push('Isabela');
RockstarGames.push('Rafael');
RockstarGames.push('Camila Fernandes');
console.log(RockstarGames)
 

RockstarGames.splice(2,1) //Camila se demitiu
console.log(RockstarGames)//Vitoria veio para curitiba


RockstarGames.splice(4,1)
console.log(RockstarGames)

RockstarGames.push('Vitoria');
console.log(RockstarGames)

RockstarGames.push('Rafael');//Rafael foi promovido a Gerente Regional
console.log(RockstarGames)

let RockstarGames_Sem_Duplicidade = [...new Set (RockstarGames)]
console.log(RockstarGames_Sem_Duplicidade)