'use client'

import styles from './page.module.css'
import {portfolio} from "@/config/portfolio.config";
import Image from "next/image";

const ICON_SIZE = 27;

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.top}>
                <article className={styles.top__icons}>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                        width={30} height={ICON_SIZE}/>
                    <Image
                        src='https://cdn.worldvectorlogo.com/logos/redux.svg'
                        width={30} height={ICON_SIZE}/>
                    <Image
                        src='https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png'
                        width={ICON_SIZE} height={ICON_SIZE}/>
                    <Image
                        src='https://www.svgrepo.com/show/374061/sass.svg'
                        width={35} height={35}/>
                    <Image
                        src='https://cdn-icons-png.flaticon.com/512/919/919832.png'
                        width={ICON_SIZE} height={ICON_SIZE}/>
                </article>
                <article className={styles.top__info}>
                    <h1 className={styles.top__title}>MARIA BOGDANOVA</h1>
                    <h4 className={styles.top__subtitle}>Frontend Software Engineer</h4>
                    <p className={styles.top__summary}>Frontend engineer with over 2 years of expertise in
                        JavaScript, with mentorship and team work experience.
                        Proficient in React, Redux, TypeScript, with hands-on
                        experience in testing React applications. Committed to high
                        code quality standards and effective communication. I
                        consider myself a fast learner, hardworking, self-organized
                        person with a passion for continuous growth and learning.</p>
                </article>
                <article className={styles.top__icons}>
                    <a href='mailto:mashabogdanoff@gmail.com'>
                        <Image
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png'
                            width={ICON_SIZE} height={ICON_SIZE}
                            alt='e-mail'
                        />
                    </a>
                    <a href='https://t.me/mashabogdanoff'>
                        <Image src='https://www.svgrepo.com//show/271091/telegram.svg'
                               width={ICON_SIZE} height={ICON_SIZE}
                               alt='telegram'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/maria-bogdanova-16407a99/'>
                        <Image
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png'
                            width={ICON_SIZE} height={ICON_SIZE}
                            alt='linkedin'
                        />
                    </a>
                    <a href='http://github.com/mashabogdanova'>
                        <Image
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png'
                            width={29} height={29}
                            alt='github'
                        />
                    </a>
                    <a download="CV Maria Bogdanova Frontend Developer.pdf" href='/cv.pdf'>
                        <Image src='https://cdn-icons-png.flaticon.com/512/6588/6588143.png' width={ICON_SIZE}
                               height={ICON_SIZE}
                               alt='cv'
                        />
                    </a>
                </article>
            </section>
            <section>
                <h2 className={styles.projects__title}>MY PORTFOLIO</h2>
                <div className={styles.projects}>
                    {portfolio.map((project) =>
                        <article key={project.title} className={styles.projects__item}>
                            <a href={project.deployLink}>
                                <h3 className={styles.projects__subtitle}>{project.title}</h3>
                                <Image src={project.picture} alt={project.title}
                                       className={styles.projects__picture}/>
                            </a>
                            <div className={styles.projects__technologies}>{project.technologies.map((item) =>
                                <div key={item}>{item}</div>)}
                            </div>
                            <a className={styles.projects__codeLink} href={project.codeLink}>Explore code</a>
                            <p>{project.description}</p>
                        </article>)}
                </div>
            </section>
        </main>
    )
}
