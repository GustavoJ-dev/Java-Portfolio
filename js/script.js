// Smooth scrolling for navigation links
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    })
    nav.classList.remove('active');
});

/**menu mobile */
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// dinamicamente adiciona o conteudo das habilidades
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

const cards = document.querySelectorAll('.skill-card');
const title = document.getElementById('skill-title');
const text = document.getElementById('skill-text');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.dataset.skill;

        if (!skillData[skill]) return;

        title.textContent = skillData[skill].title;
        text.innerHTML = skillData[skill].text;
    });
});
