import style from './About.module.css'

const About = () =>{

    return (
        <div className={style.container}>
            <div className={style.about}>
                <h1 className={style.nombre}>Hola!!! Mi nombre es Nahuel </h1>
                <p className={style.me}>Apasionado por la programación.
                    Mi capacitación en el área comenzó en ALURA como Desarrollador Front-End. Actualmente, asisto al BootCamp de Desarrollador Web Fullstack en HENRY. En el afán de ampliar mi formación de manera integral, incursiono en el autodidactismo, lo que me permite adquirir conocimientos y habilidades en forma independiente, enriqueciendo mi capacidad de aprendizaje. 
                    Me encanta el desarrollo web y sueño con dedicar mi vida profesional a ello. ¡Estoy emocionado de seguir creciendo y aprendiendo en este apasionante campo!</p>
            </div>
            <div className={style.skills}>
                <h2 className={style.softSkills}>Soft Skills</h2>
                <p>Si bien es importante contar con habilidades técnicas sólidas en el entorno laboral, considero que las habilidades blandas o soft kills son igual de importantes. En cuanto a mi, soy una persona comunicativa, paciente y resolutiva, lo que me permite trabajar bien en equipo y abordar conflictos de manera efectiva, incluso bajo presión. 
                    Me considero creativo y promuevo un enfoque innovador.
                    Cuento con las habilidades necesarias para cumplir con las expectativas de mi trabajo y lograr los objetivos, tanto de manera independiente como en equipo. Estoy ilusionado por comenzar mi etapa laboral, emplear estas habilidades, adquirir experiencia y seguir formándome cada día.</p>
            </div>
        </div> 
    );
}
export default About;