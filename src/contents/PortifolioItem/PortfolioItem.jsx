import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import style from "./PortfolioItem.module.css";

function PortfolioItem({constraint, items=[]}) {

    const [moveContainer, setMoveContainer] = useState(false)
    const delays = []

    const itemList = items.map(item => {

        let randTime = Math.floor(Math.random() * 25)

        while (randTime in delays || randTime < 5) {
            randTime = Math.floor(Math.random() * 15)
        }
        
        delays.push(randTime)

        return (
        <motion.div
            drag={moveContainer}
            dragConstraints={constraint}
            key={item.id} 
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
                        <img src={item.image} alt="Portfolio image" />
                    </div>
                    <h1 className={style.title}>{item.title}</h1>
                    <p className={style.description}>{item.description}</p>
                </div>
            </motion.div>
        </motion.div>
    )})

    return (itemList.length > 0 ? itemList : null);
};

PortfolioItem.proptype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }))
};

export default PortfolioItem;