# Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse [link](https://github.com/alura-cursos/alura-studies/tree/Aula3).

# Conhecendo Props

O nosso "Alura Studies" está ficando bem legal. Já temos o formulário e a lista. Mas tem duas coisas que estão me incomodando bastante. Veja se concorda comigo. A primeira delas, é que o botão está muito genérico, está escrito só "Botão" nele. Não conseguimos deixar a aplicação inteira com o texto "Botão" escrito nele.

Nós queremos reaproveitar o CSS e a estrutura HTML dele, mas queremos algumas coisas customizadas. Por exemplo, no formulário nós queremos que tenha "Adicionar", no cronômetro tenha "Começar". Tem algumas coisas que mudarão. Ao clicarmos no botão queremos que aconteçam coisas diferentes, tanto no formulário quanto na lista.

E vamos fazer isso. Vou abrir o VS Code. Dentro do VS Code, vou entrar em "src > components > Formulario > index.tsx", e no código desse `index.tsx` conseguimos ver que, por exemplo, o input tem algumas formas diferentes de demonstrar que ele quer algo diferente. Por exemplo, tem o `type="time"`, `step="1"`, `name:"tempo"`. No HTML chamamos isso de "atributos".

No React tem uma forma muito parecida para conseguirmos compartilhar e customizar os nosso componentes dessa forma, que é chamada de "props", ou propriedades.

O que são essas propriedades? Nada mais são do que uma forma externa, uma forma acima do componente, de mandarmos alguma informação para dentro do componente, para que ele realize alguma coisa. Vamos fazer isso agora.

Eu vou identar o `Botao`, e dentro da `div` desse botão eu vou fazer algo bem parecido com o que vimos acima. Vamos criar uma prop, podemos colocar o nome que quisermos eu vou colocar `texto="Adicionar"`.

Salvei, mas o VS Code está apontando algum erro nessa linha. Se dermos uma olhada no erro clicando em `texto`, está escrito "O tipo '(texto: string;)' não pode ser atribuído ao tipo..." O que isso significa?

Sempre que você ler "tipo", você já pode atribuir que não é React, é TypeScript. Se estamos trabalhando com TypeScript e está falando de "tipo", provavelmente é TypeScript. O TypeScript está dizendo: "Você quer usar o prop `texto`? Você consegue, mas você não está dizendo em nenhum lugar que esse botão espera uma prop chamada texto que seja do tipo string". E é isso que precisaremos mudar.

Vou voltar no arquivo "components > Botao > index.tsx", e aqui temos que dizer que esperamos esse prop `texto`. Depois do `React.Component` vamos abrir e fechar uma tag, com os sinais de menor e maior (`<>`) e dentro dessa tag diremos qual é o tipo das props que esperamos.

A prop sempre é um objeto. Por exemplo, se quisermos colocar lá no botão um `onClick`, por exemplo, e colocar como se fosse uma função, ela sempre vai lá para o botão como se fosse um objeto, que chamamos de props, e dentro desse objeto vai ter o texto e vai `texto` o `onClick`. Vou tirar o `onClick`, pois não utilizaremos agora.

Vou voltar no "components > Botao > index.tsx". E como prop é sempre um objeto, eu vou colocar uma chaves naquela tag que escrevi após `React.Component`, já parou de dar erro, e dentro desse objeto vamos colocar o nome da prop que colocamos lá, `texto` e dizer qual é o tipo dela, `string`.

```
class Botao extends React.Component<{texto: string}> {
\\código omitido
}
```

Já parou de dar erro lá no formulário e aqui também. Mas ainda não estamos utilizando a prop. Como conseguir utilizar a prop aqui dentro? Dentro da função `render()`, que é a função obrigatória do *class component*, precisamos "pegar" essa prop. Para isso, eu vou apagar a palavra "Botão", vou abrir chaves e escrever `{this.props}`. É dessa forma que conseguimos pegar o prop.

Só que aqui estamos pegando o objeto prop, não é isso que queremos pegar e sim o texto que está dentro de props, então vou colocar `{this.props.texto}`. Vou salvar e voltar para o navegador.

Já está aparecendo o texto"Adicionar" escrito no botão. Então já conseguimos utilizar essa prop `texto`. Mas você concorda comigo que não é assim que normalmente utilizamos em um botão normal? Geralmente nós abrimos o botão, fechamos o botão e escrevemos "Adicionar" dentro dele. Tem como fazer isso no React também.

Voltando no VS Code, veja que se eu apagar o "texto" e deixar só `{this.props.}` quando o meu cursor fica após o ponto final e uso o atalho de autocompletar, "Ctrl + Espaço", ele já diz que espera `texto` e também um prop chamado `children`, que não estipulamos. Como colocamos `class Botao extends React.Component`, esse `React.Component` já espera que tenha esse tipo `children`.

Esse tipo `children` nada mais é do que a permissão para conseguirmos utilizar alguma coisa dentro do componente, que é o que nós queremos. Por que ele tem esse nome? Lembra lá no DOM que tem os nós e sempre tem o *parent* (pai) e sempre tem o *children* ou o *child*, que é o filho daquele nó. É sempre essa relação de pai e filho. Por isso o nome dele é "*children*".

Podemos colocar, por exemplo, `{this.props.children}`, apagamos esse trecho do texto que não utilizaremos mais: `<{texto: string}>`.No "src > components > Formulario > index.tsx", em vez de colocar `texto="Adicionar"`, vamos abrir e fechar o `<Botao>` e dentro vou colocar só `Adicionar`.

```
<Botao>
Adicionar
</Botao>
```

Não preciso abrir chaves aqui, porque não é uma variável, só precisamos colocar o texto mesmo. Vou salvar, vamos voltar no navegador. Se aparecer esse erro para você, é só cancelar o `npm start` e dar `npm start` de novo que vai funcionar corretamente.

Estamos conseguindo utilizar o "Adicionar" como se fosse o `children`. Para provar para vocês, eu vou voltar no VS Code e em vez de "Adicionar" vou escrever "Banana". Vamos voltar para o navegador, e apareceu "Banana" escrito no botão. Então, estamos conseguindo utilizar como `children`, não estamos mais utilizando como uma prop convencional.

Já conseguimos entender como funciona a prop como um atributo e a prop como `children`. No próximo vídeo, aprenderemos a reutilizar a lista. Tirar o item da lista e conseguir pegar mais uma propriedade legal.

# Faça como eu fiz: Adicionando Props para o Botão

Troque o texto padrão do componente`Botão` dentro de `src/components/Botao/index.tsx` por um prop `children` que terá o texto a ser exibido no componente.

### Opinião do instrutor

Dentro de `src/components/Botao/index.tsx`;

```
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component {
  render() {
    return (
      
    )
  }
}

export default Botao;
```

Dessa forma, podemos utilizar o componente `Botao` de forma bem parecida como utilizamos uma tag nativa HTML:

```

  Meu botão!

```

O React disponibiliza essa prop especial `children` por padrão para que possamos utilizar o componente dessa forma!
​				

