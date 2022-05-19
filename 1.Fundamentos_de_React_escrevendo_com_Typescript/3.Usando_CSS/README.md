# Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse [link](https://github.com/alura-cursos/alura-studies/tree/Aula2).

# Aprendendo a estilizar

Com a maioria dos nossos componentes já prontos na estrutura de HTML, agora precisaremos **estilizá-los**.

Começaremos entendendo um pouco sobre como funciona a estilização em React. De volta ao VSCode, acessaremos o arquivo `index.tsx` do componente de "Botao", que é o mais simples.

Para entendermos como funciona o estilo dentro de `Botao`, o primeiro que mostraremos será o *inline style*, que normalmente é a forma mais simplificada porém não é a mais recomendada para estilização.

Igual ao HTML, existe um atributo em qualquer *tag* chamada `style` em que conseguimos colocar o inline style dentro. Mas ao invés de colocarmos uma *string* como `"background-color: black"` por exemplo, faremos de outra forma.

Inclusive o próprio TypeScript indica um problema em que o atributo precisa ser um objeto, então já notamos uma diferença do HTML para o React. Portanto, no lugar da string, colocaremos o objeto tal como foi sugerido no VSCode.

Como vimos no JSX que conseguimos renderizar JavaScript dentro do HTML com chave, no atributo não é diferente; então abriremos as chaves e colocaremos mais um par de chaves dentro, e dentro destas inseriremos as nossas estilizações como um objeto escrevendo JavaScript.

Quando vamos criar um objeto JavaScript, não poderemos colocar `background-color` por exemplo, pois a *key* do objeto não pode ter hífen. Portanto, a solução é colocar em *camel case*, e quando começamos a digitar `background`, o próprio TypeScript já mostra a sugestão de `backgroundColor` ao invés do uso de traço entre as palavras.

Portanto, é assim que escrevemos CSS no React com inline style. Após o objeto, colocaremos dois pontos e abriremos aspas simples para adicionar a string, que neste caso será `'blue'`. Depois, apertaremos as teclas "Ctrl + S" para vermos o resultado no navegador.

```
import React from 'react';

class Botao extends React.Component {
    render() {
        return (
            <button style={{
                backgroundColor: 'blue'
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

No navegador, notaremos que a cor de fundo do botão ficou azul, ficando claro como devemos escrever o atributo.

Por conta de ser JavaScript, conseguimos também colocar uma variável `const color` dentro das chaves de `render()`, a qual será igual a `'red'` por exemplo. Com isso, poderemos alterar a cor do `backgroundColor` para a variável `color` apenas.

```
import React from 'react';

