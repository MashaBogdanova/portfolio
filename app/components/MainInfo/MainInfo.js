import styles from './main-info.module.css';
import Image from "next/image";
import Description from "@/app/components/MainInfo/Description/Description";
import IconsList from "@/app/components/MainInfo/IconsList";
import iconsList from "@/app/components/MainInfo/IconsList";
import {contactsList, technologiesList} from "@/app/config/portfolio.config";
import Link from "next/link";

const ICON_SIZE = 27;

function MainInfo() {
    return (
        <section className={styles.mainInfo}>
            <IconsList list={technologiesList}/>
            <Description/>
            <IconsList list={contactsList}/>
        </section>
    );
}

export default MainInfo;
