import React from 'react'
import CoverLetter from "../../assets/image/projects/CoverLetter.png"
import Kimia from "../../assets/image/projects/Kimia.png"
import CodeCanvas from "../../assets/image/projects/CodeCanvas.png"
import Agregator from "../../assets/image/projects/Agregator.png"
import FlowYourLife from "../../assets/image/projects/FlowYourLife.png"
import AdressBook from "../../assets/image/projects/AdressBook.png"
import Pokedex from "../../assets/image/projects/Pokedex.png"
import KimiaVid from "../../assets/video/Kimia.mp4"
import AgregatorVid from "../../assets/video/Agregator.mp4"
import NewsletterVid from "../../assets/video/Newsletter.mp4"
import CodeCanvaVid from "../../assets/video/CodeCanva.mp4"
import AdressBookVid from "../../assets/video/AdressBook.mp4"

const Menu = [
    {
        id: 1,
        image: Kimia,
        video: KimiaVid,
        // title: "Plateforme de streaming",
        title: "Kimia",
        category: "PHP",
        link: "https://github.com/YousLa/Kimia"

    },
    {
        id: 2,
        image: CodeCanvas,
        video: CodeCanvaVid,
        // title: "Démystificateur de langages de programmation",
        title: "Code Canvas",
        category: "JavaScript",
        link: "https://github.com/YousLa/Code-Canvas"
    },
    {
        id: 3,
        image: Agregator,
        video: AgregatorVid,
        // title: "Agrégateur de contenu",
        title: "Agregator",
        category: "NodeJS",
        link: "https://github.com/YousLa/Projet-Agregator"

    },
    {
        id: 4,
        image: FlowYourLife,
        video: null,
        // title: "Career Coach",
        title: "Flow Your Life",
        category: "WordPress",
        link: "https://flowyourlife.be"

    },
    {
        id: 5,
        image: CoverLetter,
        video: NewsletterVid,
        title: "Newsletter",
        category: "HTML",
        link: "https://github.com/YousLa/Cover-Letter"

    },
    {
        id: 6,
        image: AdressBook,
        video: AdressBookVid,
        title: "Adress Book",
        category: "PHP",
        link: "https://github.com/YousLa/Address-Book"
    },
    {
        id: 7,
        image: Pokedex,
        video: null,
        title: "Pokedex",
        category: "React",
        link: ""
    }
]

export default Menu