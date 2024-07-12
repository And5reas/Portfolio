import { useRef } from "react";
import PortfolioItem from "../../components/PortifolioItem/PortfolioItem.jsx";
import DevicesAnimated from "../../components/animations/LandingPageAnimation/Devices.jsx";
import style from "./LadingPage.module.css";
import projects from "../../jsons/projects.jsx"

function LadingPage() {
    const constraint = useRef(null)

    const sectionContent1 = {
        title: "Fullstack Developer & Computer Engineer",
        subTitle: "Portfólio de um Estudante de engenharia da computação"
    }

    const sectionContent2 = {
        title: "Olá meu nome é Andreas William Porcel, prazer em te ter por aqui 😊",
        description: "Sou estudante de Engenharia da Computação na Universidade Santa Cecília, atualmente estou no 6º semestre. Este site foi criado com o intuito de divulgar meu trabalho, como uma espécie de portfólio. Amo o que faço e me entrego de corpo e alma a cada projeto. Espero que goste do meu trabalho!",
        titleTools: "Aqui estão algumas das muitas ferramentas que utilizo no meu dia a dia",
        tools: {
            python: "Utilizo Python para diversas tarefas, pois sou particularmente apaixonado por esta linguagem. Ela é fácil de criar projetos e possui um grande suporte da comunidade. Já desenvolvi projetos com inteligência artificial utilizando Python, mas principalmente a utilizo para tratamento de dados.",
            sql: "SQL é essencial para o meu campo de trabalho e é onde pretendo construir minha carreira. Tenho bastante familiaridade com essa ferramenta e, como você verá no meu portfólio, incluo um banco de dados SQL em quase todos os meus softwares.",
            javascript: "JavaScript é uma linguagem que, na minha opinião, se assemelha bastante ao Python. Gosto muito da biblioteca React que o JS oferece. Para mim, JavaScript, junto com HTML e CSS, formam o trio perfeito para criação de interfaces gráficas (GUI, Graphical User Interface)."
        }
    }

    return (
        <div ref={constraint}>
            <div className={style.landingContainer1}>
                <div className={style.header}>
                    <img src="./../../assets/images/websiteIcon.png" alt="Website icon" />
                </div>
                <div className={style.mainTitleContainer} >
                    <h1 className={style.mainTitle}>{sectionContent1.title}</h1>
                    <h2 className={style.mainSubTitle}>{sectionContent1.subTitle}</h2>
                </div>
                <img src="./../../assets/svg/profilePicture.svg" alt="Profile picture" />
                <DevicesAnimated />
            </div>
            <div className={style.landingContainer2}>
                <div className={style.aboutContainer}>
                    <h1 className={style.aboutTitle}>{sectionContent2.title}</h1>
                    <h2 className={style.aboutDescription}>{sectionContent2.description}</h2>
                    <div className={style.socialMedia}>
                        <a href="https://github.com/and5reas" target="_blanck" >
                            <img className={style.socialMediaImage} src="./../../assets/images/githubLogo.png" alt="My Github" />
                        </a>
                        <a href="https://www.youtube.com/@andreaswilliamporcel2042" target="_blanck" >
                            <img className={style.socialMediaImage} src="./../../assets/images/youtubeLogo.png" alt="My Youtube" />
                        </a>
                        {/* <a href="https://www.instagram.com/and5reas_md/" target="_blanck" >
                            <img className={style.socialMediaImage} src="./../../assets/images/instagramLogo.png" alt="My Instagram" />
                        </a> */}
                    </div>
                </div>
                <h3 className={style.aboutTitleTools}>{sectionContent2.titleTools}</h3>
                <div className={style.toolsContainer}>
                    <div className={style.toolContainer}>
                        <img className={style.iconTool} src="./../../assets/svg/pythonLogo.svg" alt="Icon" />
                        <p className={style.descriptionTool}>{sectionContent2.tools.python}</p>
                    </div>
                    <div className={style.toolContainer}>
                        <img className={style.iconTool} src="./../../assets/svg/sqlLogo.svg" alt="Icon" />
                        <p className={style.descriptionTool}>{sectionContent2.tools.sql}</p>
                    </div>
                    <div className={style.toolContainer}>
                        <img className={style.iconTool} src="./../../assets/svg/javascriptLogo.svg" alt="Icon" />
                        <p className={style.descriptionTool}>{sectionContent2.tools.javascript}</p>
                    </div>
                </div>
            </div>
            <div className={style.landingContainer3}>
                <div className={style.portfoliosContainer}>
                    <PortfolioItem items={projects} constraint={constraint}/>
                </div>
            </div>
        </div>
    );
};

export default LadingPage;