class Botao extends React.Component {
    render() {
        const color = 'red';
        return (
            <button style={{
                backgroundColor: color
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

Se salvarmos assim e voltarmos ao navegador, veremos que a cor de fundo do botão fica vermelho.

Portanto, é uma facilidade conseguir trabalhar com variáveis também. Outro benefício é que, ao invés de colocarmos a `color`, podemos escrever `const backgroundColor` no lugar da variável para não precisarmos mais usar os dois pontos seguido da variável no estilo `backgroundColor`.

```
import React from 'react';

class Botao extends React.Component {
    render() {
        const backgroundColor = 'red';
        return (
            <button style={{
                backgroundColor
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

Se voltarmos ao navegador, a estilização do botão continua funcionando. Afinal, no objeto do JavaScript, se colocarmos uma key como `backgroundColor` sem os dois pontos, o sistema sempre procurará a variável dentro do escopo que possui o mesmo nome. Caso tenha, colocará este atributo como a key e o valor dentro deste objeto, o que é uma boa facilidade.

Outra forma que podemos usar é inline style também, mas esternalizaremos o objeto para outro lugar. Então, ao invés de colocarmos o `backgroundColor`, podemos criar uma constante chamada `styles` que será um objeto usando chaves.

Dentro deste, colocaremos o `backgroundColor` e depois apenas renderizaremos o `styles` dentro das chaves do atributo `style` do `<button>`.

Trocaremos `'red'` por `'green'` por exemplo, e voltaremos ao navegador para vermos o resultado.

```
import React from 'react';

class Botao extends React.Component {
    render() {
        const backgroundColor = 'green';
        const styles = {
            backgroundColor
        }
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

No navegador, o botão estará com fundo verde.

Portanto, podemos ter uma variável com um objeto, o qual ainda pode receber outra variável. Então o React é bastante dinâmico neste sentido.

Outro caminho seria, por exemplo, colocar `estaAtivo` sendo um *booleano* igual a `true` ao invés do nome da variável `backgroundColor`.

Já o `backgroundColor` da variável `styles` pode receber os dois pontos seguidos de `estaAtivo`. Neste momento, não conseguimos usar o `if()` pois está dentro do objeto.

Então, ao invés de usarmos o `if()`, usaremos um ternário com o ponto de interrogação `?`. Se estiver ativo, colocaremos o `backgroundColor` como `"green"` entre aspas duplas, e caso contrário, usaremos os dois pontos `:` e colocaremos `"red"` em seguida.

```
import React from 'react';

class Botao extends React.Component {
    render() {
        const estaAtivo = true;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

Como o `estaAtivo` está como `true`, poderemos voltar ao navegador e verificar que o botão está verde. Já se alterarmos para `false`, notaremos que o botão passa a ter o fundo vermelho.

Portanto, há esta reatividade do React nos ajudando a mudar a cor do *background*. Se precisássemos encontrar a tag de botão dentro de uma outra certa tag `<button>` para mudar a cor do `backgroundColor` por exemplo, podemos apenas dizer que, se estiver ativo, queremos uma certa *color*, e em caso contrário, queremos outra cor.

Porém, já sabemos que o inline style não é uma boa prática; assim como no HTML, conseguimos externalizar o CSS para fora.

Já existe um exemplo disso no `index.tsx` do diretório `./src/`, o qual também tem um `index.css` com alguns *resets*. Dentro deste primeiro no *root*, temos o `import` direto com uma string `'./index.css'` chamando este segundo arquivo, e esta é a forma de utilizarmos o CSS externalizado.

Mas se colocarmos desta forma, o CSS impacta todos os componentes, então podem surgir alguns problemas quando ficamos sobrescrevendo várias coisas.

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById('root')
);
```

Para isso, temos três soluções em média. O `Sass`, que é para nós podermos colocar os caminhos CSS, como por exemplo, uma classe componente que está dentro de uma `<div>` que está dentro de outra coisa.

Se precisássemos colocar `.component div p span` dentro do `index.css` por exemplo, pegaremos o `span` dentro de `p`, que está dentro de `div` que por sua vez está dentro de uma classe chamada `component`. Portanto, conseguimos fazer desta forma.

Já com o `Sass` que podemos colocar no React também, ao invés de fazermos da maneira anterior, podemos escrever `div {` seguido de `p {` na linha seguinte e `span {` na próxima linha dentro de `.component {` apenas.

Podemos colocar um estilo que só irá aparecer em `component`, dentro da `div {` poderemos colocar um estilo que estará dentro de `component`, em `p {` colocar um estilo de um parágrafo dentro de uma `<div>` que está dentro de uma classe de componente. Assim, conseguiremos trabalhar mais facilmente.

Utilizaremos o `Sass`, mas o instalaremos em outro vídeo. Outra forma é chamada CSS *modules*, a qual também usaremos e aprenderemos mais a fundo. Isso já resolverá nosso problema de ficarmos sobrescrevendo CSS, então é outra maneira interessante.

Por fim, a última forma, a qual não iremos utilizar mas mostraremos no navegador, é chamada CSS-in-JS, em que escrevemos o CSS no JavaScript como fizemos com o inline styles, mas só manteremos apenas no JavaScript mesmo, que é a maneira padrão.

O pacote `styled-components` do React é bem conhecido, e nos permite criar um componente que já possui alguns estilos, e há alguns outros pacotes que fazem isso para escrevermos CSS.

Iremos escrever com o CSS modules, o qual utiliza CSS, pois não há CSS em JS. Portanto, instalaremos os `Sass` a seguir, e começaremos algumas estilizações. Até lá!

# Estilizando com Sass

[Aqui está o CSS de reset do index.css](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/index.css)

[Aqui está o CSS do App.tsx](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/pages/style.scss)

[Aqui está o CSS do Formulário](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Formulario/style.scss)

[Aqui está o CSS do Botao](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Botao/style.scss)

[Aqui está o CSS da Lista](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Lista/style.scss)

[Aqui está o check-mark.svg](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/assets/img/check-mark.svg)

Nossa estrutura já está bem robusta e bem parecida do que será ao final, e só falta o cronômetro. Porém, a página ainda está com um aspecto feio, então iremos estilizá-la neste passo.

Primeiramente, instalaremos o `Sass`, que é o pré-processador CSS que iremos utilizar no curso. No próprio [site do NPM acessível neste link](https://www.npmjs.com/package/sass), encontraremos a parte "Usage", em que diz que podemos instalar com `npm install --save-dev sass` apenas.

Portanto, copiaremos este comando e voltaremos ao VSCode, pois será desta forma que instalaremos no terminal, o qual abriremos apertando as teclas de "Ctrl" mais aspas simples, ou acessando "Ver > Terminal" na barra superior de opções.

Colaremos o comando `npm install --save-dev sass` e executaremos com a tecla "Enter" para instalarmos.

Feita a instalação, aparecerá uma `"devDependencies"` no `package.json`, que é uma dependência de desenvolvimento chamada `"sass"`. Portanto, o pacote já está no nosso projeto.

```
//código anterior omitido

    "devDependencies": {
        "sass": "^1.41.1"
    }
}
```

Também o encontraremos no `package-lock.json`, que ficará em evidência na lista lateral de arquivos. Mas não precisaremos nos atentar tanto a essa questão agora.

Feito isso, apertaremos "Ctrl + ' " novamente para fecharmos o terminal, pois só queríamos instalar o `sass` mesmo. Também fecharemos todas as abas dos arquivos abertos no VSCode.

O primeiro elemento que iremos estilizar será o `index.css`. Iremos utilizar CSS mesmo, pois como será um arquivo global, não nos importaremos muito em usar `sass`, pois podemos estilizar o CSS direto.

Copiaremos o arquivo de *reset* e colaremos no arquivo `index.css`, e depois apertaremos as teclas "Ctrl + S" para identar corretamente. 

[Aqui está o CSS de reset do index.css](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/index.css)

Em seguida, voltaremos à nossa página no navegador. Notaremos que o fundo está cinza e o botão está sem bordas, então já temos algumas características interessantes.

De volta ao VSCode, o segundo elemento que estilizaremos será o `App.tsx`. Dentro da pasta "src" acessaremos o diretório "components".

Colocaremos o `App` como se fosse uma página, pois se tivermos múltiplas páginas, temos que criar uma pastas "pages" como é feito geralmente, mas como teremos apenas uma por enquanto, a criação será só por sintaxe e legibilidade.

Depois, moveremos o arquivo `App.tsx` para dentro do novo diretório "pages". Em seguida, acessaremos `index.tsx` de "components" para importarmos `App` de `'./pages/App'` ao invés de apenas `'./App'`.

Assim já estará funcionando, mas o arquivo aparecerá com um alerta. Abrindo o `App.tsx`, mudaremos os `imports` de `Formulario` para `'../components/Formulario'`, e de `Lista` para `'../components/Formulario'`, apenas adicionando um ponto final à frente do trecho para indicar a pasta correta da importação.

Feito isso, o alerta de erro desaparece. Voltaremos ao navegador para vermos se está funcionando.

De volta ao VSCode, acessaremos a pasta "pages" e dentro criaremos um novo documento chamado `style.scss`, e esta extensão `.scss` significa que se trata de um arquivo `sass`.

Na primeira linha, iremos pegar o estilo `sass` que iremos utilizar, a qual terá uma classe `.AppStyle` contendo um `display: grid` dentro.

Você pode pegar o estilo que está dentro de `src/pages/style.scss` [aqui](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/pages/style.scss)

Voltaremos ao `App.tsx` e importaremos a *string* `'./style.scss'`. Já no `<div className="App">` mais adiante, escreveremos `"AppStyle"` ao invés de apenas `"App"`.

Apertaremos "Ctrl + S" e abriremos a página no navegador para verificarmos se está funcionando corretamente.

```
import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss';

function App() {
    return (
        <div className="AppStyle">
            <Formulario />
            <Lista />
        </div>
    );
}

export default App;
```

No navegador, notaremos que há um *background* mais escuro com bordas arredondadas em um fundo cinza, então aparentemente tudo está funcionando.

Porém, já notamos as diferenças, e ao invés de usarmos `<class>` que é a maneira que usamos no HTML, estamos usando `className`.

Temos esta diferença no React porque, como lembramos, existe o `class` que utilizamos para criar tanto o `Botao` quanto o `Formulario`.

Então, como a `class` já é uma palavra reservada do JavaScript para criar uma classe, preferiram estabelecer o `className` ao invés do `class` para não termos nenhum problema de sobreposição dos dois termos.

Se quisermos colocar uma classe em uma *tag* HTML, temos que criar com `className` e não com `class`, que por sua vez até funciona, mas gerará alertas do sistema.

Se substituirmos `className` por apenas `class` no arquivo `App.tsx`, e formos no "Inspect" do navegador da nossa página, poderemos acessar a aba "Console" e ver o *warning* perguntando se queríamos dizer `className` ao invés da propriedade DOM inválida `class`.

Ou seja, o sistema deixará funcionar, mas nos diz que não é correto e indica o que fazer. Como já sabemos disso, voltaremos ao VSCode para mantermos o `className`.

Portanto, já estilizamos o `App()`, e iremos à pasta "Formulario" dentro de "components" para criarmos um novo arquivo `style.scss` e colarmos o código com `.novaTarefa` contendo `.inputContainer` e etc.

Você pode pegar o estilo que está dentro de `src/components/Formulario/style.scss` [aqui](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Formulario/style.scss)

Depois, abriremos o `index.tsx` da mesma pasta "Formulario" e faremos a importação da string `'./style.scss'`. Dentro do `<form>` de `Formulario`, colocaremos uma nova `className` chamada `"novaTarefa"`.

Em cada `<div>` deste arquivo, colocaremos um `className` igual a `"inputContainer"` também.

Apertaremos "Ctrl + S" e voltaremos ao navegador para vermos a diferença. Porém o botão ainda está inadequado.

Então iremos ao `index.tsx` da pasta "Botao" e retiraremos o *inline style* que colocamos em `<button>`. Por fim, importaremos o `'./style.scss'` e finalizaremos com as teclas "Ctrl + S".

```
import React from 'react';
import './style.scss';

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

Feito isso, voltaremos ao navegador e veremos o botão estilizado da maneira correta.

Porém, o estilo do *button* está dentro de "Formulario". Então criaremos um novo arquivo `style.scss` dentro de "Botao" que receberá o estilo inteiro de `button` presente no `style.scss` de "Formulario".

Em seguida, retiraremos os *styles* de `.inputContainer` que não pertencem ao botão, e colocaremos o `button` que estava abaixo dentro de `@media screen and (min-width: 1280px)`.

Depois, retiraremos o estilo de `button` que está no final do arquivo e antes do `@media screen` do `style.scss` de "Formulario" para deixarmos este style somente no botão.

Já de volta ao arquivo de estilo do "Botao", alteraremos os dois `button` para chamarmos a classe `.botao` em ambos.

Com isso, retornaremos à classe `Botao` e adicionaremos `className` igual a `"botao"` dentro da tag `<button>`.

Você pode pegar o estilo que está dentro de `src/components/Botao/style.scss` [aqui](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Botao/style.scss)

```
import React from 'react';
import './style.scss';

class Botao extends React.Component {
    render() {
        return (
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Botao;
```

Feita as alterações corretas, voltaremos ao navegador para ver se tudo está funcionando como o esperado.

Então já temos o estilo do nosso formulário e agora iremos estilizar a nossa lista.

Para facilitar, fecharemos todas as abas de arquivo abertas no VSCode. Abrindo o diretório "Lista", criaremos um novo arquivo `style.scss` e seguiremos o mesmo procedimento que fizemos até agora.

Você pode pegar o estilo que está dentro de `src/components/Lista/style.scss` [aqui](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/components/Lista/style.scss)

Pegaremos o código CSS utilizado para a lista e colaremos no arquivo. Depois abriremos o `index.tsx` de "Lista" e importaremos o `'./style.scss'`.

Em seguida, iremos até a tag `<aside>` e adicionaremos o `className` igual a `"listaTarefas"`. 

De volta à página no navegador, aparentemente tudo está funcionando como o esperado.

Agora criaremos um estilo para o `.item`, e o colocaremos no final do arquivo `style.scss` da lista. Já no `index.tsx` do mesmo componente, colocaremos uma nova classe chamada `"item"` na tag `<li>` do `<aside>` que acabamos de nomear.

Apertando "Ctrl + S", voltaremos ao navegador e receberemos um alerta de falha na compilação, indicando que não foi possível resolver o `clack-mark.svg`, pois realmente ainda não temos.

Então dentro de "src", criaremos uma nova pasta chamada "assets", a qual normalmente é usada quando queremos ter um arquivo estático, que são em geral imagens, ícones e outros elementos do gênero.

Dentro do novo diretório, criaremos uma nova pasta chamada "img", e dentro desta colocaremos o `check-mark.svg` disponibilizado.

Você pode pegar arquivo `check-mark.svg`  dentro de `src/assets/img/check-mark.svg` [aqui](https://github.com/lfrprazeres/alura-studies/blob/aula3.2/src/assets/img/check-mark.svg)

Por fim, iremos ao `.concluido` dentro de `style.scss` da lista para alterarmos o conteúdo dos parênteses de `url()` do atributo `background-image:` para `'../../assets/img/check-mark.svg'`. 

Estando tudo correto, voltaremos ao navegador para vermos que o nosso item está aparecendo como clicável. Porém, ainda não aparecerá o *check mark*, pois se clicarmos ainda não fará nada, afinal não temos nenhuma função de `onClick`.

Mas pelo menos a estilização já está mais agradável visualmente.

A seguir, mostraremos o problema de, quando clicamos em "Inspecionar" no navegador, veremos na aba "Elements" a forma como colocamos nossos estilos, como em `form class="novaTarefa"` e `<div class="inputContainer">` por exemplo.

Porém, só está com o nome `"novaTarefa"` que é muito genérico. Então, caso tivermos um projeto gigante, e em outro lugar tivermos também uma nova `novaTarefa` com outra classe, o programa pode sobrepor um ao outro.

Além disso, utilizaremos um pacote que resolverá este problema para nós, conhecido como **CSS Modules**. Na próxima aula, mostraremos como instalá-lo e configurá-lo.

# Usando CSS Modules

Como nosso estilo já está quase todo pronto, só faltará o cronômetro que faremos ao final.

Agora poderemos nos atentar ao problema de sobreposição que falamos anteriormente.

Recapitulando, imaginemos que precisamos ter uma planilha com todas as classes criadas e dizer: "nao podemos utilizar `"inputContainer"` e nem `"novaTarefa"`, porque já as usamos no código". 

Seria muito maçante, pois podemos utilizar outras classes sem sobrepor a outras, existem soluções para isso.

Se temos um *app* e um site pequenos, usamos pacotes externos com CSS e colocarmos uma classe nossa, a possibilidade de ter uma sobreposição é bem alta, afinal estes arquivos importados são bem grandes.

Então, para conseguirmos criar uma classe única mesmo que o nome seja genérico para não termos o problema de sobreposição. Temos um pacote que o resolve, chamado **CSS Modules**.

Como estamos utilizando o TypeScript, precisaremos de um *plugin* chamado `typescript-plugin-css-modules`, que pode ser encontrado no [site da NPM aqui](https://www.npmjs.com/package/typescript-plugin-css-modules) com este pacote.

Na parte "Installation", vemos a forma de instalá-lo com `npm install -D typescript-plugin-css-modules`. Então copiaremos e acessaremos o terminal no VSCode com "Ctrl + aspas simples" ou em "Ver > Terminal" na barra superior de opções, para então colarmos o comando de instalação com o botão direito do mouse, pois o atalho "Ctrl + V" provavelmente não funcionará.

Executando com "Enter", esperaremos enquanto instala e voltaremos à página da NPM no navegador. Ainda na parte de "Installation" mais adiante, pede-se que coloquemos este plugin no arquivo `tsconfig.json`, pois é onde está a configuração de TypeScript.

Então copiaremos apenas a linha com o nome de `"plugins":` fornecido no site, sem copiar também o `"compilerOptions":`, pois já temos o em nosso arquivo.

```
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

Depois, retornaremos ao VSCode, e caso a instalação do pacote já tenha sido concluída, poderemos fechar o terminal.

Dentro do nosso arquivo `tsconfig.json` na aba lateral, acessaremos o `"compilerOptions":` e colaremos o código copiado na linha seguinte logo após `"jsx:" "react-jsx",`. 

Com isso, teoricamente tudo já estará configurado na nossa aplicação. De volta ao *browser*, abriremos nossa página do "Alura Studies" e a atualizaremos com a tecla "F5".

Porém, ainda está `"inputContainer"`, então ainda não funcionou. Para resolvermos isso, começaremos entendendo o `"AppStyle"`.

Acessaremos `style.scss` da pasta "pages" no VSCode. Ao invés de usarmos este arquivo, precisaremos primeiro renomeá-lo para `style.module.scss`, afinal não será apenas um arquivo de estilo, e sim passará a ser um **módulo**.

A segunda mudança é, ao invés de só importarmos o `.scss` de uma só vez, o importaremos como se fosse um objeto. Então, no topo do código, faremos `import style` a partir de `'./style,module.scss'`.

Copiaremos este `style` e, ao invés do `className` ser uma *string*, passará a ser uma variável JavaScript com uso das chaves. Dentro, colocaremos `style.AppStyle` para exportarmos um grande objeto no lugar de simplesmente aceitar strings como estilo, afinal já é um módulo.

```
import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    return (
        <div className={style.AppStyle}>
            <Formulario />
            <Lista />
        </div>
    );
}

export default App;
```

Este objeto terá as classes que colocamos no `css-modules`. Neste caso, como o nome da classe que colocamos é `AppStyle`, usaremos o módulo `style` que importamos, seguido de ponto e de nome da classe.

Apertaremos "Ctrl + S" e voltaremos à nossa página no navegador, e a atualizaremos novamente.

Feito isso, acessaremos o "Inspect" com a aba "Elements" aberta, e abaixo da `<div>` de `id="root"`, notaremos que está `"style`, que é o nome do arquivo que colocamos, seguido de *underline*, seguido do nome da classe `AppStyle` que estabelecemos, seguido de dois *underlines* e uma *hash* completamente aleatória para que seja único, isso tudo ao invés de somente `"AppStyle"`.

Se nos atentarmos a não termos o mesmo nome de módulos por exemplo, o pacote ajuda a não termos problemas de sobreposição de CSS por darmos nomes iguais, pois é aleatório.

Para deixarmos mais polido, ao invés de usarmos `style.module.scss`, colocaremos o nome do módulo que queremos.

Por exemplo, se estamos no componente `App()`, renomearemos o nome do arquivo para `App.module.scss`, e importaremos o `style` deste módulo.

```
import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';

function App() {
    return (
        <div className={style.AppStyle}>
            <Formulario />
            <Lista />
        </div>
    );
}

export default App;
```

Voltando a página no navegador e atualizando com "F5", veremos que o nome da classe na `<div>` em "Elements" do "Inspect" estará muito mais descritiva. Ou seja, conseguimos ver que estamos no módulo `App`, o nome da classe é `AppStyle` e um *hash* aleatório novamente.

Portanto, conseguimos até saber onde está o estilo, resolvemos o problema de sobreposição e ainda deixamos o código mais polido.

Faremos a mesma coisa com os outros estilos que temos, começando pelo `style.scss` do componente "Botao" que será renomeado para `Botao.module.scss`. 

Em seguida, importaremos `style` dentro de `'./Botao.module.scss'`, e o `className` mudará para `style.botao` entre chaves. Depois, apertaremos "Ctrl + S"para salvarmos e voltaremos ao navegador.

```
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

Atualizando, inspecionaremos o botão e encontraremos a classe com o nome `"Botao_botao__` seguido de um *hash* aleatório. Então já está funcionando.

Após isso, iremos ao componente "Formulario" no VSCode e faremos a mesma metodologia, alterando o arquivo `style.scss` para `Formulario.module.scss` e depois importando o `style` de `./Formulario.module.scss'` no topo do código.

Em seguida, alteraremos o primeiro `className` que passará a ser igual a `style.novaTarefa` entre chaves, e tanto o segundo quanto o terceiro nome serão `style.inputContainer` entre chaves também. 

```
import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
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
            </div>
            <div className={style.inputContainer}>

//código posterior omitido
```

Já que estamos usando dois estilos, se estivéssemos utilizando o padrão que ficaria como `{style.novaTarefa__container}` por exemplo, que normalmente é uma forma de boa escrita, poderia até funcionar.

Mas se colocássemos um hífen, teríamos problemas. Para resolver caso estivéssemos usando um estilo que possui `-`, poderíamos envolvê-lo em colchetes e inserir uma string com as aspas duplas.

Ou seja, é a mesma forma pois estamos utilizando um objeto de qualquer maneira, mas colocamos colchetes e string para caracteres especiais que o JavaScript não consegue entender.

Como não temos este problema em nosso projeto, podemos simplesmente usar `style.` com o nome da classe.

Salvando o arquivo, voltaremos ao navegador e inspecionaremos o estilo do fomulário para vermos o *hash* aleatório em `class`.

Estando tudo certo, iremos ao componente "Lista" para aplicarmos o mesmo processo. O arquivo de estilo será renomeado para `Lista.module.scss` e importaremos `style` no `index.js`.

Depois, mudaremos o primeiro `className` para `style.listaTarefas` e o segundo onde havia `"item"` para `style.item` entre chaves, e por fim atualizaremos a página no navegador para vermos o resultado.

```
import React from 'react';
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} classsName="item">
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
```

No inspetor de código da lista, veremos os nomes com os *hashs* aleatórios, da mesma forma que os componentes anteriores.

Portanto, já conseguimos mudar todos os nossos estilos mais específicos, menos o *reset* que não é necessário, pois é algo mais global.

Com tudo que aprendemos neste passo, evitaremos problemas de sobreposição. Até a próxima aula!

# Para saber mais: Sobre CSS Modules

Muito legal o CSS Modules né? Mas tem várias outras curiosidades e vantagens que não mencionamos no vídeo!

Você sabia que podemos importar o CSS Modules de várias formas diferentes? Ou que podemos utilizar vários módulos no mesmo componente?

Pois é, o CSS Modules é bem mais complexo e interessante do que imaginamos e, se irmos bem a fundo nessa tecnologia, podemos deixar o nosso código bem mais interessante!

### Sobre Imports

Para começar, o CSS Modules nos dá o CSS em formato `object` e os exporta como `default`, logo, podemos importar das seguintes formas:

```
import style from './NomeDoComponente.module.scss';
```

```
import * as style from './NomeDoComponente.module.scss';
```

```
import { default as style } from './NomeDoComponente.module.scss';
```

Ainda seguindo em como importar um CSS Module, como ele é um export default, podemos nomeá-lo da forma como bem entendermos, por exemplo:

```
import Foo from './NomeDoComponente.module.scss';
```

```
import Bar from './NomeDoComponente.module.scss';
```

```
import Banana from './NomeDoComponente.module.scss'
```

Todas as formas acima retornarão o objeto que o CSS Modules exporta! 

Como agora sabemos que podemos nomear o objeto de formas diferentes, podemos também importar vários CSS Modules em um só componente!

```
import BotaoStyle from './Botao.module.scss';
import ItemStyle from './Item.module.scss';
```

OBS: Todas essas formas citadas acima *não são específicas de como importar um CSS Modules, e sim de como importar um export default em JS*.

Legal né?

Caso tenha alguma dúvida leia [a documentação do Create React App sobre CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).

# Faça como eu fiz: Transformando CSS em CSS Modules

Transforme o arquivo `src/components/Botao/style.scss` em CSS Modules trocando o nome do arquivo .scss para o nome do componente, instalando o plugin `typescript-plugin-css-modules` como dependência de desenvolvimento e configurando o plugin dentro do arquivo `tsconfig.json` e importando a classe dentro do arquivo de forma correta dentro de `src/components/Botao/index.tsx`.

### Opinião do instrutor			

Dentro do terminal:

```
npm install -D typescript-plugin-css-modules
```

Dentro de tsconfig.json:

```
{
  "compilerOptions": {
     …
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

Mudar o arquivo `src/components/Botao/style.scss` para `src/components/button/Botao.module.scss`

Dentro do arquivo `src/components/Botao/index.tsx`:

```
import React from 'react';
import style from './Botao.module.scss;

class Botao extends React.Component {
  render() {
    return (
      <button className={style.botao}>
        Botão
      </button>
    )
  }
}

export default Botao;
```

Com o CSS Modules, a classe que seria apenas `botao`, será `{nomeDoArquivoCSS}_{nomeDaClasseCSS}__{hashAleatoria}`. É por isso que mudamos nosso arquivo de `style.scss` para `Botao.module.scss`, pois isso faz ficar mais evidente na hora da classe que essa classe vem do componente Botao, fazendo a própria classe ser auto documentada, pois sabemos que é a classe `botao` vindo do componente `Botao`.

# O que aprendemos?

## Nessa aula, você aprendeu como:

- Usar o CSS inline;
  - Aprendemos como criar o CSS inline direto no atributo, como variável JS e utilizando condicionais para mudar o estilo.
- Utilizar CSS e Sass no projeto;
  - Vimos como importar CSS e SASS no projeto é fácil dentro de um projeto criado com Create React App.
- Colocar o CSS Modules em um projeto com Create React App + Typescript;
  - Configuramos o projeto para aceitar CSS Modules.
- Vantagens de se utilizar CSS Modules.
  - Discutimos as vantagens de se utilizar CSS Modules na aplicação.

