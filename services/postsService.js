
var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'React',
      image: 'React.png',
      description: 'O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário',
      body: 'O React é mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas. De acordo com o serviço de análise de JavaScript Libscore, o React está sendo usado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. O React, sozinho, é destinado principalmente ao desenvolver interfaces de páginas web.',
    },
    {
      id: 2,
      title: 'Java Script',
      image: 'js.png',
      description: 'Java Script (JS) é uma linguagem de programação interpretada de alto nível, caracterizada também, como dinâmica, fracamente tipificada, prototype-based e multi-paradigma.',
      body: 'Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.',
    },
    {
      id: 3,
      title: 'Vue',
      image: 'vue.png',
      description: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
      body: 'O Vue.js conta com uma arquitetura que pode ser adotada de forma incremental, e que foca na renderização declarativa e na composição de componentes. Funcionalidades avançadas necessárias para aplicações complexas (como encaminhamento, gestão de estados e automação de compilação) são oferecidas por meio de bibliotecas e pacotes de suporte mantidos oficialmente, sendo o Nuxt.js como uma das soluções mais populares.'
    },
    {
      id: 4,
      title: 'Angular',
      image: 'angular.png',
      description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.',
      body: ' Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu. Uma das diferenças é que o Angular não tem um conceito de "escopo" ou controladores, em vez disso, ele usa uma hierarquia de componentes como o seu principal conceito arquitetônico.'
    },
    {
      id: 5,
      title: 'Redux',
      image: 'redux.png',
      description: 'Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para construir interfaces de usuário. Semelhante à arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark.',
      body: 'O Redux é uma pequena biblioteca com uma API simples e limitada, projetada para ser um contêiner previsível para o estado do aplicativo. Opera de maneira semelhante a uma função redutora , um conceito de programação funcional .'
    }
  ];

  return posts;
}

module.exports = {
  getPosts: getPosts   // controle de acesso a dados em outras partes do sistema.
}