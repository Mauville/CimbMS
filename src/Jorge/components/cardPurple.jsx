import React from 'react';
import styles from "./cardPurpleStyles.module.scss"
import {GiClick} from "react-icons/gi"
import {GiTechnoHeart} from "react-icons/gi"

function cardPurple(props){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className= { `${styles.face} ${styles.face1} `}>
                    <div className={styles.content}>
                        <GiTechnoHeart className={styles.icono2} alt=""/>
                        <h3 className={styles.cardh3}>{props.Titulo}
                        </h3>
                        <div className={styles.arrow}>
                            <GiClick alt=""/>
                        </div>
                    </div>
                </div>
                <div className= { `${styles.face} ${styles.face2} `}>
                    <div className={styles.content}>
                        <p className={styles.parrafocard}>{props.Texto}
                        </p>
                        <a className={styles.anchor} href={props.enlace}>{props.enlaceTitulo}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default cardPurple;
    