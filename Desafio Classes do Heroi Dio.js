// Definindo a classe Heroi
class Heroi {
    // Construtor da classe, definindo as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, que define o ataque conforme o tipo do herói
    atacar() {
      let ataque;
  
      // Estrutura de decisão para definir o ataque conforme o tipo
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'não realizou ataque'; // Caso tipo desconhecido
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis com tipos diferentes
  const heroi = new Heroi('Arthur', 30, 'guerreiro');

  
  // Chama o método atacar para cada herói
  heroi.atacar(); // O guerreiro atacou usando espada
 
  