const prompt = require ('prompt-sync')();

class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    let ataque = "";

    switch (this.type) {
      case 'mago':
        ataque = "Magia";
        break;
      case 'arqueiro':
        ataque = "Arco e flecha";
        break;
      case 'guerreiro':
        ataque = "espada";
        break;
        case 'monge':
        ataque = "Artes Marciais";
        break;
        case 'ninja':
            ataque = "Shuriken";
        break;
      default:
        ataque = "Ataque desconhecido"
        break;
    }
    console.log (`O heroi: ${this.name} da classe: ${this.type} \n atacou usando: ${ataque}`)
}
}

function criarHeroi(){
    let name = prompt("Escreva seu nome de heroi: ")
    let age = parseInt(prompt("Digite a idade do seu herói: "))
    let type = prompt("Escolha a classe do seu herói entre: Mago, Arqueiro, Monge, Guerreiro ou Ninja: ")

    return heroi = new hero(name, age, type)
}

const heroi1 = criarHeroi()

heroi1.atacar()