import React from 'react';
import styles from "./CardOrange.module.scss"
import { FaResearchgate } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { ImLinkedin } from "react-icons/im"
import { GiClick } from "react-icons/gi"

function CardOrange(props) {
    return (
        <div className={styles.Card}>
            <div className={styles.CardInner}>
                <div className={`${styles.CardFace} ${styles.CardFacefront}`}>
                    <h2>{props.TitleBack}</h2>
                    <p>{props.TextOneBack}</p>
                    <p>{props.TextTwoBack}</p>
                    <h3>{props.SubtitleBack}</h3>
                    <div className={styles.Icons}>
                        <a href="p"><FaResearchgate className={styles.Icon} /></a>
                        <a href="#"><HiOutlineMail className={styles.Icon} /></a>
                        <a href={props.LinkedIn} target="_blank"><ImLinkedin className={styles.Icon} /></a>
                    </div>
                </div>
                <div className={`${styles.CardFace} ${styles.CardFaceback}`}>
                    <div className={styles.CardContent}>
                        <div className={styles.CardHeader}>
                            {/* <img src={require(`../ProfileImg/${props.image.toLowerCase()}.jpg`)} alt="" className={styles.Image} /> */}
                            <img src={props.image} alt="" className={styles.Image} />

                            <h2>{props.NameFront}</h2>
                        </div>
                        <div className={styles.CardBody}>
                            <h3>{props.SubtitleFront}</h3>
                            <p>{props.TextFront}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOrange;