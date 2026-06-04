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
                Possuo conhecimentos em Java aplicados ao desenvolvimento de aplicações orientadas a objetos, utilizando conceitos como encapsulamento, herança, polimorfismo e abstração.
            </p>

            <p>
                Tenho expandido meu conhecimento em Java com Collections Framework, tratamento de exceções, estruturas de dados e algoritmos, além de familiaridade com recursos modernos da linguagem, como Generics, Enums, Records, Lambda Expressions e Functional Interfaces.
            </p>

            <p>
               Utilizo Java como minha principal linguagem de programação, aplicando seus conceitos em projetos acadêmicos e pessoais enquanto continuo aprofundando meus conhecimentos no ecossistema Java como por exemplo a API javaFX.
            </p>
        
        `
    },


    backend: {
        title: "Backend",
        text: `
            <p>
                Tenho interesse em atuar no desenvolvimento backend, participando da construção de aplicações robustas, escaláveis e de fácil manutenção. 
            </p>

            <p>
                Atualmente estudo e aplico conceitos de Programação Orientada a Objetos, estruturas de dados, algoritmos, Collections Framework e boas práticas de desenvolvimento utilizando Java.
            </p>

            <p>
               Busco aprofundar meus conhecimentos em tecnologias do ecossistema Java e arquitetura de software, com o objetivo de contribuir para o desenvolvimento de soluções eficientes, alinhadas às necessidades do negócio e capazes de proporcionar uma boa experiência aos usuários.
            </p>
        `
    },


    mysql: {
        title: "MySQL",
        text: `
            <p>
                Possuo conhecimentos em MySQL adquiridos por meio de estudos e projetos práticos. Tenho familiaridade com a criação e manipulação de bancos de dados relacionais, elaboração de consultas SQL, filtragem e ordenação de dados, além de operações de inserção, atualização e remoção de registros.
            </p>

            <p>
               Atualmente continuo aprofundando meus conhecimentos em modelagem de dados e no uso de bancos relacionais para o desenvolvimento de aplicações, buscando compreender cada vez mais a integração entre sistemas e persistência de dados.
            </p>
        `
    },


    git: {
        title: "Git e GitHub",
        text: `

            <p>
                Possuo conhecimentos em Git e GitHub para versionamento e gerenciamento de código-fonte, utilizando recursos como criação de repositórios, commits, branches, merges e sincronização de projetos.
            </p>

            <p>
                Utilizo essas ferramentas para organizar o desenvolvimento dos meus projetos, acompanhar a evolução do código e aplicar boas práticas de controle de versão, garantindo maior segurança e organização durante o processo de desenvolvimento.
            </p>


        `
    },


    desenvolvimentoWeb: {
        title: "Desenvolvimento Web",
        text: `
            <p>
               Possuo conhecimentos em HTML, CSS e JavaScript, aplicados no desenvolvimento de páginas web e interfaces para projetos pessoais. Tenho familiaridade com estruturação de conteúdo, estilização de layouts, responsividade e implementação de interações utilizando JavaScript.
            </p>

            <p>
                Atualmente continuo aprimorando meus conhecimentos em desenvolvimento frontend por meio de estudos e projetos práticos, buscando criar interfaces mais modernas, acessíveis e intuitivas.
            </p>
        `
    },


    algEstruturaDados: {
        title: "Algoritmos e Estrutura de Dados",
        text: `

            <p>
                Possuo conhecimentos em estruturas de dados e algoritmos, incluindo listas, pilhas, filas, árvores, técnicas de busca e métodos de ordenação. Compreendo a importância da escolha adequada das estruturas para otimizar desempenho, organização e manutenção de aplicações.
            </p>

            <p>
               Aplico esses conceitos em estudos e projetos práticos, buscando desenvolver soluções mais eficientes e alinhadas às necessidades de cada problema.
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



 