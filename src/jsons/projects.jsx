// Project images
import MoreLife  from "./../assets/images/MoreLife.png"
import MazeCave  from "./../assets/images/MazeCave.png"
import Eclusa    from "./../assets/images/Eclusa.png"
import Braco     from "./../assets/images/BracoRobo.png"
import Merconomy from "./../assets/images/Merconomy.png"

// Icon title
import GitHubLogo from  "./../assets/svg/githubLogo.svg"
import Play       from  "./../assets/svg/play.svg"

// Assets from projects
import MensaoHonrosa from "./../pdfs/Menção Honrosa Engenharia Computação.pdf"
import RevistaCREA   from "./../pdfs/Revista CREA MoreLife.pdf"
import MazeCaveCobric from "./../assets/images/MazeCaveCobric.jpeg"

export default [
    {
        "id": 0,
        "link": "https://engenharia.unisanta.br/computacao/noticias/morelife-premiado-em-dois-congressos-e-citado-na-revista-do-crea-sp-projeto-do-curso-de-engenharia-de-computacao-visa-prevenir-problemas-cardiacos/", 
        "linkImage": GitHubLogo,
        "image": MoreLife, 
        "title": "MoreLife", 
        "description": <p>O <a href="https://github.com/And5reas/MoreLifeProjectt" target="_blank">MoreLife</a> foi criado com o objetivo de monitorar os batimentos cardíacos de pessoas que jogam videogames competitivamente por muito tempo. Também, e não menos importante, para pessoas que têm problemas cardíacos e gostam de jogar. Essa ideia surgiu quando um amigo meu, chamado Henrique Sartori, parou de jogar por conta de ter sofrido uma arritmia cardíaca depois de uma jogatina de League of Legends.<br /> O programa foi desenvolvido em Python, utilizando Kivy como linguagem de criação de interfaces gráficas. Este projeto premiou a mim e à minha equipe com o primeiro lugar e <a className="label" data="0/Mensao" >Mensão Horrosa</a> na 15ª edição do COBRIC (Congresso de Iniciação Científica), também ficamos entre os 10 melhores na 23ª edição do CONIC (Congresso Nacional de Iniciação Científica). Além disso, este projeto foi publicado na revista <a className="label" data="0/Revista">CREA-SP</a>.</p>,
        "assets": [
            {
                "id": "Mensao",
                "file": MensaoHonrosa + "#toolbar=0",
                "heigth": "",
                "width": "",
                "hidden": "none",
                "data": "0/Mensao"
            },
            {
                "id": "Revista",
                "file": RevistaCREA  + "#toolbar=0",
                "heigth": "1020px",
                "width": "790px",
                "hidden": "none",
                "data": "0/Revista"
            }]
    },
    {
        "id": 1,
        "link": "https://github.com/And5reas/Jogo-Matam-tica-3-ano",
        "linkImage": GitHubLogo,
        "image": MazeCave,
        "title": "MazeCave",
        "description": <p>Criei este jogo na faculdade, mais especificamente, no meu 2° semestre. O objetivo deste jogo é responder perguntas de matemática enquanto resolve um labirinto. A dificuldade deste videogame é responder as perguntas e terminar o labirinto dentro de um tempo limite. É bem divertido de jogar, apesar da pouca complexidade. Dito isso, este jogo foi pensado para crianças da terceira série do ensino fundamental. <br /> O MazeCave também foi apresentado na 15ª edição do <a className="label" data="1/MazeCaveCobric" >COBRIC</a>, junto do MoreLife. Além disso, tive a oportunidade de patentear este jogo por meio da própria faculdade.</p>,
        "assets": [
            {
            "id": "MazeCaveCobric",
            "file": MazeCaveCobric + "#toolbar=0",
            "heigth": "855px",
            "width": "480px",
            "hidden": "none",
            "data": "1/MazeCaveCobric"
            },
        ]
    },
    {
        "id": 2,
        "link": "https://youtu.be/ugYoCa_jXs0",
        "linkImage": Play,
        "image": Eclusa,
        "title": "Sistema de Eclusas",
        "description": <p>Maquete do funcionamento do canal do Panamá, projeto desenvolvido nas aulas de Arquitetura de Hardware, tem o intuíto de simular a elevação da água, rebaixamento da água e abertura da comporta, para a passagem do navio. O trabalho foi constituído por bombas d'água, confeccionadas do zero, impressões 3D, sensores de nível, mangueiras e um micro controlador ATmage328p, programado em Assembly</p>,
        "assets": []
    },
    {
        "id": 3,
        "link": "https://youtu.be/PxC6bvO2P40", 
        "linkImage": Play,
        "image": Braco, 
        "title": "Braço Hidráulico",
        "description": <p>Este projeto deu bastante trabalho. Trata-se de um braço hidráulico controlado por gestos. A parte física do projeto foi feita de papelão, para suportar o mecanismo, seringas que funcionam como pistões, e motores de torque para poder "pressurizar" a água e empurrar as seringas que estão nas articulações do braço, realizando os movimentos. O software utilizado no projeto para interpretar os gestos foi desenvolvido em Python, utilizando a biblioteca OpenCV.</p>,
        "assets": []
    },
    {
        "id": 4,
        "link": "https://github.com/And5reas/AppCompras", 
        "linkImage": GitHubLogo,
        "image": Merconomy, 
        "title": "Merconomy",
        "description": <p>Criei este aplicativo nas aulas de React-Native da minha faculdade. A intenção desse aplicativo (ainda em desenvolvimento) é gerenciar o custo de despesas de mercados. Também contará com uma ferramenta que lê a etiqueta do produto, pela câmera, e cadastra as informações durante as compras do usuário. Além disso, terá uma aba social para compartilhar promoções de produtos em mercados. O BackEnd está sendo feito em Python, utilizando o framework Django.</p>,
        "assets": []
    },
];