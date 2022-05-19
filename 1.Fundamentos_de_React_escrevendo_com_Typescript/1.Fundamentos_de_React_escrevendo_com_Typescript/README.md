# Apresentação

Olá, boas-vindas ao curso de React com Typescript. Meu nome é Luiz Fernando, eu sou instrutor aqui na Alura, e hoje estudaremos sobre React, a biblioteca mais utilizada para Javascript atualmente, segundo uma pesquisa chamada [State of JS](https://2020.stateofjs.com/en-US/technologies/), e o Typescript, uma biblioteca para tipar variáveis em Javascript.

Com essas duas bibliotecas, criaremos uma aplicação chamada "Alura Studies", na qual poderemos adicionar as tarefas que desejamos estudar e o tempo dedicado a esses estudos. Por exemplo, vou adicionar um novo estudo "React" com o tempo de 2 segundos, e outro, "Typescript", com 5 segundos. 

Adicionando essas tarefas, elas vão para uma lista onde será possível selecioná-las. Selecionado "React", o tempo dessa tarefa vai diretamente para um cronômetro, que passará a mostrar "00:02". Se eu adicionar o Typescript, o valor mudará para "00:05". Depois que essa tarefa vai para o cronômetro, eu consigo inciá-la com o botão "Começar", que ativará o temporizador. Quando o tempo chegar a zero, a tarefa será completada e não será mais possível clicar sobre ela. Esse será o nosso ecossistema.

Para conseguirmos criar essa aplicação, primeiramente entenderemos como criar um projeto React com o `create react app`, além de aprender o que ele nos traz em questão de estrutura de pastas. 

Também aprenderemos o conceito de componentização, o principal que o React nos traz. Em nossa aplicação, todos os elementos, como o formulário, o botão, a lista, os itens e o cronômetro, são componentes distintos. Aprenderemos a criá-los da maneira antiga, com os *Class components*, e de uma nova forma com os *Function components*.

Criando esses componentes, aprenderemos dois conceitos muito importantes. O primeiro deles é o DRY - Don't Repeat Yourself, ou "não se repita" em português, muito usado no React. A ideia é que não é necessário repetir códigos, já que a criação de componentes permite reaproveitá-los em outras instâncias - por exemplo, usaremos o nosso botão tanto no formulário quanto no cronômetro, alterando apenas o texto que é mostrado e o evento acionado no clique. Dessa forma, reaproveitaremos o CSS e a estrutura HTML desse botão.

Outro conceito é o chamado SRP - Single Responsibility Principle, traduzido para "Princípio da Responsabilidade Única". De forma simplificada, cada função do seu código deve ter uma responsabilidade. Em nosso caso, como o *function component* é uma função e um componente, cada componente deverá ter apenas uma responsabilidade. Usaremos bastante esse princípio ao criarmos nosso cronômetro.

Também usaremos Sass para conseguirmos fazer o CSS mais rápido, e Css Modules para não termos o problema de sobreposição de CSS de um componente para outro. Também aprenderemos sobre comunicação entre componentes com o Props, e sobre o estado interno de um componente com o State.

Caso você seja um veterano em React, também analisaremos como funciona uma transição/refatoração de um *Class component*, uma forma antiga, para um *Function component*, que é uma forma mais atual de se escrever React, entendendo a diferença deles, o motivo do *Function component* ser priorizado, entre outras coisas.

A partir de agora entraremos nessa gigantesca comunidade do React, e você entenderá por que ele é tão requisitado pelas empresas e tão adorado pelos desenvolvedores.

Bons estudos!

# Preparando o ambiente: Windows

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador, sendo elas:

- [Node.js/npm](https://nodejs.org/pt-br/)
  - Para instalar o Node, clique no link e baixe a versão LTS (versão recomendada)
  - Para verificar se foi instalado corretamente, abra o terminal e escreva `node -v` ou `node --version`

![alt text: site do Nodejs, com o botão da versão recomendada em foco por um quadrado vermelho!](https://caelum-online-public.s3.amazonaws.com/2233-react-modernizando-forma-escrever-typescript/01/aula1-imagem1.png)

- [Git](https://git-scm.com/download/windows)

  - Caso não tenha um terminal de preferência, recomendo utilizar o git bash que é o utilizado neste curso. Para instalá-lo, haverá uma opção durante a instalação do git para permitir instalar o git bash

  ![alt text: imagem mostrando várias caixas selecionáveis. A caixa “Git Bash Here”  está em evidência por um quadrado vermelho com uma seta apontada para ele](https://caelum-online-public.s3.amazonaws.com/2233-react-modernizando-forma-escrever-typescript/01/aula1-imagem2.png)

  - Para verificar se o git foi instalado corretamente, abra o terminal e escreva `git --version`

- [Visual Studio Code](https://code.visualstudio.com/download)

  - Entre no link e baixe a versão de Windows.

# Preparando o ambiente: Linux

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador, sendo elas:

- Nodejs

  :

  - Para instalar o Node, abra o terminal e digite `sudo apt install nodejs`
  - Para conferir se o download ocorreu corretamente, digite `node -v` ou `node --version`

- Git

  - Para instalar o git, abra o terminal e digite `sudo apt install git-all`
  - Para conferir se o download ocorreu corretamente, digite `git --version`

- Visual Studio Code

  - Entre no link e baixe a versão de Linux.

# Preparando o ambiente: Mac

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador e, para isso, utilizaremos um controle de pacotes para mac super útil chamado [Homebrew](https://brew.sh/index_pt-br). Caso não tenha ele instalado, só clicar no link e seguir o comando que ele descreve para o download. Após isso, faremos download das nossas dependências para rodar o projeto, sendo elas:

- Nodejs/npm
  - Para instalar o Node na sua máquina, clique no link e baixe a versão LTS (versão recomendada)
  - Para verificar se foi instalado corretamente, abra o terminal e escreva `node -v` ou `node --version`
- Git
  - Para instalar o git, abra o terminal e digite `brew install git`
  - Para verificar se o git foi instalado corretamente, abra o terminal e escreva `git --version`
- Visual Studio Code
  - Entre no link e baixe a versão de Mac.

Agora podemos começar!

​				                    

# Criando o projeto

Antes de tudo, vamos entender por que o React foi criado. Como muita gente sabe, o React foi criado pelo Facebook em 2013. Ele começou a ser criado no XHP do PHP, em uma tentativa de utilizar XML no PHP. Depois disso, surgiu o FaxJs, um framework criado por um interno do Facebook em Javascript.

A empresa gostou bastante da ideia e, na criação do feed de notícias da aplicação, tiveram a ideia de emitir uma notificação com um número quando um novo post era publicado. Entretanto, tiverem bastante dificuldade para criar essa comunicação, e precisavam de um pacote que conseguisse reaproveitar parte dessas telas e facilitar a comunicação entre elas. Daí surgiu o React.

O React tem duas premissas principais. A primeira delas é a componentização. Com ela você pode ter, por exemplo, um ícone de Home, outro de Marketplace e outro de Watch, reaproveitando esses componentes e alterando somente as partes diferentes entre elas. Sendo assim, os ícones podem ter os mesmos aspectos, as mesmas cores e os mesmos comportamentos, alterando aquilo que é necessário.

A segunda premissa é o gerenciamento de estado. O React é "reativo", enquanto o Javascript normalmente é imperativo. Nesse cenário você deve, por exemplo, instruir a barra de notificação a se inscrever nos posts e incrementar a quantidade de posts na notificação sempre que um novo post for publicado. Isso fica muito custoso, muito imperativo.

Ao invés disso, é possível criar algo reativo, por exemplo, "sempre que algo mudar nos posts, faça determinada coisa". Ou seja, temos um componente que reage à quantidade de posts, o que torna o gerenciamento mais fácil. Você simplesmente instrui do que o componente depende, e ele renderiza/atualiza automaticamente com base nessa dependência - por exemplo, essa lista de posts.

Sabendo das premissas do React, vamos para o terminal para aprendermos a criar esse projeto. Antes disso, vou abrir o navegador e acessar o <https://npmjs.com>. Nós vamos usar o gerenciamento de pacotes do node (NPM) para criarmos o projeto, e ele normalmente vem instalado com o Node. Você pode abrir o terminal e executar `node -v` para verificar se o Node está instalado, e `npm -v` para verificar se o NPM está instalado. Ambos os comandos retornam as versões dos seus respectivos pacotes.

O pacote do NPM que usaremos para criar o projeto é o `create-react-app`. Ele é muito simples de usar, bastando rodarmos um comando. Na documentação, vemos que é necessário usar o comando `npx create-react-app` seguido do nome da aplicação, nesse caso `alura-studies`. 

O `npx` é utilizado para executar um pacote, e não para baixá-lo. Se usarmos um comando como `npm install`, iremos instalar na máquina o pacote. Com o `npx`, apenas executaremos esse pacote a partir da nuvem, e é isso que vamos fazer. 

Avançando na documentação, vemos que é possível selecionar um template para termos algumas funcionalidades a mais no projeto, nesse caso o Typescript. Também utilizamos o gerenciador de pacotes NPM, uma das alternativas disponíveis (como o Yarn, dentre outros). 

O `create-react-app` normalmente leva em consideração a presença ou não do Yarn. Se você tiver o Yarn na sua máquina, ele terá como preferência a presença do Yarn na aplicação. Para que isso não aconteça, basta usarmos o comando `--use-npm`.

Tendo essas informações, vamos para o terminal. Executaremos o comando `npx create-react-app --template typescript alura-studies --use-npm`, onde:

- `npx create-react-app` é o pacote que vamos executar;
- `--template typescript` é o template Typescript para nosso projeto;
- `--use-npm` informa explicitamente que queremos usar o NPM para gerenciar os pacotes;
- e `alura-studies` é o nome do nosso projeto.

Teremos uma mensagem informando que a nova aplicação React está sendo criada. Esse processo demora algum tempo, então não se asssuste.

Ao final da instalação, teremos algumas coisas curiosas em nosso prompt de comando. De início, somos informados que o `react`, o `react-dom`, os `react-scripts` e o template de Typescript do `create-react-app` foram instalados. Em seguida, somos apresentados a alguns comandos que veremos mais tarde. 

Foi criado um arquivo `tsconfig.json`, uma configuração de Typescript. Mais abaixo, podemos começar o projeto entrando na pasta (`cd alura-studies`) e executando o comando `npm start`. Ao fazer isso, o terminal rodará um comando `react-scripts start` e o projeto será executado na URL <http://localhost:3000>.

Acessando essa página, teremos uma mensagem informando que devemos editar a pasta `/src/App.tsx` e salvar para atualizar e começarmos a fazer nosso código. No próximo vídeo vamos entender o conteúdo do projeto que acabamos de criar.

# Faça como eu fiz: Criar um projeto typescript com CRA

Execute o Create React App sem instalá-lo, criando um projeto chamado alura-studies com o template typescript e informando que o projeto usará o npm.

​			                        												

### Opinião do instrutor			

```
npx create-react-app alura-studies --template typescript --use-npm
```

Com esse comando, estamos informando várias coisas, sendo elas:

- ```
  npx
  ```

  - O comando `npx`, diferente do comando `npm`, apenas executa um pacote, sem que precisemos instalá-lo na nossa máquina, como o create-react-app normalmente só é usado no começo para criar o projeto, o ideal é executar com `npx` pois isso fará com que você sempre execute a última versão do pacote.

- ```
  create-react-app
  ```

  - O nome do pacote que queremos executar.

- ```
  alura-studies
  ```

  - O nome do projeto que queremos, assim como o nome da pasta.

- ```
  --template typescript
  ```

  - O Create React App nos permite usar vários templates, tendo como sintaxe o `--template`, que diz pro terminal que logo após iremos dizer qual template gostaríamos de usar, e o nome do template em si. O Create React App já tem o template [typescript](https://create-react-app.dev/docs/getting-started/#selecting-a-template) criado, mas caso tenha algum template que queira usar e não existe, você também pode [criar o seu!](https://create-react-app.dev/docs/custom-templates/),

- ```
  --use-npm
  ```

  - Caso o yarn esteja instalado na sua máquina, o Create React App prioriza à utilização dele, e isso irá gerar um `yarn.lock` dentro da nossa aplicação, e nós queremos utilizar o npm ao invés do yarn, por isso precisamos usar o comando `--use-npm` se quisermos garantir que o Create React App utilize o npm para instalar as dependências necessárias e também garantir que ele gere o `package-lock.json` ao invés do `yarn.lock`. 

# Entendendo o projeto

Já sabemos rodar o nosso código, e agora vamos abrir o VSCode e entender o que já temos pronto no projeto e o que precisamos mudar para começarmos a construir o Alura Studies.

De volta ao terminal, pressionaremos "Ctrl + C" para interromper a execução e rodaremos o código `code .` para abrir o VSCode. De volta ao terminal, executaremos `npm start` novamente.

No VSCode, temos os arquivos `package.json` e `package-lock.json`, que pertencem ao NPM. O `package.json` é padrão para qualquer projeto que utiliza o NPM, e tem o nome do projeto, a versão, as dependências que está usando e se ele é privado ou não. Os `scripts` são os comandos que ele pode executar, como `npm start`, que se refere ao comando `react-scripts start`. 

O `eslintConfig` são configurações de ESLint, uma forma de padronização (boas práticas) de código. Nessa seção temos `react-app` e `react-app/jest`, uma configuração de testes que comentaremos no futuro. O `browserlist` lista alguns navegadores que suportam essa aplicação.

O `package-lock.json` é um arquivo fechado que nunca vamos alterar. Normalmente quando instalamos alguma dependência ou coisas do tipo, todo o histórico é feito nesse arquivo.

A pasta "node_modules" contém literalmente todos os pacotes que foram instalados no projeto. Nós também não vamos alterar o conteúdo dessa pasta, pois ele é gerenciado pelo NPM. 

O `.gitignore` é um arquivo do Git, referente a tudo que o Git irá ignorar quando fizermos commits, por exemplo, como os pacotes em "node_modules", os arquivos de debug e assim por diante. 

O `tsconfig.json` possui algumas configurações de Typescript, e o `README.md` é a documentação da nossa aplicação.

A pasta "src" é a principal do projeto, e é onde trabalharemos nosso código. Nela temos o arquivo `App.css`, que possui todas as marcações de CSS que atualmente constroem nossa página. O `App.test.tsx` é um arquivo de testes dessa aplicação.

O `App.tsx` tem os códigos HTML da página, incluindo o `logo` e o texto que está sendo exibido na tela.

O `index.css` possui as configurações de reset, e o `index.tsx` importa e renderiza o nosso `App`, e entenderemos mais sobre esse processo mais tarde. Também temos o `logo.svg` que está sendo usado na página da aplicação.

O `react-app-env.d.ts` é um arquivo de descrição utilizado pelo Typescript, algo que também entenderemos melhor no futuro. O `reportWebVitals.ts` é um pacote que o `create-react-app` nos traz, mas também não nos atentaremos muito a ele. E o `setupTests.ts` é literalmente uma configuração de testes.

Vamos remover tudo que não iremos utilizar, nesse caso os arquivos `App.css`, `App.test.tsx`, `logo.svg`, `reportWebVitals.ts` e `setupTests.ts`. Depois de deletarmos esses arquivos, um erro passará a ser exibido no navegador. Isso mostra duas das vantagens do `create-react-app`: a primeira é o *Hot Reload*, que automaticamente recarrega a página sempre que fazemos alterações no código, e a tela de erro que nos mostra exatamente onde estão os problemas da aplicação. 

Em `index.tsx`, removeremos a importação do arquivo `reportWebVitals` que foi deletado e a utilização dele. 

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Em `App.tsx`, removeremos a importação do `App.css` e do `logo`. Também removeremos o `<header>`, mantendo somente uma `<div>` vazia.

```
import React from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
```

Retornando ao <http://localhost:3000>, teremos uma tela em branco. Agora conseguiremos fazer o famoso "Hello World" em nossa `<div>`. 

```
import React from 'react';

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
```

Após salvarmos, o texto "Hello World" será exibido na página. Já entendemos como nossos arquivos estão estruturados e como fazer um "Hello World" na tela. No próximo vídeo criaremos nosso primeiro componente. 

# O que aprendemos?

## Nessa aula, você aprendeu como:

- Configurar o seu ambiente para rodar o projeto; 
  - Aprendemos como configurar o seu ambiente para poder criar e rodar um projeto React, instalando o Node/npm e o GIT para controlarmos as versões e/ou baixarmos a aplicação do Github.
- Diferenciar npx de npm;
  - Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.
- Criar um projeto com create-react-app com template typescript usando npm;
  - Criamos um projeto utilizando npx, entendemos que o CRA (Create React App) tem possibilidade de criar projetos com template (optamos pelo typescript), escolhendo o npm como o nosso gerenciador de pacotes padrão.
- O Create React App estrutura o projeto.
  - Entendemos como o Create React App estrutura a aplicação, vendo dos arquivos de configuração (tsconfig, package.json, package-lock.json entre outros), até as pastas/arquivos que serão atualizados por nós (pasta src, arquivos app.tsx, index.tsx, index.css entre outros).