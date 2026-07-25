// Smooth scrolling for navigation links

//seleciona a tag nav para manipular a classe active
const nav = document.querySelector('nav');


//seleciona o botão de menu para adicionar o evento de clique
const menuToggle = document.querySelector('.menu-toggle');

//seleciona todos os links de navegação para adicionar o evento de clique
const navLinks = document.querySelectorAll('nav a');


//adiciona um evento de clique para cada link de navegação
navLinks.forEach(link =>{

    //quando um link é clicado, o comportamento padrão de navegação é prevenido
    link.addEventListener('click', () => {

        //obtém o valor do atributo href do link clicado para identificar a seção correspondente
        const sectionId = link.getAttribute('href');

        //seleciona a seção correspondente ao link clicado usando o atributo href do link
        const section = document.querySelector(sectionId);

        //rola suavemente para a seção correspondente usando o método scrollIntoView com a opção behavior definida como 'smooth'
        section.scrollIntoView({ behavior: 'smooth' });
    })

    //remove a classe active da tag nav para fechar o menu mobile após clicar em um link de navegação
    nav.classList.remove('active');
});

/**menu mobile */
//adiciona um evento de clique ao botão de menu para alternar a classe active na tag nav, permitindo abrir e fechar o menu mobile
menuToggle.addEventListener('click', () => {


    //alternar a classe active na tag nav, permitindo abrir e fechar o menu mobile
    nav.classList.toggle('active');
});


// dinamicamente adiciona o conteudo das habilidades
//objeto que armazena os dados das habilidades, onde cada chave representa uma habilidade e contém um título e um texto descritivo
const skillData ={
    java: {
    title: "Java",
    text: `
        <p>
            Utilizo <span>Java</span> como minha principal linguagem de programação, desenvolvendo aplicações orientadas a objetos e aplicando conceitos como <span>encapsulamento</span>, <span>herança</span>, <span>polimorfismo</span> e <span>abstração</span>, com foco em código organizado, reutilizável e de fácil manutenção.
        </p>

        <p>
            Também possuo experiência com <span>Collections Framework</span>, <span>tratamento de exceções</span>, <span>Java NIO</span>, <span>Streams API</span>, <span>Generics</span>, <span>Enums</span>, <span>Records</span>, <span>Lambda Expressions</span>, <span>Functional Interfaces</span>, além de tecnologias como <span>JavaFX</span> e <span>JDBC</span>, que aplico continuamente em projetos acadêmicos e pessoais.
        </p>
    `
    },

    backend: {
        title: "Backend",
        text: `
           <p>
                Tenho interesse em atuar no <span>desenvolvimento backend</span>, criando aplicações organizadas, escaláveis e de fácil manutenção. Em meus projetos aplico conceitos de <span>Programação Orientada a Objetos</span>, <span>JDBC</span>, integração com <span>bancos de dados relacionais</span> e boas práticas voltadas para qualidade e reutilização de código.
            </p>

            <p>
                Continuo aprofundando meus conhecimentos em <span>arquitetura de software</span>, <span>ecossistema Java</span> e integração entre aplicações, buscando desenvolver soluções robustas e alinhadas às boas práticas utilizadas no desenvolvimento backend moderno.
            </p>
        `
    },

    mysql: {
        title: "MySQL",
        text: `
           <p>
                Possuo conhecimentos em <span>MySQL</span> aplicados à criação e manipulação de <span>bancos de dados relacionais</span>, utilizando <span>SQL</span> para consultas, filtros, ordenação, relacionamentos e operações de inserção, atualização e remoção de dados.
            </p>

            <p>
                Também possuo experiência na integração entre aplicações <span>Java</span> e bancos de dados por meio do <span>JDBC</span>, além de continuar aprofundando meus conhecimentos em <span>modelagem de dados</span>, persistência e organização das informações para o desenvolvimento de aplicações.
            </p>
        `
    },

    git: {
        title: "Git e GitHub",
        text: `
            <p>
                Utilizo <span>Git</span> e <span>GitHub</span> para versionamento e gerenciamento de código-fonte, trabalhando com <span>repositórios</span>, <span>commits</span>, <span>branches</span>, <span>merges</span> e sincronização de projetos durante o desenvolvimento.
            </p>

            <p>
                Essas ferramentas fazem parte do meu fluxo de desenvolvimento, permitindo organizar a evolução dos projetos, gerenciar diferentes versões do código e aplicar boas práticas de <span>controle de versão</span>.
            </p>
        `
    },

    desenvolvimentoWeb: {
        title: "Desenvolvimento Web",
        text: `
           <p>
                Possuo conhecimentos em <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span> aplicados ao desenvolvimento de interfaces web, com foco na estruturação de páginas, estilização de layouts responsivos e implementação de interações para proporcionar uma melhor experiência ao usuário.
            </p>

            <p>
                Atualmente continuo aprimorando minhas habilidades por meio da criação de projetos práticos, explorando conceitos de <span>design responsivo</span>, organização de código e desenvolvimento de interfaces modernas, intuitivas e de fácil manutenção.
            </p>
        `
    },

    algEstruturaDados: {
        title: "Algoritmos e Estrutura de Dados",
        text: `
            <p>
                Possuo conhecimentos em <span>algoritmos</span> e <span>estruturas de dados</span>, aplicando conceitos como <span>listas</span>, <span>pilhas</span>, <span>filas</span>, técnicas de <span>busca</span> e métodos de <span>ordenação</span>, compreendendo sua importância para o desempenho, organização e eficiência das aplicações.
            </p>

            <p>
                Aplico esses conceitos no desenvolvimento de projetos e na resolução de problemas práticos, buscando criar soluções mais eficientes, organizadas e com melhor desempenho.
            </p>
        `
    }      
}

