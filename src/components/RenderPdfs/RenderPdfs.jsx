import { useState } from "react";
import { motion } from "framer-motion";
import style from "./RenderPdfs.module.css"
import styleHeader from "./../PortifolioItem/PortfolioItem.module.css"

function RenderPdfs({pdfs, constraint}) {

    const [moveContainer, setMoveContainer] = useState(false)
    
    const pdfsList = pdfs.map(pdf => {

        return (
            <motion.div 
                key={pdf.id}
                drag={moveContainer}
                dragConstraints={constraint}
                className={style.container}
                style={{display: pdf.hidden}}
            >
                <motion.div 
                    onHoverStart={() => setMoveContainer(true)} 
                    onHoverEnd={() => setMoveContainer(false)} 
                    className={styleHeader.header} 
                    style={{height: "40px"}}
                >
                    <div className={styleHeader.circle} style={{backgroundColor: "#50FA7B"}} />
                    <div className={styleHeader.circle} style={{backgroundColor: "#FF5555", marginRight: "15px"}} />
                </motion.div>
                <object 
                    className={style.pdf} 
                    data={pdf.file + "#toolbar=0"} 
                    type="application/pdf" 
                    style={{height: pdf.heigth, width: pdf.width}}
                />
            </motion.div>
        );
    })

    return (pdfsList.length > 0 ? pdfsList : null);
};

export default RenderPdfs;