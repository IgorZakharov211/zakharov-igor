import howToLearnImg from '../images/projects/howToLearn.jpg';
import russianTravelImg from '../images/projects/russianTravel.jpg';
import mestoImg from '../images/projects/mesto.jpg';
import moviesImg from '../images/projects/movies.jpg';
import hellyFlyImg from '../images/projects/hellyFly.jpg';
import creationImg from '../images/projects/creation.jpg';

const notesList = [
  {
    index: 1, 
    subtitle: "Позволила по новому взглянуть на проблемы оптимального выбора алгоритмов и оценкой их сложности под конкретную задачу."
  },
  {
    index: 2, 
    subtitle: "Возвращаюсь к ней, когда сталкиваюсь с непониманием в тех или иных областях."
  },
  {
    index: 3,
    subtitle: "Книга очень объемная, невозможно проглотить ее быстро, изучаю постепенно."
  }
];

const otherList = [
  {
    index: 1,
    name: "React",
    link: "https://ru.reactjs.org/"
  },
  {
    index: 2, 
    name: "MDN Web Docs",
    link: "https://developer.mozilla.org/"
  },
  {
    index: 3,
    name: "Stack Overflow",
    link: "https://stackoverflow.com/"
  },
  {
    index: 4,
    name: "Дока",
    link: "https://doka.guide/"
  }
]

const youTubeList = [
  {
    index: 1, 
    name: "Kevin Powell",
    link: "https://www.youtube.com/kepowob"
  },
  {
    index: 2,
    name: "Вадим Макеев",
    link: "https://www.youtube.com/c/pepelsbey"
  },
  {
    index: 3,
    name: "Сергей Немчинский",
    link: "https://www.youtube.com/c/SergeyNemchinskiy"
  },
  {
    index: 4,
    name: "Подкаст Podlodka",
    link: "https://www.youtube.com/c/PodlodkaShow"
  },
  {
    index: 5,
    name: "Devaslife",
    link: "https://www.youtube.com/c/devaslife"
  },
  {
    index: 6,
    name: "Веб-стандарты",
    link: "https://www.youtube.com/c/Web-standardsRu"
  }
];

const projectsList = [
  {
    index: 1,
    name: "Научиться учиться",
    description: "Проект представляет собой типовой одностраничный сайт, на котором рассказывается о современных и эффективных подходах к обучению.",
    techs: [
      {
        index: 1,
        name: "БЭМ"
      }
    ],
    img: howToLearnImg,
    languages: [
      {
        index: 1,
        name: "HTML",
        percent: 55.5
      },
      {
        index: 2,
        name: "CSS",
        percent: 44.5
      }
    ],
    link: "https://igorzakharov211.github.io/how-to-learn/",
    gitHub: "https://github.com/IgorZakharov211/how-to-learn"
  },
  {
    index: 2,
    name: "Путешествие по России",
    description: "Проект представляет собой адаптивный одностраничный сайт, на котором рассказывается о путешествиях по России.",
    techs: [
      {
        index: 1,
        name: "БЭМ"
      },
      {
        index: 2,
        name: "Adaptive"
      }
    ],
    img: russianTravelImg,
    languages: [
      {
        index: 1,
        name: "CSS",
        percent: 56.4
      },
      {
        index: 2,
        name: "HTML",
        percent: 43.6
      }
    ],
    link: "https://igorzakharov211.github.io/russian-travel/",
    gitHub: "https://github.com/IgorZakharov211/russian-travel"
  },
  {
    index: 3,
    name: "Проект Mesto",
    description: "Одностраничный сайт, с собственным API, на котором находятся фотографии различных мест с счетчиками лайков. ",
    techs: [
      {
        index: 1,
        name: "Node.js"
      },
      {
        index: 2,
        name: "Express.js"
      },
      {
        index: 3,
        name: "mongoDB"
      },
      {
        index: 4,
        name: "ESLint"
      },
      {
        index: 5,
        name: "React"
      },
      {
        index: 6,
        name: "БЭМ"
      },
      {
        index: 7,
        name: "Adaptive"
      }
    ],
    img: mestoImg,
    languages: [
      {
        index: 1,
        name: "JavaScript",
        percent: 65.5
      },
      {
        index: 2,
        name: "CSS",
        percent: 32.1
      },
      {
        index: 3,
        name: "HTML",
        percent: 2.4
      }
    ],
    link: "https://mesto.zakharovigor.ru",
    gitHub: "https://github.com/IgorZakharov211/react-mesto-api-full"
  },
  {
    index: 4,
    name: "(Api) Проекта Movies explorer",
    description: "Серверная часть проекта Movies-explorer, с регистрацией и сохраненными фильмами пользователей.",
    techs: [
      {
        index: 1,
        name: "Node.js"
      },
      {
        index: 2,
        name: "Express.js"
      },
      {
        index: 3,
        name: "mongoDB"
      },
      {
        index: 4,
        name: "ESLint"
      }
    ],
    img: moviesImg,
    languages: [
      {
        index: 1,
        name: "JavaScript",
        percent: 100
      }
    ],
    link: "https://movies.zakharovigor.ru",
    gitHub: "https://github.com/IgorZakharov211/movies-explorer-api"
  },
  {
    index: 5,
    name: "Проект Movies explorer",
    description: "Проект представляет собой сайт на котором представлена основная информация об обучении, а также сервис movies-explorer на котором можно найти нужны фильм и сохранить его к себе. На сайте присутствует регистрация, с возможностью редактирования информации о себе.",
    techs: [
      {
        index: 1,
        name: "React"
      },
      {
        index: 2,
        name: "БЭМ"
      },
      {
        index: 3,
        name: "Adaptive"
      }
    ],
    img: moviesImg,
    languages: [
      {
        index: 1,
        name: "JavaScript",
        percent: 61.3
      },
      {
        index: 2,
        name: "CSS",
        percent: 37.0
      },
      {
        index: 3,
        name: "HTML",
        percent: 1.7
      }
    ],
    link: "https://movies.zakharovigor.ru",
    gitHub: "https://github.com/IgorZakharov211/movies-explorer-frontend"
  }
];

const petProjectsList = [
  {
    index: 1,
    name: "Проект HellyFly",
    description: "Одностраничный сайт о фотосессии на вертолете, с примерами фотографий, контактной информацией и отзывами.",
    techs: [
      {
        index: 1,
        name: "React"
      },
      {
        index: 2,
        name: "БЭМ"
      },
      {
        index: 3,
        name: "Adaptive"
      }
    ],
    img: hellyFlyImg,
    languages: [
      {
        index: 1,
        name: "CSS",
        percent: 50.3
      },
      {
        index: 2,
        name: "JavaScript",
        percent: 45.7
      },
      {
        index: 3,
        name: "HTML",
        percent: 4.0
      }
    ],
    link: "https://helyfly.zakharovigor.ru",
    gitHub: "https://github.com/IgorZakharov211/helyfly-react"
  },
  {
    index: 2,
    name: "Свадебное агенство 'Создание'",
    description: "Сайт - лендинг для свадебного агентства 'Создание', содержащая информацию об основных этапах подготовки.",
    techs: [
      {
        index: 1,
        name: "React"
      },
      {
        index: 2,
        name: "БЭМ"
      },
      {
        index: 3,
        name: "Adaptive"
      }
    ],
    img: creationImg,
    languages: [
      {
        index: 1, 
        name: "SCSS",
        percent: 54.0
      },
      {
        index: 2, 
        name: "JavaScript",
        percent: 41.6
      },
      {
        index: 3,
        name: "HTML",
        percent: 4.4
      }
    ],
    link: "https://igorzakharov211.github.io/creation-landing",
    gitHub: "https://github.com/IgorZakharov211/creation-landing"
  }
];

export { notesList, otherList, youTubeList, projectsList, petProjectsList };