import style from "./Devices.module.css"
import { motion } from "framer-motion";

function DevicesAnimated() {
    return (
        <div className={style.container}>
            <div className={style.screenContainer}>
                <motion.div 
                    className={style.star} 
                    animate={{
                        rotate: [0, 360, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div 
                    className={style.rect}
                    animate={{
                        rotate: [0, 200, 90, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 3.5
                    }}
                />
                <motion.div
                    className={style.circle}
                    animate={{
                        rotate: [0, 70, 360, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 2
                    }}
                />
                <div className={style.promptContainer}>
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#6E07F3"}}
                        animate={{
                            width: [0, 80, 50, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 10
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#5BE9B9"}}
                        animate={{
                            width: [0, 80, 20, 80, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 15
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#FA824C"}}
                        animate={{
                            width: [0, 20, 50, 30, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 7
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#FAFFFD"}}
                        animate={{
                            width: [0, 60, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 10
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#CEEB93"}}
                        animate={{
                            width: [0, 70, 50, 55, 34, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 8
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#E500A4"}}
                        animate={{
                            width: [0, 73, 35, 40, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 5
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#F1FA8C"}}
                        animate={{
                            width: [0, 50, 53, 55, 75, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 12
                        }}
                    />
                    <motion.div 
                        className={style.line}
                        style={{backgroundColor: "#FAC1A5", marginTop: "40px"}}
                        animate={{
                            width: [0, 10, 50, 55, 75, 80, 0]
                        }}
                        transition={{
                            repeat: Infinity, type: "tween", duration: 20
                        }}
                    />
                </div>
            </div>
            <div className={style.noteContainer}>
                <motion.div 
                    className={style.rect}
                    style={{
                        width: "40px",
                        height: "40px",
                        top: "10px",
                        right: "75px"
                    }}
                    animate={{
                        rotate: [0, 150, 50, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 3
                    }}
                />
                <motion.div 
                    className={style.star} 
                    style={{
                        width: "49px",
                        height: "47px",
                        top: "20px",
                        right: "120px"
                    }}
                    animate={{
                        rotate: [0, 180, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div
                    className={style.circle}
                    style={{
                        width: "36px",
                        height: "36px",
                        top: "40px",
                        right: "40px"
                    }}
                    animate={{
                        rotate: [0, 70, 720, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 3
                    }}
                />
            </div>
            <div className={style.hologramContainer}>
                <motion.div
                    className={style.light}
                    style={{
                        rotate: "-40deg",
                        bottom: "40px",
                        left: "50px"
                    }}
                    animate={{
                        height: [50, 20, 50]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div
                    className={style.light}
                    style={{
                        rotate: "40deg",
                        bottom: "40px",
                        left: "130px"
                    }}
                    animate={{
                        height: [50, 20, 50]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div
                    className={style.light}
                    style={{
                        rotate: "18deg",
                        bottom: "55px",
                        left: "105px"
                    }}
                    animate={{
                        height: [50, 20, 50]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div
                    className={style.light}
                    style={{
                        rotate: "-18deg",
                        bottom: "55px",
                        left: "75px"
                    }}
                    animate={{
                        height: [50, 20, 50]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
                <motion.div
                    drag
                    dragSnapToOrigin={true}
                    whileTap={{ 
                        cursor: "grabbing" 
                    }}
                    dragTransition={{
                        bounceStiffness: 600, bounceDamping: 30
                    }}
                    className={style.world}
                    animate={{
                        top: [0, 20, 0]
                    }}
                    transition={{
                        repeat: Infinity, duration: 5
                    }}
                />
            </div>
            <motion.div
                drag
                className={style.clockContainer}
                dragSnapToOrigin={true}
                whileTap={{ 
                    cursor: "grabbing" 
                }}
                dragTransition={{
                    bounceStiffness: 600, bounceDamping: 30
                }}
            >
                <motion.div 
                    className={style.hours}
                    animate={{
                        rotate: [0, 360, 540, 720]
                    }}
                    transition={{
                        repeat: Infinity, duration: 10
                    }}
                />
                <motion.div 
                    className={style.min}
                    animate={{
                        rotate: [0, 90, 180, 270, 360, 400, 470, 550, 640, 720]
                    }}
                    transition={{
                        repeat: Infinity, duration: 7
                    }}
                />
            </motion.div>
            <motion.div 
                className={style.cellphone} 
                drag 
                whileDrag={{
                    scale: 1.2, 
                    color: "yellow"
                }}
                whileTap={{ 
                    cursor: "grabbing" 
                }}
                dragConstraints={{
                    left: -400,
                    right: 400,
                    top: -400,
                    bottom: 0
                }}
                dragMomentum={false}
                dragSnapToOrigin={true}
            >Drag me</motion.div>
            <motion.div 
                className={style.tools} 
                drag 
                whileTap={{ 
                    cursor: "grabbing" 
                }}
                dragConstraints={{
                    left: -400,
                    right: 400,
                    top: -400,
                    bottom: 0
                }}
                dragMomentum={false}
                dragSnapToOrigin={true}
            />
        </div>
    );
};

export default DevicesAnimated;