//seleciona todos os elementos com a classe skill-card para adicionar eventos de clique e exibir as informações correspondentes às habilidades
const cards = document.querySelectorAll('.skill-card');

//seleciona o elemento com o id skill-title para atualizar o título da habilidade exibida
const title = document.getElementById('skill-title');

//seleciona o elemento com o id skill-text para atualizar o texto descritivo da habilidade exibida
const text = document.getElementById('skill-text');


//armazena o título original do elemento skill-title para permitir a restauração do título quando o usuário clicar em outro card ou voltar ao resumo
const defaultTitle = title.textContent;

//armazena o texto original do elemento skill-text para permitir a restauração do texto quando o usuário clicar em outro card ou voltar ao resumo
const defaultText = text.innerHTML;

//variável para armazenar o card atualmente ativo, permitindo controlar a exibição das informações correspondentes à habilidade selecionada.
let activeCard = null;

//para cada card de habilidade, o conteúdo original do card é armazenado em um atributo data-original-text para permitir a restauração do conteúdo quando o usuário clicar em outro card ou voltar ao resumo
cards.forEach(card => {

    //armazenar o conteúdo original do card em um atributo data-original-text para permitir a restauração do conteúdo quando o usuário clicar em outro card ou voltar ao resumo
    card.dataset.originalText = card.innerHTML;
});

//adiciona um evento de clique para cada card de habilidade, onde ao clicar em um card, o título e o texto correspondentes à habilidade são atualizados com base nos dados armazenados no objeto skillData
cards.forEach(card => {
    
    //quando um card é clicado, o valor do atributo data-skill é obtido para identificar qual habilidade foi selecionada, e as informações correspondentes são exibidas atualizando o conteúdo dos elementos title e text
    card.addEventListener('click', () => {

        //obtém o valor do atributo data-skill do card clicado para identificar qual habilidade foi selecionada
        const skill = card.dataset.skill;

        //se o card clicado já estiver ativo, o conteúdo do título e do texto é atualizado para exibir o resumo profissional, permitindo que o usuário volte à visualização inicial das habilidades
        if(activeCard === card){

            //atualiza o conteúdo do elemento title para exibir o título original do resumo profissional, armazenado na variável defaultTitle
            title.textContent = defaultTitle;
            
            //atualiza o conteúdo do elemento text para exibir o texto original do resumo profissional, armazenado na variável defaultText, utilizando innerHTML para permitir a formatação do texto com tags HTML            
            text.innerHTML = defaultText;

            //restaura o conteúdo original do card ativo usando o valor armazenado no atributo data-original-text
            activeCard.innerHTML = activeCard.dataset.originalText;

            //remove a classe active do card ativo para desativá-lo
            card.classList.remove('active');

            //define a variável activeCard como null para indicar que não há mais um card ativo, permitindo que o usuário clique em outro card para exibir as informações correspondentes à habilidade selecionada
            activeCard = null;

            //encerra a execução da função para evitar que as informações correspondentes à habilidade selecionada sejam exibidas, mantendo o resumo profissional como a visualização ativa
            return;
        }

        //atualiza o conteúdo do elemento title com o título da habilidade correspondente ao card clicado, obtido a partir do objeto skillData usando a chave skill
        title.textContent = skillData[skill].title;
        

        //atualiza o conteúdo do elemento text com o texto descritivo da habilidade correspondente ao card clicado, obtido a partir do objeto skillData usando a chave skill, e utilizando innerHTML para permitir a formatação do texto com tags HTML
        text.innerHTML = skillData[skill].text;

        //se houver um card ativo, o conteúdo do card é restaurado para o conteúdo original usando o valor armazenado no atributo data-original-text, garantindo que apenas um card exiba as informações correspondentes à habilidade selecionada
        if(activeCard){
            activeCard.innerHTML = activeCard.dataset.originalText;
        }

        //remove a classe active de todos os cards para garantir que apenas o card clicado seja destacado como ativo, permitindo que o usuário identifique facilmente qual habilidade está sendo exibida
        cards.forEach(c => {
            //remove a classe active de cada card para garantir que apenas o card clicado seja destacado como ativo
            c.classList.remove('active');
        });

        //adiciona a classe active ao card clicado para destacá-lo como ativo, indicando visualmente que as informações correspondentes à habilidade selecionada estão sendo exibidas
        card.classList.add('active');

        //o conteúdo do card clicado é atualizado para exibir a opção de voltar ao resumo, permitindo que o usuário retorne à visualização inicial das habilidades
        card.innerHTML = '← Voltar ao Resumo';

        //o card clicado é armazenado como o card ativo para permitir o controle da exibição das informações correspondentes à habilidade selecionada
        activeCard = card;
        
    });
});



 