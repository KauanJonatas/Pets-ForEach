let pets = [
    {
        nome: "max",
        idade: "3 anos",
        especie: "gato",
    },
    {
        nome: "tartaruga",
        idade: "1 anos",
        especie: "jabuti"
    }
]

pets.unshift({
    nome: "théo",
    idade: "6 meses",
    especie: "cachorro - golden"
})

console.log(pets)
pets.push(
    {
        nome: "manuel",
        idade: "1 ano",
        especie: "camaleão",
        cor: {
            cores: ["azul", "amarelo", "vermelho", "verde"]
        }
    }
)

pets.forEach(element => {
    if (element.nome === "manuel") {
        console.log(element)
    }
});


//  console.log(pets[3].cor.cores[2])


