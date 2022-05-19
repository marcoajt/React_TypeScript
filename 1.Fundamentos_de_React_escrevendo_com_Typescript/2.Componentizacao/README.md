# Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse [link](https://github.com/alura-cursos/alura-studies/tree/Aula1).

# Criando um componente

Antes de criarmos o nosso primeiro componente, vamos entender essa última pasta, que eu não expliquei no vídeo anterior, a pasta "public". O único detalhe que alteraremos nela é o "index.html". Ele é, literalmente, o HTML da página e possui vários arquivos e alguns comentários que podemos até retirar, além do `<title>` do nosso HTML, que é o `React App`. Se retornarmos ao Google Chrome, aparecerá "React App", portanto, é exatamente esse `<title>`. 

Ao alteramos `React App` para `Alura Studies`, isto é, `<title>Alura Studies</title>`, apertar "Ctrl + S" e voltar ao Google, aparecerá "Alura Studies", significa que esse é o HTML da nossa página. Ele tem apenas um `div id="root"></div>` no "index.html" e é exatamente o que desejamos que tenha. No "index.tsx", que é parte da pasta "src", há um `ReactDOM.render(` e ele pega o `'root'`, isto é, uma *div* por *id* `'root'`. 

Ou seja, `document.getElementById('root')`. Dentro desse `Id('root')` que ele joga todo o nosso `React` e essa é, basicamente, a função da pasta "public". Ainda na pasta "public", temos o ícone que está sendo usado, "favicon.ico", as logos, "logo192.png" e "logo512.png", para caso seja necessário  renderizar outra coisa. 

Também temos o "manifest.json" que mostra: se o tamanho for "512x512", use determinada logo. E o "robots.txt", com a função de mostrar aos robôs do Google quais pastas desejamos que sejam indexadas nos arquivos de busca ou o que não queremos que tenha. Se temos uma tela de "Admin", por exemplo, e não planejamos que ela apareça no Google, então colocamos no "robots.txt". 

Agora, vamos criar o nosso componente. Para isso, criaremos uma pasta chamada "components" dentro de "src". Esse passo não é obrigatório, mas como o React nos libera tudo, de maneira que conseguimos colocar os nossos componentes em qualquer pasta, o ideal é ter uma padronização de como criaremos os nossos componentes para não termos problemas no futuro, quando o projeto ficar maior. Por exemplo, não conseguir encontrar os nossos componentes ou eles estarem todos na mesma pasta. 

Sendo assim, nós criaremos a pasta "components" e, dentro dela, outra pasta chamada "Botao" e, dentro dela, um "index.tsx" que será o nosso arquivo. Nele, usaremos *class components*, a primeira maneira de criar um componente que, geralmente, aprendemos. Então, importaremos o React na primeira linha: `import React from 'react';`. 

Em seguida, daremos um espaço na linha 2, e, na linha 3, criaremos um `class Botao` e essa classe estende um `React.Component {`. 

```
class Botao extends React.Component { 

}
```

Com isso, fica nítido que criaremos um botão que ele estende de um componente React, logo, será um componente React. Ao escrevermos, fica tudo bem descritivo. Esse *class componets* tem uma função obrigatória que é a `render()` e retorna, `return ()`, HTML. Se trata de um HTML, mas nós conseguimos escrever JavaScript dentro dele. Sendo assim, no `return` colocaremos um `<button>`, que é uma *tag* HTML, e, após ele, adicionaremos um nome `Botão`. 

Nós exportaremos essa classe embaixo, `export default Botao;`. 

```
import React from 'react'; 

class Botao extends React.Component {
  render() {
     return (
       <button>
           Botão
         </button>
        )
     }
    }

    export default Botao; 
```

