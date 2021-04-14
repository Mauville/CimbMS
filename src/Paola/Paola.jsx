import React from "react"
import styles from "./Components/CardStyles.module.scss"
import Card from "./Components/Card"
import Toggle from "./Toggle"

function Paola() {
    return (
        <div className={styles.Container}>
            <div className={styles.Page}>

                <h1>Artículos y Divulgaciones</h1>
                <h2>Electro-movilidad inteligente</h2>
                <Card
                    Title="Perspective of Autonomous Driving in Mexico"
                    Img="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"
                    Author="Dr. Javier Izquierdo Reyes"
                />

                <Card
                    Title="Perspective of Autonomous Driving in Mexico"
                    Img="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"
                    Author="Dr. Javier Izquierdo Reyes"
                />


                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <h2>Desarrollo de Tecnologías Centradas en el Usuario</h2>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>

                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <h2>Otros</h2>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Perspective of Autonomous Driving in Mexico</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2019</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
                </div>
                <div className={styles.Card}>
                    <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg" />
                    <div className={styles.Information}>
                        <h1>Emotion recognition for semi-autonomous vehicles framework</h1>
                        <h3>Dr. Javier Izquierdo Reyes</h3>
                        <h4>2018</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                            <li>Aliquam gravida tristique sem.</li>
                        </ul>
                    </div>
                    <Toggle link="https://link.springer.com/article/10.1007/s12008-018-0473-9" abs="The human being in his blessed curiosity has always wondered how to make machines feel, and, at the same time how a machine can detect emotions. Perhaps some of the tasks that cannot be replaced by machines are the ability of human beings to feel emotions. In the last year, this hypothesis is increasingly questioned by scientists who have done work that seeks to understand the phenomena of brain functioning using the state of the art in instrumentation, sensors, and signal processing. Today, the world scientists have powerful machine learning methods developed to challenge this issue.The field of emotion detection is gaining significance as the technology advances, and particularly due to the current developments in machine learning, the Internet of Things, industry 4.0 and Autonomous Vehicles. Machines will need to be equipped with the capacity to monitor the state of the human user and to change their behaviour in response. Machine learning offers a route to this and should be able to make use of data collected from questionnaires, facial expression scans, and physiological signals such as electroencephalograms (EEG), electrocardiograms, and galvanic skin response. In this study, an approach was proposed to identify the emotional state of a subject from the collected data in the elicited emotion experiments. An algorithm using EEG data was developed, using the power spectral density of the frequency cerebral bands (alpha, beta, theta, and gamma) as features for classifier training. A K Nearest Neighbors algorithm using Euclidian distance was used to predict the emotional state of the subject. This article proposes a novel approach for emotion recognition that not only depends on images of the face, as in the previous literature, but also on the physiological data. The algorithm was able to recognize nine different emotions (Neutral, Anger, Disgust, Fear, Joy, Sadness, Surprise, Amusement, and Anxiety), nine valence positions, and nine positions on arousal axes. Using the data from only 14 EEG electrodes, an accuracy of approximately 97% was achieved. An approach has been developed for evaluating the state of mind of an driver in the context of a semi-autonomous vehicle context, for example. However, the system has a much wider range of potential applications, from the design of products to the evaluation of the user experience." />
                </div>
            </div>
        </div>
    );
}

export default Paola;


