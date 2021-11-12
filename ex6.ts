interface Pessoa {
	id: number;
    name: string;
    bio: string;
}

/** 
 * Classe com métodos estáticos imperativos
 * Todos os métodos possuem:
 * @param lista - O array de objetos do tipo pessoa, que será manipulado pelas funções
 * @param id - O número que será usado para encontrar o item do tipo pessoa dentro da lista
 */
class ClasseImperativa {
    /**
     * Percorre a lista até encontrar a pessoa dona do id
     * Retorna o index dessa pessoa na lista, ou -1 caso não a encontre
     */
    static encontraIndex(lista: Array<Pessoa>, id: number) : number {
        let index: number = -1;
        for(let i=0; i<lista.length; i++) {
            if(lista[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    /**
     * Retorna a bio da pessoa que possui o id passado, ou uma mensagem de erro caso o id sejá inválido
     */
    static retornaBio(lista: Array<Pessoa>, id: number) : string {
        let bio: string = '';
        const index: number = this.encontraIndex(lista, id);
        if(index === -1) {
            bio = 'Bio não encontrada, id inválido';
        } else {
            bio = lista[index].bio;
        }

        return bio;
    }

    /**
     * Retorna o nome da pessoa que possui o id passado, ou uma mensagem de erro caso o id sejá inválido
     */
    static retornaName(lista: Array<Pessoa>, id: number) : string {
        let name: string = '';
        const index: number = this.encontraIndex(lista, id);
        if(index === -1) {
            name = 'Nome não encontrado, id inválido';
        } else {
            name = lista[index].name;
        }

        return name;
    }

    /**
     * Se o id for válido, apaga o item da lista e mostra mensagem de sucesso
     * Caso contrário, apenas mostra mensagem de erro
     */
    static apagaItem(lista: Array<Pessoa>, id: number) : void {
        let aviso: string;
        const index: number = this.encontraIndex(lista, id);
        if(index === -1) {
            aviso = 'Item não encontrado, id inválido';
        } else {
            lista.splice(index, 1);
            aviso = 'Item apagado';
        }
        console.log(aviso);
    }

    /**
     * Se o id for válido, altera o item da lista e mostra mensagem de sucesso
     * Caso contrário, apenas mostra mensagem de erro
     * @param tipo - Variável do tipo number que define o atributo que será alterado: (1) name ou (2) bio
     * @param novo - String que deverá substituir o valor atual do atributo name/bio da pessoa em questão
     */
    static alteraItem(lista: Array<Pessoa>, id: number, tipo: number, novo: string) : void {
        let aviso: string;
        const index: number = this.encontraIndex(lista, id);
        if(index === -1) {
            aviso = 'Item não encontrado, id inválido';
        } else {
            if(tipo === 1) {
                lista[index].name = novo;
            } else {
                lista[index].bio = novo;
            }
            aviso = 'Item alterado';
        }
        console.log(aviso);
    }
}

/** 
 * Classe com métodos estáticos funcionais
 * Todos os métodos possuem:
 * @param lista - O array de objetos do tipo pessoa, que será manipulado pelas funções
 * @param id - O número que será usado para encontrar o item do tipo pessoa dentro da lista
 */
class ClasseFuncional {
    /**
     * Percorre a lista até encontrar a pessoa dona do id
     * Retorna o index dessa pessoa na lista, ou -1 caso não a encontre
     */
    static encontraIndex(lista: Array<Pessoa>, id: number) : number {
        for(let i=0; i<lista.length; i++) {
            if(lista[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Retorna a bio da pessoa que possui o id passado, ou uma mensagem de erro caso o id sejá inválido
     */
    static retornaBio(lista: Array<Pessoa>, id: number) : string {
        const index: number = this.encontraIndex(lista, id);

        return index === -1 ? 'Bio não encontrada, id inválido' : lista[index].bio;
    }

    /**
     * Retorna o nome da pessoa que possui o id passado, ou uma mensagem de erro caso o id sejá inválido
     */
    static retornaName(lista: Array<Pessoa>, id: number) : string {
        const index: number = this.encontraIndex(lista, id);

        return index === -1 ? 'Nome não encontrado, id inválido' : lista[index].name;
    }

    /**
     * Se o id for válido, apaga o item da lista e mostra mensagem de sucesso
     * Caso contrário, apenas mostra mensagem de erro
     */
    static apagaItem(lista: Array<Pessoa>, id: number) : void {
        const index: number = this.encontraIndex(lista, id);

        if(index === -1) {
            console.log('Item não encontrado, id inválido');
        } else {
            lista.splice(index, 1);
            console.log('Item apagado');
        }
    }

    /**
     * Se o id for válido, altera o item da lista e mostra mensagem de sucesso
     * Caso contrário, apenas mostra mensagem de erro
     * @param tipo - Variável do tipo number que define o atributo que será alterado: (1) name ou (2) bio
     * @param novo - String que deverá substituir o valor atual do atributo name/bio da pessoa em questão
     */
    static alteraItem(lista: Array<Pessoa>, id: number, tipo: number, novo: string) : void {
        const index: number = this.encontraIndex(lista, id);

        if(index === -1) {
            console.log('Item não encontrado, id inválido');
        } else {
            tipo === 1 ? lista[index].name = novo : lista[index].bio = novo;

            console.log('Item alterado');
        }
    }
}

let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

console.log(ClasseImperativa.retornaBio(lista, 0));
console.log(ClasseFuncional.retornaBio(lista, 2));
console.log(ClasseImperativa.retornaName(lista, 5));
console.log(ClasseFuncional.retornaName(lista, 2));
ClasseImperativa.apagaItem(lista, 7);
ClasseFuncional.apagaItem(lista, 2);
//parâmetros da função alteraItem: (lista, id, variável a ser alterada (1 pra name ou 2 pra bio), string com novo conteúdo)
ClasseImperativa.alteraItem(lista, 1, 1, 'Amanda');
ClasseFuncional.alteraItem(lista, 4, 2, 'Nova bio');

//situação dos nomes e bios após execução das funções
lista.forEach(function (pessoa) {
    console.log(pessoa.id);
    console.log(pessoa.name);
    console.log(pessoa.bio);
});