Criamos o nosso botão. Agora, copiaremos o nome dele, `Botao`, e vamos ao "App.tsx". Ao invés de `Hello World`, importaremos o nosso botão, `import Botao from './components/Botao';`. Para renderizar esse botão, se colocarmos, por exemplo, uma chave, conseguiremos escrever JavaScript dentro dela. Para tanto, colocaremos `{Botao}` e testar se será possível executá-lo assim. 

Voltaremos à página e perceberemos que ele não renderizou nada. Vamos tentar executá-lo como se fosse uma função. `{Botao()}`. Prontamente, ele nos apresenta erro. Indo à página, poderemos conferir que, de fato, não funciona. A forma mais comum de renderizar um componente no React é renderizá-lo como se fosse uma *tag* HTML. 

Precisamos tirar as chaves, abrir uma *tag*, colocar o botão e os sinais de barra e maior: `<Botao />`, garantindo abrir e fechar o botão. Agora, retornando à página, aparece o nosso "Botão". Após termos criado o componente, conseguiremos partir para duas boas práticas muito conhecidas no React. Primeiro, o DRY, "Don't Repeat Yourself", e, segundo, o SRP,  "Single Responsibility Principle". 

O "Don't Repeat Yourself" é "Não se repita". Significa que, ao criar o componente, não é necessário ficar reescrevendo o código. Podemos, simplesmente, criar um botão e reaproveitá-lo em qualquer parte da aplicação. Esse é um ótimo benefício do React. 

O segundo, "Single Responsibility Principle", "Princípio da responsabilidade única", significa que se queremos um botão e um formulário que tem apenas a responsabilidade de gerenciar o próprio formulário, podemos criar um componente só para formulário e o botão será outro componente com a responsabilidade única de renderizar um botão. 

Assim, é possível deixar bem desacoplado, com a responsabilidade para cada componente. Essa é outra facilidade que o React oferece. Já criamos um botão e, no próximo vídeo, continuaremos a construir a nossa aplicação. Até lá!!

# Para saber mais: Sobre componentes

Dentre todas as vantagens que o React nos proporciona, a componentização é uma das mais conhecidas, além de ser uma das marcas do React.

Vamos ver a criação de um class componente:

```
class Botao extends React.Component {
  render() {
   return (
      <button>
        Botão
      </button>
    )
 }
}
```

Só com esse pequeno componente, podemos ter várias informações interessantes, vamos separá-las em informações sobre componentização (em geral, tanto **class components** quanto **function components**) tanto sobre class components especificamente.

## Sobre Componentização

### Nome do Componente

O nome do componente deverá começar com *letra maiúscula*, mas por que?

Existe uma possibilidade no html de criar [web-components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components), que nos permite criar tags html totalmente customizadas. Entre essas customizações, podemos customizar o nome da tag!

Para o React diferenciar um componente de um web-component, ele pede para que criemos um componente com a primeira letra maiúscula, assim ele consegue diferenciar por exemplo que `<meuBotao />` é um web-component e `<MeuBotao />` é um componente!

### return e JSX

Para podermos criar um componente, fora a regra que citamos acima, precisamos retornar `JSX`, e o que seria isso exatamente?

O [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html) é uma forma de "escrever HTML no JS", que é a forma que explicamos, mas não é exatamente isso.

O JSX não transfere o componente `<Botao />` em HTML diretamente, antes disso, ele é transformado em uma elemento React, e aquele código é transformado em algo assim:

```
const Botao = React.createElement('button', {}, 'Botão');
```

Sem se atentar ao que isso faz agora, mas por debaixo dos panos o React transforma aquela sintaxe """HTML""" nesse palavrão que, na hora do `ReactDOM.render`, é transformado em DOM e, aí sim, transformado em HTML.

Você percebeu que a tag html é usada como primeiro parâmetro da função `createElement` como uma string?

Isso mostra que, para criarmos um componente, precisamos de uma tag "pai", logo, o código a seguir não funcionará:

```
class Botao extends React.Component {
  render() {
   return (
      <p> Título do Botão </p>
      <button>
        Botão
      </button>
    )
 }
}
```

