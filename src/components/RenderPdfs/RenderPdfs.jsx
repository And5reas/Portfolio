import { useState } from "react";
import { motion } from "framer-motion";
import style from "./RenderPdfs.module.css"
import styleHeader from "./../PortifolioItem/PortfolioItem.module.css"
import closeIcon from "./../../assets/svg/closeIcon.svg"

function RenderPdfs({assets, constraint}) {

    const [moveContainer, setMoveContainer] = useState(false)
    const [closeBtn, setCloseBtn] = useState(false)
    
    const pdfsList = assets.map(asset => {

        return (
            <motion.div 
                key={asset.id}
                drag={moveContainer}
                dragConstraints={constraint}
                className={style.container}
                style={{display: asset.hidden}}
            >
                <motion.div 
                    onHoverStart={() => setMoveContainer(true)} 
                    onHoverEnd={() => setMoveContainer(false)} 
                    className={styleHeader.header} 
                    style={{height: "40px"}}
                >
                    <motion.div 
                        className={style.close + " close"}
                        data={asset.data}
                        onHoverStart={() => setCloseBtn(true)}
                        onHoverEnd={() => setCloseBtn(false)}
                    >
                        <div className={styleHeader.circle} style={{backgroundColor: "#FF5555", marginRight: "15px"}} >
                            <img data={asset.data} style={{display: closeBtn ? "" : "none"}} src={closeIcon} alt="closeIcon" />
                        </div>
                    </motion.div>
                </motion.div>
                <object 
                    className={style.pdf} 
                    data={asset.file} 
                    type="application/pdf" 
                    style={{height: asset.heigth, width: asset.width}}
                />
            </motion.div>
        );
    })

    return (pdfsList.length > 0 ? pdfsList : null);
};

export default RenderPdfs;