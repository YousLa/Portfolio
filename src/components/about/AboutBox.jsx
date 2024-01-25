import React from 'react'
import Passioned from '../../assets/svg/Passioned.svg'
import Determined from '../../assets/svg/Determined.svg'
import ProblemSolver from '../../assets/svg/ProblemSolver.svg'
import FastLearner from '../../assets/svg/FastLearner.svg'

// TODO Softskills

function AboutBox() {
    return (
        <div className="about_boxes grid">

            <div className="about_box">
                {/* <i className="about_icon icon-fire"></i> */}
                <img src={Passioned} className="about_icon" alt="Passionnée" />
                <div>
                    <h3 className="about_title">Passionée</h3>
                    <span className="about_subtitle">Mon enthousiasme marque chacune de mes actions.</span>
                </div>
            </div>

            <div className="about_box">
                <img src={ProblemSolver} className="about_icon" alt="Problem Solver" />
                <div>
                    <h3 className="about_title">Problem Solver</h3>
                    <span className="about_subtitle">Face à des défis, j'adopte une approche proactive et trouve des solutions efficaces.</span>
                </div>
            </div>

            <div className="about_box">
                <img src={Determined} className="about_icon" alt="Déterminée" />

                <div>
                    <h3 className="about_title">Déterminée</h3>
                    <span className="about_subtitle">Je surmonte les obstacles avec persévérance pour atteindre mes objectifs.</span>
                </div>
            </div>

            <div className="about_box">
                <img src={FastLearner} className="about_icon" alt="Fast Learner" />
                <div>
                    <h3 className="about_title">Fast Learner</h3>
                    <span className="about_subtitle">J'apprends rapidement, capable de m'adapter et de maîtriser de nouveaux domaines avec facilité.</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox