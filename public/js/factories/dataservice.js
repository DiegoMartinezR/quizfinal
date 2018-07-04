/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "¿Cuantas copas mundiales tiene la seleccion de Alemania",
            possibilities: [
                {
                    answer: "3"
                },
                {
                    answer: "4"
                },
                {
                    answer: "5"
                },
                {
                    answer: "6"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿Quien tiene más copas en el mundo?",
            possibilities: [
                {
                    answer: "España"
                },
                {
                    answer: "Alemania"
                },
                {
                    answer: "Brasil"
                },
                {
                    answer: "Rusia"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "¿Cual es la mascota del mundial rusia 2018?",
            possibilities: [
                {
                    answer: "img/mascota2.png"
                },
                {
                    answer: "img/mascota3.png"
                },
                {
                    answer: "img/mascota1.png"
                },
                {
                    answer: "img/mascota4.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "¿Cual es el escudo de España?",
            possibilities: [
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Portugal.svg/250px-Coat_of_arms_of_Portugal.svg.png"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coat_of_Arms_of_Spain_%28corrections_of_heraldist_requests%29.svg/160px-Coat_of_Arms_of_Spain_%28corrections_of_heraldist_requests%29.svg.png"
                },
                {
                    answer: "https://i2.wp.com/img3.wikia.nocookie.net/__cb20121108213507/worlduniverse/images/d/d5/Coat_of_Arms_of_Russian_Federation.png"
                },
                {
                    answer: "https://www.plusesmas.com/pictures/escudos/53000/53520-escudo-seleccion-de-brasil.jpg.pagespeed.ce.nESzsW8vl2.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿Quien ganará el mundia Rusia 2018?",
            possibilities: [
                {
                    answer: "Brasil"
                },
                {
                    answer: "Perú"
                },
                {
                    answer: "La curacao"
                },
                {
                    answer: "Alemania"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common turtle in US waters?",
            possibilities: [
                {
                    answer: "Loggerhead turtle"
                },
                {
                    answer: "Leatherback turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Alligator Snapping Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the largest sea turtle on earth?",
            possibilities: [
                {
                    answer: "Eastern Snake Necked Turtle"
                },
                {
                    answer: "Olive Ridley Sea Turtle"
                },
                {
                    answer: "Kemp's Ridley Sea Turtle'"
                },
                {
                    answer: "Leatherback"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Olive Ridley Turtle?",
            possibilities: [
                {
                    answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                },
                {
                    answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How Heavy can a leatherback turtle be?",
            possibilities: [
                {
                    answer: "900kg"
                },
                {
                    answer: "40kg"
                },
                {
                    answer: "110kg"
                },
                {
                    answer: "300kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these turtles are herbivores?",
            possibilities: [
                {
                    answer: "Loggerhead Turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Leatherback Turtle"
                },
                {
                    answer: "Green Turtle"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            nombre: "Rusia",
            image_url: "http://www.trbimg.com/img-59dd3962/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-017/750/750x422",
            Confederacion: "UEFA",
            grupo: "Grupo A",
            ranking: "Puesto 70",
            DT: "Stanislav Cherchésov",
            description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            nombre: "Arabia Saudita",
            image_url: "http://www.trbimg.com/img-59dd20e2/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-003/750/750x422",
            Confederacion: "AFC",
            grupo: "Grupo A",
            ranking: "Puesto 67",
            DT: "Juan Antonio Pizzi",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            nombre: "Egipto",
            image_url: "http://www.trbimg.com/img-59dd24db/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-007/750/750x422",
            Confederacion: "CAF",
            grupo: "Grupo A",
            ranking: "Puesto 45",
            DT: "Héctor Cúper",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            nombre: "Uruguay",
            image_url:"https://www.lapelotona.com/wp-content/uploads/2017/10/uruguay-seleccion.jpg",
            Confederacion: "CONMEBOL",
            grupo: "Grupo A",
            ranking: "Puesto 14",
            DT: "Óscar Washington Tabárez",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            nombre: "Maruecos",
            image_url: "http://www.trbimg.com/img-5a09d957/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-030/750/750x422",
            Confederacion: "CAF",
            grupo: "Grupo B",
            ranking: "Puesto 41",
            DT: "Hervé Renard",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            nombre: "Irán",
            image_url: "https://www.sintesis.mx/wp-content/uploads/2018/05/13160761_xl.jpg",
            Confederacion: "AFC",
            grupo: "Grupo B",
            ranking: "Puesto 37",
            DT: "Carlos Queiroz ",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            nombre: "Portugal",
            image_url: "http://www.trbimg.com/img-59dd3fe5/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-020/750/750x422",
            Confederacion: "UEFA",
            grupo: "Grupo B",
            ranking: "Puesto 4",
            DT: "Fernando Santos",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            nombre: "España",
            image_url: "http://www.trbimg.com/img-59dd24dc/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-008/750/750x422",
            Confederacion: "UEFA",
            grupo: "Grupo B",
            ranking: "Puesto 10",
            DT: "Fernando Hierro",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        },
        {
           nombre:"Francia",
           image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/francia_31.jpg",
           Confederacion:"UEFA",
           grupo: "Grupo C",
           lifespan:"25 years",
           DT:"Didier Deschamps"
        },
        {
            nombre:"Australia",
            image_url:"http://www.trbimg.com/img-5a0c7eda/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-032/750/750x422",
            Confederacion:"AFC",
            grupo: "Grupo C",
            lifespan:"dasnd",
            DT:"Bert van Marwijk"
        },
        {
            nombre:"Perú",
            image_url:"http://www.trbimg.com/img-5a0dab3a/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-034/750/750x422",
            Confederacion:"CONMEBOL",
            grupo: "Grupo C",
            lifespan:"dasjkg",
            DT:"Ricardo Gareca"
        },
        {
            nombre:"Dinamarca",
            image_url:"http://www.trbimg.com/img-5a0b77ca/turbine/hoyla-fgal-invitados-mundial-rusia-2018-futbol-033/750/750x422",
            Confederacion:"Åge Hareide",
            grupo: "Grupo C",
            lifespan:"dasjkldbh",
            DT:"Åge Hareide"
        },
        {
            nombre:"Argentina",
            image_url:"https://bolavip.com/__export/1519415012367/sites/bolavip/img/2018/02/23/0004830398_crop1519414814481.jpg_1693159006.jpg",
            Confederacion:"CONMEBOL",
            grupo: "Grupo D",
            lifespan:"dasjkdbg",
            DT:"Sampaoli"
        },
        {
            nombre:"Islandia",
            image_url:"https://nst.sky.it/immagini/sport/calcio_estero/2016/06/04/Convocati_Islanda/original/00_islanda_getty.jpg",
            grupo:"Grupo D"
        },
        {
            nombre:"Croacia",
            image_url:"https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/06/10/5b1d4f374f783.jpeg",
            grupo: "Grupo D"
        },
        {
            nombre:"Nigeria",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/nigeria_5.jpg",
            grupo: "Grupo D"
        },
        {
            nombre:"Serbia",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/serbia_3.jpg",
            grupo: "Grupo E"     
        },
        {
            nombre:"Brasil",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/brasil_55.jpg",
            grupo: "Grupo E"
        },
        {
            nombre:"Costa rica",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/costa_rica_4.jpg",
            grupo: "Grupo E"
        },
        {
            nombre:"Suiza",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/suiza_12.jpg",
            grupo: "Grupo E"
        },
        {
            nombre:"Alemania",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/alemania_55.jpg",
            Confederacion:"UEFA",
            grupo: "Grupo F", 
            ranking:"Puesto 1",
            DT:"Joachim Löw"      
        },
        {
            nombre:"Mexico",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/mexico_50.jpg",
            Confederacion:"CONCACAF",
            grupo: "Grupo F",
            ranking:"15",
            DT:"Juan Carlos Osorio"

        },
        {
            nombre:"Suecia",
            image_url:"https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/suecia_5.jpg",
            Confederacion:"UEFA",
            grupo: "Grupo F",
            ranking:"Puesto 24",
            DT:" Erik Hamrén"
        },
        {
            nombre:"Korea del Sur",
            image_url:"https://prod.media.libero.pe/660x378/libero/imagen/2018/05/14/noticia-korea-del-sur-lista-mundial.jpg",
            Confederacion:"AFC",
            grupo: "Grupo F",
            ranking:"Puesto 57",
            DT:" Shin Tae-yong"
        }
    ];

})();
