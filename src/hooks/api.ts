export default function api() {
  const projects = [
    {
      title: ["Plant Manager", "#32B768"],
      techs: ["", "", "React Native", "TypeScript", ""],
      repository: "https://github.com/ArmandoAAJ/NLW5-PlantManager",
      description:
        "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação para o gerenciamento de plantas com Expo - React Native. Fornece a possibilidade de cadastrar plantas separando por ambientes, adicionar lembretes de irrigação que utiliza o expo-notifications para emitir as notificações localmente.",
    },
    {
      title: ["ig-news", "#EBA418"],
      techs: ["", "", "", "TypeScript", "NextJS"],
      repository: "https://github.com/ArmandoAAJ/Ig.news",
      description:
        "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação Blog por assinatura com NextJS. Aplicação serverless, posts gerenciados pelo Prismic assinaturas utilizando Stripe utilizando FaunaDB para gerenciamento dos dados. Gerando um preview do post para o usuário poder analisar o conteúdo antes da assinatura.",
    },
    {
      title: ["DT Money", "#33CC95"],
      techs: ["ReactJS", "", "", "TypeScript", ""],
      repository:
        "https://github.com/ArmandoAAJ/IGNITE_REACTJS/tree/main/ChapterII/dtmoney",
      description:
        "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com Typescript para controle financeiro. Permite o usuário cadastrar entradas e saídas de um caixa, podendo assim gerar o controle do saldo e as respectivas transações.",
    },
    {
      title: ["SpaceTraveling", "#FF57B2"],
      techs: ["", "", "", "TypeScript", "NextJS"],
      repository:
        "https://github.com/ArmandoAAJ/IGNITE_REACTJS/tree/main/ignite-reactjs-criando-um-projeto-do-zero",
      description:
        "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS. A aplicação foi desenvolvida utilizando o framework NextJS aplicando os conceitos de Static Site Generation (SSG) e utilizando Prismic CMS para adição e gerenciamento do conteúdo dos posts.",
    },
    {
      title: ["DevRadar", "#7D40E7"],
      techs: ["ReactJS", "NodeJS", "", "", ""],
      repository: "https://github.com/ArmandoAAJ/SemanaOmnistack10",
      description:
        "Aplicação desenvolvida afim de avançar os conhecimentos Full-Stack durante a 10 edição da Semana OmniStack. O objetivo da aplicação é permitir que Devs se cadastrem e encontrem outros Deves próximos que trabalham com tecnologias semelhantes.",
    },
    {
      title: ["FastFeet", "#7035DF"],
      techs: ["ReactJS", "NodeJS", "React Native", "", ""],
      repository: "https://github.com/ArmandoAAJ/FastFeet",
      description:
        "Aplicação desenvolvida para a certificação do bootcamp GoStack 10.0. O objetivo da aplicação é auxiliar a transportadora FastFeet a gerenciar as entregas, possibilitar o receptor acompanhar todo o processo de entrega podendo abrir uma reclamação caso necessitar.",
    },
    {
      title: ["Gympoint", "#E44A68"],
      techs: ["ReactJS", "NodeJS", "", "", ""],
      repository: "https://github.com/ArmandoAAJ/gympoint",
      description:
        "Aplicação desenvolvida para a certificação do bootcamp GoStack 9.0. O objetivo da aplicação é auxiliar a academia Gympoint a gerenciar frequência de alunos, ter um controle sobre matrículas de cada um e fornecer auxílio para que todos tenham a melhor experiência possível.",
    },
  ];

  return projects;
}
