import {portfolio} from "@/app/config/portfolio.config";
import Project from "@/app/components/Portfolio/Project";
import styles from './portfolio.module.css';

function Portfolio() {
    return (<section>
        <h2 className={styles.portfolio__title}>MY PORTFOLIO</h2>
        <div className={styles.portfolio}>
            {portfolio.map((project) => <Project project={project} key={project.title}/>)}
        </div>
    </section>);
}

export default Portfolio;
