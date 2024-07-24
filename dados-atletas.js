class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // MÉTODOS PARA ACESSO AOS ATRIBUTOS DO OBJETO:

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemAlturaAtleta(){
        return this.altura;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    // MÉTODOS PARA O CÁLCULO E OBTENÇÃO DA CATEGORIA E DO IMC DO(A) ATLETA:

    calculaCategoria(idade){
        let categoria;
        if((idade<9)||(idade>30)){
            categoria = "Sem categoria";
        }else{
            if(idade <= 11){
                categoria = "Infantil";
            }else{
                if(idade <= 13){
                    categoria = "Juvenil";
                }else{
                    if(idade <= 15){
                        categoria = "Intermediário";
                    }else{
                        categoria = "Adulto";
                    }
                }
            }
        }
        return categoria;
    }

    calculaIMC(peso, altura){
        return peso/(altura*altura);
    }

    obtemCategoria(){
        return this.calculaCategoria(this.obtemIdadeAtleta());
    }

    obtemIMC(){
        return this.calculaIMC(
            this.obtemPesoAtleta(),this.obtemAlturaAtleta()
        );
    }

    // MÉTODOS PARA O CÁLCULO E A OBTENÇÃO DA MÉDIA VÁLIDA DO ATLETA:

    ordenaNotas(notas) {
        let notasOrdenadas = notas.sort(function (a, b) {
                    return a - b;
                });
        return notasOrdenadas;
    }

    extraiNotasValidas(notasOrdenadas) {
        let notasValidas = notasOrdenadas.slice(1,this.obtemNotasAtleta.length-1);
        return notasValidas;
    }

    somarNotasValidas(notasValidas) {
        let total = 0;
        total = notasValidas.reduce(function (soma,contador) {
            return soma + contador;
        });
        return total;
    }

    calculaMediaValida(notasValidas, somatorioNotas) {
        return somatorioNotas / notasValidas.length;
    }

    obtemMediaValida() {
        let notasValidas = this.extraiNotasValidas(this.ordenaNotas(this.obtemNotasAtleta()));
        let somatorio = this.somarNotasValidas(notasValidas);
        return this.calculaMediaValida(notasValidas, somatorio);
    }
}


// O CÓDIGO ABAIXO FOI UTILIZADO PARA TESTES:

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(">>>>>>>>>> VERIFICANDO SE O OBJETO FOI CRIADO: >>>>>>>>>>")
console.log();
console.log(atleta);
console.log();
console.log();
console.log(">>>>>>>>>> SAÍDA SOLICITADA: >>>>>>>>>>")
console.log();
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
console.log(`Peso: ${atleta.obtemPesoAtleta()} kg`);
console.log(`Altura: ${atleta.obtemAlturaAtleta().toFixed(2)} metros`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`); 
console.log(`Média Válida: ${atleta.obtemMediaValida().toFixed(4)}`);
  