Caso você precise fazer isso, leia sobre [React.Fragment](https://pt-br.reactjs.org/docs/react-api.html#reactfragment).

## Sobre class Components

### React.Component e render

Para criarmos um componente com class components, precisamos estender  à classe `React.Component`. Nesta classe, existe apenas uma função obrigatória chamada `render` e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!

# Criando o formulário

Nós já sabemos criar um componente de botão e agora faremos o nosso formulário. Para isso, voltaremos ao VSCode e, dentro de "components", criaremos uma nova pasta chamada "Formulario". Dentro de "Formulario", vamos criar um novo arquivo chamado "index.tsx". Em seguida, nós importaremos o `import React from 'react';` e, na linha 3, criaremos uma nova classe chamada "Formulario" e ele nos dará uma `extends` em `React.Component {`. 

```
import React from 'react';

class Formulario extends React.Component {

}
```

Como bem sabemos, a função obrigatória para esse *class components* é a `render()`. Dentro do `render()` há um `return` e, em seguida, um formulário `<form>`. Dentro dele, duas *divs* dos dois *inputs* e um botão  abaixo. Mas, como já temos um botão criado, nós o utilizaremos e entenderemos como usar um componente dentro do outro. 

```
import React from 'react';

class Formulario extends React.Component {
  render() {
      return (
          <form>
            <div>

            </div>
            <div>

            </div>
          </form>
      )
    }
}
```

Nós já aprendemos a utilizá-lo no "App.tsx" e precisaremos, literalmente, replicar. Então, vamos importar o botão `import Botao from '../Botao';` e colocá-lo após as duas *divs*, `</div>`, dentro do *form*, `</form>`. Dentro das *divs* teremos uma `<label>` e um `<input />`. Após isso, copiaremos essa *label*, colaremos na segunda *div*, que está vazia e identaremos. 

```
import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
  render() {
      return (
          <form>
            <div>
              <label>

              </label>
              <input />    
            </div>
            <div>
              <label>

              </label>
              <input />
            </div>
          <Botao />                
        </form>
      )
    }
}
```

O *type* do primeiro *input* será `type="text"` e do segundo, `type="time"`, o tempo da nossa tarefa. No primeiro, o *name* será `name="tarefa"`, o *id*, `id="tarefa"`, o *placeholder* que é o que aparece antes de escrevermos será `placeholder="O que você quer estudar"` e ele é `required`. Mais acima, o `<label>` será `Adicione um novo estudo` e o `htmlFor="tarefa"`, ou seja, `<label htmlFor="tarefa">`.

Significa que se selecionarmos o *label*, queremos que o *input* seja focado, o `htmlFor` serve para isso. 

```
import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
  render() {
      return (
          <form>
            <div>
              <label htmlFor="tarefa">
                 Adicione um novo estudo
               </label>
               <input
                  type="text"
                  name="tarefa"
                  id="tarefa"
                  placeholder="O que você quer estudar"
                  required
                />
```

O segundo *label* será `Tempo`. O *input* terá `type="time"`, o *step* será de valor 1, `step="1"`, que é um atributo do tipo *time*. O *name* é `name="tempo"`, o *id* é `id="tempo"`, o mínimo de tempo que pode ter é `min="00:00:00"` e o máximo de tempo é uma hora e meia, `max="01:30:00"`, o motivo é que aparecerá "99:99".

Ele também é `required`. No *label*, o `hmlFor` é tempo, `<label htmlFor="tempo">`. Se selecionarmos o *label*, queremos que apareça o *input* do tempo focado. 

```
            </div>
            <div>
              <label htmlFor="tempo">`
                Tempo
              </label>
              <input
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
              />
            </div>
          <Botao />
        </form>
      )
    }
  }
