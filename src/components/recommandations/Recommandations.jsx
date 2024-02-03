import React from 'react'
import "./recommandations.css"
import Pic from "../../assets/image/pic.png"

// Import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        image: Pic,
        title: "Aude Beurive",
        poste: "Formatrice Developpement Web",
        entreprise: "BStorm",
        lien: "https://www.bstorm.be",
        comment: "Yousra est attentive, volontaire et curieuse. Elle a participé activement à la vie de la classe et avait toujours envie d'aller plus loin. C'était un réel plaisir de lui donner cours. Elle sera pour vous une développeuse très engagée, prête à relever n'importe quel défi et toujours en quête de nouveaux apprentissages. Vous gagnerez également une collaboratrice à l'écoute, respectueuse et toujours orientée solutions."
    },
    {
        id: 2,
        image: Pic,
        title: "Julie Moors",
        poste: "Formatrice et coordinatrice de formation",
        entreprise: "Interface3",
        lien: "https://interface3.be/fr",
        comment: "Yousra est une guerrière! Sa curiosité et sa détermination pour devenir THE développeuse sont admirables! Je n'ai aucun doute qu'elle atteigne tous ses objectifs! Une personnalité attachante et un mental d'acier!"
    },
    {
        id: 3,
        image: Pic,
        title: "Quentin Geerts",
        poste: "Formateur Developpement Web",
        entreprise: "BStorm",
        lien: "https://www.bstorm.be",
        comment: "J’ai eu le plaisir de donner cours à Yousra lors de son apprentissage à Interface3. Yousra s’est révélée être une stagiaire prete a decouvrir le merveilleux monde du développement. Elle était non seulement très assidue et appliquée pendant les cours, mais elle a également démontré une grande capacité d’apprentissage et une attitude positive. Yousra a fait preuve d’un excellent sens de l’organisation et de la responsabilité.Elle a rapidement assimilé les concepts et a toujours cherché à approfondir ses connaissances.Sa curiosité et sa volonté d’apprendre sont des qualités qui la distinguent. Je suis convaincu que Yousra continuera à exceller dans sa carrière professionnelle. Je la recommande vivement en tant que future développeuse frontend."
    },
    {
        id: 4,
        image: Pic,
        title: "Ibtissam Derfoufi",
        poste: "Technicienne IT resea et sécurité",
        entreprise: "Interface3",
        lien: "https://interface3.be/fr",
        comment: "C'est avec plaisir que je recommande Yousra, une étudiante dynamique et passionnée avec qui j'ai eu le plaisir de travailler. Yousra se distingue par son attitude souriante et agréable, ainsi que par son engagement passionné envers les défis techniques. Pendant notre collaboration, j'ai été impressionné par sa capacité à comprendre rapidement les concepts et à les appliquer efficacement. Yousra excelle particulièrement dans les domaines du design, de la programmation et du hosting. Sa polyvalence et sa compétence technique lui permettent de relever avec succès divers défis dans ces domaines. Sa détermination à surmonter les obstacles techniques est un trait remarquable qui la distingue. Je recommande vivement Yousra pour sa passion, son dynamisme et ses compétences techniques. Son approche proactive et sa volonté d'atteindre l'excellence font d'elle une candidate précieuse pour tout projet ou équipe."
    }
]

const Recommandations = () => {
    return (
        <section className="recommandations container section" id='recommandations'>
            <h2 className='section_title'>Recommendations</h2>

            <Swiper className="recommandations_container grid">
                {data.map(({ id, image, title, poste, comment, entreprise, lien }) => {
                    return (
                        <SwiperSlide className="recommandation_item"
                            // install Swiper modules
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                        >
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="recommandations_title">{title}</h3>
                            <span className='subtitle'>{poste} chez <a href={lien} target='blank_'>{entreprise}</a></span>
                            <div className='comment'>{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Recommandations