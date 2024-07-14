import MoreLife  from "./../assets/images/MoreLife.png"
import MazeCave  from "./../assets/images/MazeCave.png"
import Eclusa    from "./../assets/images/Eclusa.png"
import Braco     from "./../assets/images/BracoRobo.png"
import Merconomy from "./../assets/images/Merconomy.png"

import GitHubLogo from  "./../assets/svg/githubLogo.svg"
import Play from        "./../assets/svg/play.svg"

import MensaoHonrosa from "./../pdfs/Menção Honrosa Engenharia Computação.pdf"
import RevistaCREA from   "./../pdfs/Revista CREA MoreLife.pdf"

export default [
    {
        "id": 0,
        "link": "https://github.com/And5reas/MoreLifeProjectt", 
        "linkImage": GitHubLogo,
        "image": MoreLife, 
        "title": "MoreLife", 
        "description": <p>Este projeto foi criado com o objeto de monitorar os batimentos cardíacos de pessoas que jogam, competitivamente video games, por muito tempo. Também, e não menos importante, para pessoas que tem problemas cardíacos e gostam de jogar. O programa foi desenvolvido em Python, utilizando Kivy como linguagem de criação de interfaces gráficas. Este projeto preimou a mim e a minha equipa com primeiro lugar, e <a className="label" data="0/Mensao" >Mensão Horrosa</a>, na 15° editação do COBRIC (Congresso de Iniciação Científica), e ficamos entre os 10 melhores na 23° edição do CONIC (Congresso Nacional de Iniciação Científica). Além disso, este projeto foi públicado na revista <a className="label" data="0/Revista">CREA-SP</a>.</p>,
        "pdfs": [{
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
        "description": <p>Criei este jogo na faculdade, mais especificamente, no meu 2° semestre. O objetivo deste jogo é responder perguntas de matemática enquanto resolve um labirinto. Tem a dificuldade de responder as perguntas e terminar o labirinto dentro de um tempo, é bem divertido de jogar, apesar da pouca complexidade, dito isso, este jogo foi pensado para crianças da terceira série do ensino fundamental.</p>,
        "pdfs": []
    },
    {
        "id": 2,
        "link": "https://youtu.be/ugYoCa_jXs0",
        "linkImage": Play,
        "image": Eclusa,
        "title": "Sistema de Eclusas",
        "description": <p>Maquete do funcionamento do canal do Panamá, projeto desenvolvido nas aulas de Arquitetura de Hardware, tem o intuíto de simular a elevação da água, rebaixamento da água e abertura da comporta, para a passagem do navio. O trabalho foi constituído por bombas d'água, confeccionadas do zero, impressões 3D, sensores de nível, mangueiras e um micro controlador ATmage328p, programado em Assembly</p>,
        "pdfs": []
    },
    {
        "id": 3,
        "link": "https://youtu.be/PxC6bvO2P40", 
        "linkImage": Play,
        "image": Braco, 
        "title": "Braço Hidráulico",
        "description": <p>Este projeto deu bastante trabalho, se trata de um braço hidráulico controlado por gestos. A parte física do projeto foi feita de papelão, para suporta o mecanismo, seringas, que funcionam como pistões, e motores de torque para poder "pressurizar" a água e empurrar as seringas que estão nas articulações do braço, realizando os movimentos. O software utilizado no projeto para poder interpretar os gestos foi desenvolvido em Python, utilizando a biblioteca OpenCV.</p>,
        "pdfs": []
    },
    {
        "id": 4,
        "link": "https://github.com/And5reas/AppCompras", 
        "linkImage": GitHubLogo,
        "image": Merconomy, 
        "title": "Merconomy",
        "description": <p>Criei este aplicativo nas aulas de React-Native da minha faculdade. A intenção desse aplicativo (ainda em desenvolvimento) é gerenciar o custo de dispesas de mercados, também irá contar com uma ferramenta que lê a etiqueta do produto, pela câmera, e cadastra as informações durante as compras do usuário. Além disso, terá uma aba social para compartilhar promoções de produtos em mercados. O BackEnd está sendo feito em python, utilizando a FrameWork Django.</p>,
        "pdfs": []
    },
];