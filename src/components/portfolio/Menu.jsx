import React from 'react'
import CoverLetter from "../../assets/image/projects/CoverLetter.png"
import Kimia from "../../assets/image/projects/Kimia.png"
import CodeCanvas from "../../assets/image/projects/CodeCanvas.png"
import Agregator from "../../assets/image/projects/Agregator.png"
import FlowYourLife from "../../assets/image/projects/FlowYourLife.png"
import AdressBook from "../../assets/image/projects/AdressBook.png"

const Menu = [
    {
        id: 1,
        image: Kimia,
        // title: "Plateforme de streaming",
        title: "Kimia",
        category: "PHP",

    },
    {
        id: 2,
        image: CodeCanvas,
        // title: "Démystificateur de langages de programmation",
        title: "Code Canvas",
        category: "JavaScript"
    },
    {
        id: 3,
        image: Agregator,
        // title: "Agrégateur de contenu",
        title: "Agregator",
        category: "NodeJS"

    },
    {
        id: 4,
        image: FlowYourLife,
        // title: "Career Coach",
        title: "Flow Your Life",
        category: "WordPress"

    },
    {
        id: 5,
        image: CoverLetter,
        title: "Pokedex",
        category: "React"

    },
    {
        id: 6,
        image: AdressBook,
        title: "Adress Book",
        category: "PHP"
    }
]

export default Menu