```

Então, criamos o nosso formulário, vamos exportá-lo embaixo, `export default Formulario;`. E, no "App.tsx", ao invés de renderizarmos o botão, vamos renderizar o formulário, pois ele renderizará o botão. Sendo assim, em `import Botao from './components/Botao';` substituiremos "Botao" por `Formulario` e o importaremos de `'./components/Formulario';`. Além disso, ao invés de renderizarmos o "Botao", renderizaremos `<Formulario />`.

```
import React from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
     <div className="App">
       <Formulario />
     </div>
  );
 }

 export default App;
```

Agora, voltaremos para o Chrome e ele mostrará "Adicione um novo estudo" e o *input* "O que você quer estudar". Se selecionarmos o *label*, o *input*  é focado, por causa do `htmlFor`. Já é possível selecionar várias horas em "Tempo" e quando clica no "Botão", o campo mostra que é *required*, " ! Preencha este campo", significa que está minimamente funcional. 

Nós criamos o nosso formulário e no próximo vídeo criaremos a nossa lista. Até lá!!

# Criando a lista

Toda a estrutura do nosso formulário está concluída. Agora, passaremos ao próximo componente que será o componente de lista. Começaremos abrindo o VSCode e, dentro de "components", criaremos uma nova pasta chamada "Lista". Dentro dela, criaremos um novo arquivo chamado "index.tsx". Na linha 1, importaremos o React: `import React from 'react';`. 

Na linha 3, ao invés de utilizar o *class components*, que era a forma mais antiga, optaremos pelo *function component*. Antes escrevíamos "class, o nome do componente, extends, React.Component", agora, escreveremos `function`, seguido do nome do nosso componente, que será Lista, `function Lista` e toda a sintaxe de uma função JavaScript, então, colocaremos parênteses, para os parâmetros da função, seguidos de chaves: `function Lista() {`. 

Como a função não tem nenhuma tarefa obrigatória, como na classe do `React.Component`, precisamos apenas retornar o "jsx" que escreveremos. Portanto, nós escreveremos um HTML, o `<aside>`. E exportaremos, mais abaixo, o `export default Lista;`. Então, essa é a sintaxe de um *function component*. 

```
import React from 'react';

function Lista() {
  return (
    <aside>

    </aside>
  )
}

export default Lista;
```

Neste ponto da aula, podemos nos questionar sobre o motivo de termos usado antes o *class components*. O motivo é criar uma certa dinâmica de conceitos e entendermos como o *class components* e o *function component* são escritos, assim, ao encontrar cada um deles, entenderemos o porque e como são usados. O *class components* era usado, porque, na época em que foi criado, achavam que aquela era a melhor forma de criar um componente com estado.

Não quer dizer que não existia *function component* antes, mas, para termos um *state* dentro do componente, precisávamos criar uma classe, que chamávamos de *Stateful Component*. Quando não precisávamos desse estado, por exemplo, se só precisávamos renderizar algum dado, então, fazíamos um *Stateless Component*. Neste caso, criávamos `const Item = () => (...)`(igual a uma arrow function) e, por exemplo, retornávamos uma `li`, considerando a nossa lista com o Item. 

```
const Item = () => (
  <li>
    item...
  </li>
)
```

Esse era um *Stateless Component* e não era possível ter um estado dentro dele. Depois da versão 16.8 do React, surgiu a ideia de *hooks*, funções externas que podemos importar no *function component* e, assim, ter estado dentro do componente. Esse momento representa o fim da obrigatoriedade de se ter um *Stateful Component*, um componente via classe. 

Por isso, hoje em dia, utilizamos mais *function component* do que *class component* e o React já anunciou que as próximas atualizações estarão relacionadas à *function component*. Significa que o *class component* está se tornando um *Deprecated*, algo em "desuso". Nós passaremos a usar o *function component* a partir de agora e, com o tempo, refatoraremos os *class components* que criamos, usando o *function component*. 

Dentro do nosso `<aside>` faremos um `<h2>`, que terá `Estudos do dia`. Embaixo dele, existirá uma `<ul>`e, nela, alguns itens. Primeiro, criaremos dois `<li>` e, cada um deles terá um `<h3>` e um `<span>`. No primeiro `<h3>` adicionaremos o nome da tarefa, por exemplo, a primeira tarefa que estudaremos é `React` e o tempo que precisaremos para estudar para a matéria será de duas horas, `02:00:00`. 

Nossa segunda tarefa será `Javascript` e o tempo de estudo será de uma hora, `01:00:00`. 

```
function Lista() {
  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        <li>
          <h3>
            React
          </h3>
          <span>
            02:00:00
          </span>
        </li>
        <li>
          <h3>
            Javascript
          </h3>
          <span>
            01:00:00
          </span>
        </li>
      </ul>
    </aside>
  )
}
```

Apertaremos "Ctrl + S", voltaremos ao "App.tsx" e importaremos `import Lista from './components/Lista';`. Embaixo do formulário, vamos renderizar a lista, `<Lista />`. Retornaremos ao navegador e aparece "Estudos do dia" seguido de "React", "02:00:00" e "Javascript", "01:00:00". 

Já temos a nossa lista, mas, como estamos utilizando o React, não ficaremos criando vários *li* na mão, precisaremos renderizar essa lista de forma dinâmica. Nós aprenderemos a fazer isso no próximo vídeo.

# Renderizando um array

No último vídeo, criamos a Lista, mas escrevemos os `<li>` manualmente e o React — o próprio JavaScript — nos permite renderizar as listas de forma dinâmica. Aprenderemos a fazer isso agora. Vamos retornar ao VSCode e, nele, temos a nossa Lista. É possível notar que há sempre um `<li>`, um `<h3>`, um `<span>`, isto é, a estrutura HTML é toda igual e a única coisa que muda é o conteúdo dentro dela. 

No caso, a tarefa 1 é React e a 2, Javascript. O tempo da primeira é de duas horas e, da segunda, uma hora. A única coisa que precisamos ter do lado de fora são esses conteúdos, esses dados, e depois renderizamos uma só vez, passando de um por um. É o que faremos. Para isso, criaremos uma constante dentro da Lista, chamada tarefas, `const tarefas = []`, e ele será um *array*, já que teremos vários itens. Esse *array* é de objetos. 

Então, nós criaremos uma chave, `const tarefas = [{`, e esse objeto terá a `tarefa: 'React',`, que é a nossa primeira tarefa, e o `tempo: '02:00:00'`. O segundo objeto será a `tarefa: 'Javascript',` e o `tempo: '01:00:00`. 

```
function Lista() {
  const tarefas = [{
      tarefa: 'React',
        tempo: '02:00:00'
    }, {
      tarefa: 'Javascript',
        tempo: '01:00:00'
    }]
```

Assim, temos o nosso *array* de tarefas. Algo que já estudamos nas primeiras aulas é que, para executar o JavaScript dentro de um componente, podemos usar chaves dentro do HTML. Então, para renderizar o *array*, depois da `<ul>`, abriremos chaves `{}`. Essa é uma vantagem do "jsx", nos permitir escrever Javascript dentro da estrutura HTML nesse caso. Seguindo, podemos tentar renderizar as tarefas fazendo `{tarefas()}`, mas, o tarefas não é uma função e o JSX espera retornar outra estrutura JSX, então não executaremos desta maneira. 

Se colocarmos da maneira como aparece anteriormente, ele executará um *array* de objeto, o que não faz sentido algum. Temos que percorrer esse *array* e retornar cada item dele como um HTML. A função no JavaScript que nos permite fazer isso é a `.map`, que roda, faz o *loop* no *array* e retorna algo de cada iteração. 

Então, vamos colocar um `{tarefas.map()}`. O `.map` aceita dois parâmetros. O primeiro é o próprio item, a própria tarefa, logo, teremos `{tarefas.map((tarefa, ))}`. E o segundo é o *index* do *array* nessa tarefa, `{tarefas.map((tarefa, index) => (`. Atenção aos parênteses, porque significam que você já vai retornar. 

Se substituirmos por chaves, `{tarefas.map((tarefa, index) => {})}`, teremos um escopo, algo que não queremos, desejamos apenas retornar, por isso, usaremos parênteses. E ele retorna um "jsx", no caso, o nosso `<li>`. Portanto, colocaremos `<li> </li>`, lembrando de abrir e fechar, e deixaremos exatamente como apareceu antes, usando o `<h3>` e o `<span>`. 

```
{tarefas.map((tarefa, index) => (
  <li>
      <h3></h3>
      <span></span>
    </li>
))}
```

Mas, nós precisaremos colocar a `{tarefa.tarefa}`, isto é, `<h3> {tarefa.tarefa} </h3>` que é o nome da tarefa indicada mais acima. E, no `<span>`, escreveremos `{tarefa.tempo}`, ou seja, `<span> {tarefa.tempo} </span>`. Ao invés de colocar `tarefa` no `.map`, vamos deixar `item`, quer dizer, `{tarefas.map((item, index) => (`, porque `tarefa.tarefa` fica feio. 

Sendo assim, alteraremos o `h3` para `<h3> {item.tarefa} </h3>` e o `span` para `<span> {item.tempo} </span>`. É possível notar uma vantagem do *TypeScritpt*, se colocarmos `item.` (item, ponto), ele já mostra que, dentro do objeto, temos "tarefa" e "tempo". Quem está fazendo isso é o *TypeScript*, mesmo sem "tiparmos" ainda. 

Nós já renderizamos, agora apertaremos "Ctrl + S" e voltaremos ao navegador. No navegador, já temos "React", "Javascript", e "React" e "Javascript" abaixo, que é aquele outro código que não excluímos. Então, vamos retornar ao VSCode, tirar os dois *li* que estão mais abaixo, apertar "Ctrl + S", voltar para o Chrome e, agora, só aparece um "React" e um "Javascript". 

Para *mockar*, isto é, poder ter uma simulação de algo dinâmico, vamos adicionar `tarefa: 'Typescript'` e `tempo: '03:00:00'`. Apertaremos "Ctrl + S" e retornaremos ao navegador. De forma dinâmica, ele já mostrou o "Typescript", criou um *li*. Ao inspecionarmos, notaremos que ele criou um novo `<li>` com o `<h3>Typescript</h3>` e com o `<span>03:00:00</span>`. 

De forma reativa, ele já consegue saber que existe um novo item no *array* e, dinamicamente, renderiza com o método `.map`. Isso resolve o nosso problema de duplicação de código. Ao invés de ficarmos criando várias *li*, apenas fazemos `.map` e, dentro dele, escrevemos uma *li* só e o React consegue fazer essa demonstração de forma dinâmica. 

Vamos voltar ao VSCode. Nós já colocamos a `<li>`, mas `item` e `index`, mas não usamos o `index`. O React fica um pouco perdido quando vamos utilizar `.map`, porque quando renderizamos o `.map`, ele precisa saber qual item desse *array* corresponde ao DOM real, pois, de forma dinâmica, ele vai renderizando o DOM. Sendo assim, ele precisa saber quais dos itens corresponde ao do DOM. Precisamos de uma chave para *linkar* um com o outro. 

O nome disso é *key*. O React sempre pede que, o fazer uma renderização dinâmica, assim como o `.map`, uma Lista, tenhamos um *key*. Sendo assim, dentro do *li* nós criaremos uma chave *key*, `<li key={}>`, e o `key`, por enquanto, colocaremos como *index*, `<li key={index}>`, pois ainda não temos um item com *id*, mas, o ideal, é colocar o *id*, porque o *index* pode ser variável, então, não é uma boa prática. 

Ou seja, vamos colocar o *index* e, depois, quando estivermos fazendo de maneira realmente dinâmica, trocaremos pelo *id*. Para ter mais informações sobre isso, existe um **Alura+** sobre performance em listas com React, o que permite ter uma ideia um pouco melhor sobre *key*. Seguindo, vamos salvar, voltar no Chrome e, por enquanto, não fez diferença, ele continua renderizando. 

Além disso, não mostra o atributo *key*, por ele ser um atributo específico do React, portanto, não chega ao DOM real, e estamos conseguindo renderizar as nossas listas com `.map`. No próximo vídeo, vamos aprender um pouco sobre CSS no React. Até lá!!

# Renderização dinâmica de arrays

Temos esse array:

```
const tarefas = [{ tarefa: 'React' }, { tarefa: 'Javascript' }, { tarefa: 'Typescript '}];
```

Qual é a alternativa que utiliza um método de array de forma correta 
para renderizar essas tarefas, colocando cada tarefa desse array dentro 
de um `p`?

`tarefas.map(item => <p> {item.tarefa} </p>)`
​	
Alternativa correta!
O map retorna um outro array, e como não foi utilizada chaves, ele 
está retornando um array de JSX, isso retorna os itens como esperado!

# Faça como eu fiz: Utilizando o map

Crie um `function component Lista` dentro do arquivo `src/components/Lista/index.tsx`. O componente contém um array chamado `tarefas` tendo 2 objetos representando cada tarefa, uma das tarefas é `React` e o tempo é `02:00:00` e o outro é `Javascript`, que tem o tempo de `01:00:00`.

Após isso, retorne uma div, depois renderize esse array utilizando o método `map`, retornando cada item dentro de uma tag `div`, a tarefa dentro de uma tag `h3` e o tempo dentro de uma tag `p`. Não esqueça de utilizar o index como `key`;

### Opinião do instrutor			

```
function Lista() {
  const tarefas = [{ tarefa: 'React', tempo: '02:00:00' }, { tarefa: 'Javascript', tempo: '01:00:00'  }]
  return (
    <div>
      {tarefas.map((item, index) => (
        <div key={index}>
          <h3> {item.tarefa} </h3>
          <p> {item.tempo} </p>
        </div>
      ))}
    </div>
  )
}
```

Dessa forma, estamos utilizando o array de forma dinâmica, renderizando as tarefas de acordo com o array logo, se por acaso colocarmos de forma manual um item no array, o React entenderá que existe um novo item e renderizará a lista com o novo item! Isso além de ser muito legal respeita um dos conceitos que estamos comentando nesse curso, o Don't repeay yourself / Não se Repita (DRY), que não recisaremos repetir a estrutura JSX, apenas dizemos como gostaríamos que o React renderize nossos itens e ele se encarrega do resto!

# O que aprendemos?

## Nessa aula, você aprendeu como:

- Funciona a pasta public;
  - Abordamos sobre a pasta public, para que ela serve e por que raramente mexemos nela, mostramos também o arquivo index.html e como que o React popula ele com os componentes.
- Criar um componente com class component e como utilizá-lo;
  - Criamos um componente com class component, mostrando toda a sintaxe desde o extends até o retorno e o export.
- O que é JSX;
  - Vimos que o React retorna na verdade um JSX, não um HTML, também falamos de algumas diferenças entre os dois.
- Criar um function component;
  - Também criamos um componente com function component (a forma mais atual de se escrever componentes desde a versão 16.8), e mostramos como é mais simples criarmos dessa forma.
- Utilizar o método map para renderizar arrays.
  - Renderizamos arrays de JSX com o método map, mostrando que assim conseguimos aproveitar parte do JSX e mudar apenas o valor de item para item, utilizando assim o princípio DRY (Don't Repeat Yourself).

