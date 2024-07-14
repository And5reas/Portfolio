import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import style from "./PortfolioItem.module.css";
import RenderPdfs from "../RenderPdfs/RenderPdfs.jsx";

function PortfolioItem({constraint, items=[]}) {

    const [moveContainer, setMoveContainer] = useState(false)
    const [projects, setProjects] = useState(items)

    useEffect(() => {
        const labels = document.getElementsByClassName("label")
        const close  = document.getElementsByClassName("close")
        
        const updateHidden = e => {
            let [projectId, pdfId] = e.target.getAttribute("data").split("/")
            const updatedProjects = projects.map(project => {
                if (project.id == projectId){
                    const updatedPdfs = project.pdfs.map(pdf => {
                        if (pdf.id == pdfId) {
                            return {
                                ...pdf,
                                hidden: pdf.hidden === "none" ? "" : "none",
                            }
                        }
                        return pdf;
                    })
                    return {
                        ...project,
                        pdfs: updatedPdfs
                    }
                }
                return project
            })
            setProjects(updatedProjects)
        }

        for (let i = 0 ; i < close.length ; i++){
            close[i].addEventListener("click", updateHidden)
        }

        for (let i = 0 ; i < labels.length ; i++){
            labels[i].addEventListener("click", updateHidden)
        }

        return () => {
            for (let i = 0 ; i < labels.length ; i++){
                labels[i].removeEventListener("click", updateHidden)
            }
            for (let i = 0 ; i < close.length ; i++){
                close[i].removeEventListener("click", updateHidden)
            }
        }
    }, [projects])

    const delays = []
    const randCalc = () => Math.floor(Math.random() * 25)

    const itemList = projects.map(project => {

        let randTime = randCalc()

        while (randTime in delays || randTime < 5) {
            randTime = randCalc()
        }
        
        delays.push(randTime)

        return (
            <motion.div
                drag={moveContainer}
                dragConstraints={constraint}
                key={project.id}
                className={style.container}
            >
                <motion.div 
                    className={style.move}
                    animate={{
                        y: [0, 10, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: randTime, type: "tween"
                    }}
                >
                    <div className={style.bright}>
                        <motion.div 
                            onHoverStart={() => setMoveContainer(true)} 
                            onHoverEnd={() => setMoveContainer(false)} 
                            whileTap={{ cursor: "grabbing" }} 
                            whileHover={{backgroundColor: "#3b4496"}}
                            className={style.header} 
                        >
                            <div className={style.circle} style={{backgroundColor: "#50FA7B"}} />
                            <div className={style.circle} style={{backgroundColor: "#F1FA8C"}} />
                            <div className={style.circle} style={{backgroundColor: "#FF5555"}} />
                        </motion.div>
                        
                        <div className={style.cropImage}>
                            <a className={style.link} href={project.link} target="_blanck" >
                                <img src={project.image} alt="Portfolio image" />
                                <div className={style.overlay} />
                            </a>
                        </div>
                        <div className={style.titleDiv}>
                            <h1 className={style.title}>{project.title}</h1>
                            <img className={style.linkImage} src={project.linkImage} alt="IconLink" />
                        </div>
                        <span className={style.description}>{project.description}</span>
                    </div>
                </motion.div>
                <RenderPdfs 
                    pdfs={project.pdfs}
                    constraint={constraint} 
                />
            </motion.div>
        )})

    return (itemList.length > 0 ? itemList : null);
};

PortfolioItem.proptype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        linkImage: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        pdfs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            file: PropTypes.string,
            heigth: PropTypes.string,
            width: PropTypes.string,
            data: PropTypes.string,
        }))
    }))
};

export default PortfolioItem;