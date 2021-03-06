import styles from "./HOBSStyles.module.scss"
import initial from "./img/timeLine_1.png"
import final from "./img/timeLine_2.png"
import CardTab from '../Karen/components/cardTab'
import { BsCircle } from "react-icons/bs"
import ProjectCard from "../Paola/ProjectCard"
import HOBS_Eng from "./HOBS_Eng.json"
import HOBS_Esp from "./HOBS_Esp.json"
import React, { useContext } from "react"
import { LanguageContext } from "../App"


const HOBS = () => {
  const timeLine = [
    {
      "year": "2016",
      "month": "March",
      "projects": [
        {
          "title_": "Mano",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de mano",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de mano",
          "date_":"Enero 2016",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },

        {
          "title_": "Cuello",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de cuello",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de cuello",
          "date_":"febrero 2016",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },
      ]
    },
    
    {
      "year": "2019",
      "month": "Noviembre",
      "projects": [
        {
          "title_": "Pie",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de pie",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de pie",
          "date_":"Noviembre 2019",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },

        {
          "title_": "Cabeza",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de cabeza",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de cabeza",
          "date_":"Diciembre 2019",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        }
      ]
    }
  ]

const eng = useContext(LanguageContext)
let HOBS_ = eng ? HOBS_Eng : HOBS_Esp;


  return (
    <div className={styles.Wrapper}>
      <nav className={styles.SideNav}>
        <div className={styles.circleContainer}> 
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2016</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2017</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2018</p>
        </div><div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2019</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2020</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2021</p>
        </div>
      </nav>
      <div className={styles.InfoContainer}>
        <h1 className={styles.Title0}>{HOBS_.Title_0}</h1>
        <h1 className={styles.Title1}>{HOBS_.Title_1}</h1>
        <p className={styles.Description}>{HOBS_.Description_}</p>
        <h2 className={styles.Title2}>{HOBS_.Title_2}</h2>
        <div className={styles.AreasContainer}>
          <div className={styles.cardTab}>
          {
            HOBS_.areasT.map((areas) => {
              return (
                <CardTab
                  LabelT0="AI"
                  TituloT0={areas.Titulo_T0}
                  TextoT0={areas.Texto_T0}
                  LabelT1="M"
                  TituloT1={areas.Titulo_T1}
                  TextoT1={areas.Texto_T1}
                  LabelT2="E"
                  TituloT2={areas.Titulo_T2}
                  TextoT2={areas.Texto_T2}
                  LabelT3="C"
                  TituloT3={areas.Titulo_T3}
                  TextoT3={areas.Texto_T3}
                  LabelT4="B"
                  TituloT4={areas.Titulo_T4}
                  TextoT4={areas.Texto_T4}
                />
              )
            })
          }
          </div>
        </div>
      </div>
      <div className={styles.TimeLineContainer}>

        {timeLine.map((tl) => {
          return (
            <div className={styles.TimeLine}>
              <h3 id="YearOne" className={styles.Title3}>{tl.year}</h3>
              <h4 className={styles.Title4}>{tl.month}</h4>
              {tl.projects.map((project) => {

                return (<div className={styles.TimeLine}>
                  <div className={styles.Line}></div>
                  <ProjectCard 
                    Img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" 
                    Title={project.title_} 
                    ObjGenTi={project.objGen_Ti}
                    ObjGen={project.objGen_} 
                    ObjEspTi={project.objEsp_Ti}
                    ObjEsp={project.objEsp_}
                    Date={project.date_}
                    Group={project.group_}
                    linkTi={project.link_Ti}
                  />
                  <div className={styles.Line}></div>
                  <div className={styles.Circle}> </div>
                </div>)
              })}
            </div>
          )
        })} 
      </div>
    </div>
  );
}

export default HOBS;