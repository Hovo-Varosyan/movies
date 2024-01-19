 import {  makeAutoObservable} from "mobx"
 import { v4 as uuidv4 } from 'uuid';


class Store {
    data=[
        {
          Comment: [
            {
              author: "Ivan",
              img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
              comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
            },
            {
              author: "Georgy",
              img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
              comment: "no comment  ",
            },
          ],
          trailler:'trailer.mp4',
          key: uuidv4(),
          img: "https://doramy.club/wp-content/uploads/2022/12/velikolepnye.jpg",
          name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
          year: "2023",
          raiting:"5",
          continent: "США",
          genre: ["Триллер", "Приключения", "Боевик"],
          time: "163min",
          director: "Кристофер МакКуорри",
          actors: [
            "Том Круз",
            "Хейли Этвелл",
            "Винг Реймз",
            "Саймон Пегг",
            "Ребекка Фергюсон",
            "Ванесса Кирби",
            "Эсай Моралес",
            "Пом Клементьефф",
            "Генри Черни",
            "Шей Уигэм",
          ],
          content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
          поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
          безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
          В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
          Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
          а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
          отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
          полные детективных интриг и неожиданных открытий. `,
        },
        {
          Comment: [
            {
              author: "Ivan",
              img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
              comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
            },
            {
              author: "Georgy",
              img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
              comment: "no comment  ",
            },
          ],
          trailler:'trailer2.mp4',
          key: uuidv4(),
          img: "https://doramy.top/img/poster/potomu-chto-my-vse-esche-vmeste.jpg",
          name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
          year: "2023",
          raiting:"5",
          continent: "США",
          genre: ["Триллер", "Приключения", "Боевик"],
          time: "163min",
          director: "Кристофер МакКуорри",
          actors: [
            "Том Круз",
            "Хейли Этвелл",
            "Винг Реймз",
            "Саймон Пегг",
            "Ребекка Фергюсон",
            "Ванесса Кирби",
            "Эсай Моралес",
            "Пом Клементьефф",
            "Генри Черни",
            "Шей Уигэм",
          ],
          content: `Когда Шим У Джу была маленькой девочкой, ее отец бросил семью ради близкой подруги матери.
           Долгое время дочь с ним не общалась, а после смерти отца выяснилось, 
          что его любовница продала их дом, и теперь ей вместе с сестрой и братом негде жить.`,
        },
        {
          Comment: [
            {
              author: "Ivan",
              img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
              comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
            },
            {
              author: "Georgy",
              img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
              comment: "no comment  ",
            },
          ],
          trailler:'trailer3.mp4',
          key: uuidv4(),
          img: "https://doramafox.ru/wp-content/uploads/2020/08/potomu-chto-my-vsyo.jpg",
          name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
          year: "2023",
          raiting:"5",
          continent: "США",
          genre: ["Триллер", "Приключения", "Боевик"],
          time: "163min",
          director: "Кристофер МакКуорри",
          actors: [
            "Том Круз",
            "Хейли Этвелл",
            "Винг Реймз",
            "Саймон Пегг",
            "Ребекка Фергюсон",
            "Ванесса Кирби",
            "Эсай Моралес",
            "Пом Клементьефф",
            "Генри Черни",
            "Шей Уигэм",
          ],
          content: `«Такси делюкс 2» — продолжение истории необычных таксистов, которые не просто отвозят своих клиентов по нужному адресу, 
          а принимают у них заказы на месть обидчикам. `,
        },
        {
          Comment: [
            {
              author: "Ivan",
              img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
              comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
            },
            {
              author: "Georgy",
              img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
              comment: "no comment  ",
            },
          ],
          key: uuidv4(),
          img: "https://softboxdorami.com/uploads/posts/2023-03/5195099_1680286446.webp",
          name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
          year: "2023",
          raiting:"5",
          continent: "США",
          genre: ["Триллер", "Приключения", "Боевик"],
          time: "163min",
          director: "Кристофер МакКуорри",
          actors: [
            "Том Круз",
            "Хейли Этвелл",
            "Винг Реймз",
            "Саймон Пегг",
            "Ребекка Фергюсон",
            "Ванесса Кирби",
            "Эсай Моралес",
            "Пом Клементьефф",
            "Генри Черни",
            "Шей Уигэм",
          ],
          content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
          поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
          безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
          В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
          Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
          а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
          отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
          полные детективных интриг и неожиданных открытий. `,
        },
        {
          Comment: [
            {
              author: "Ivan",
              img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
              comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
            },
            {
              author: "Georgy",
              img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
              comment: "no comment  ",
            },
          ],
          key: uuidv4(),
          img: "https://likefilmdb.ru/static/images/film/5/thumb/10679.jpg",
          name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
          raiting:"5",
          year: "2023",
          continent: "США",
          genre: ["Триллер", "Приключения", "Боевик"],
          time: "163min",
          director: "Кристофер МакКуорри",
          actors: [
            "Том Круз",
            "Хейли Этвелл",
            "Винг Реймз",
            "Саймон Пегг",
            "Ребекка Фергюсон",
            "Ванесса Кирби",
            "Эсай Моралес",
            "Пом Клементьефф",
            "Генри Черни",
            "Шей Уигэм",
          ],
          content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
          поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
          безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
          В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
          Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
          а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
          отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
          полные детективных интриг и неожиданных открытий. `,
        },{
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://green-teatv.com/uploads/posts/2022-05/1652082351_1cedc75ae6863f2c67a238bc2ce866a7.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://dorama.one/uploads/posts/2020-10/1601983385_zolushka-i-chetyre-rycarya.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://ponylike.ru/wp-content/uploads/2022/05/19-doramy-s-neveroyatnoj-khimiej-mezhdu-geroyami.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://asiapoisk.com/uploads/cache/doramas2/15557818655cbb58e9d5ab90.18390578_B0Oebf-465x600.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramakino.online/uploads/posts/2021-04/4xXQ1_4c.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },{
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramy.club/wp-content/uploads/2023/08/bespoleznaya-lozh.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramakino.online/uploads/posts/2021-04/ZPz0L_4c.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramy.info/uploads/posts/2022-02/62062bb264dbe_1644571570.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramy.info/uploads/cache/ura-haos-v-obschage-6218c4b5.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          },
          {
            Comment: [
              {
                author: "Ivan",
                img: "https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` ,
              },
              {
                author: "Georgy",
                img: "https://parade.com/.image/t_share/MTkwNTgxMTkyMTA1ODYyMjY5/bill-withers-ftr.jpg",
                comment: "no comment  ",
              },
            ],
            key: uuidv4(),
            img: "https://doramy.tv/uploads/posts/2021-12/1639138461_territoriya-lyubvi.jpg",
            name: "Миссия: невыполнима. Смертельная расплата, часть 1 (2023)",
            year: "2023",
            continent: "США",
            genre: ["Триллер", "Приключения", "Боевик"],
            time: "163min",
            director: "Кристофер МакКуорри",
            actors: [
              "Том Круз",
              "Хейли Этвелл",
              "Винг Реймз",
              "Саймон Пегг",
              "Ребекка Фергюсон",
              "Ванесса Кирби",
              "Эсай Моралес",
              "Пом Клементьефф",
              "Генри Черни",
              "Шей Уигэм",
            ],
            content: `Человечество снова сталкивается с угрозой огромного масштаба. Всемогущий злодей стремится 
            поработить все существующие государства и превратить жизни миллионов людей в кошмар. Справиться с этим
            безумцем способен только Итан – бесстрашный агент, посвятивший борьбе с преступным миром лучшие годы жизни. 
            В ходе расследования герой осознает, что он ведет охоту на человека, который каким-то образом связан с его прошлым.
            Они явно встречались, поскольку злодей оставляет на местах преступлений жутко знакомый почерк. На карту поставлено будущее всего мира,
            а потому Итану нужно забыть об эмоциях и вновь перевоплотиться в идеального шпиона. Кроме того, он должен спасти дорогих людей,
            отчаянно нуждающихся в его помощи. Впереди опытнейшего защитника человечества ждут безумные дни, 
            полные детективных интриг и неожиданных открытий. `,
          }
      ]
    constructor (){
        makeAutoObservable(this)
        
    }
}

const storeData=new Store()
export default storeData