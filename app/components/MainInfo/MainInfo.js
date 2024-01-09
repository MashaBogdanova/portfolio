import styles from './main-info.module.css';
import Image from "next/image";
import Description from "@/app/components/MainInfo/Description/Description";
import IconsList from "app/components/IconsList";
import iconsList from "app/components/IconsList";
import {contactsList, technologiesList} from "@/app/config/portfolio.config";
import Link from "next/link";

function MainInfo() {
    return (
        <section className={styles.mainInfo}>
            <Description/>
            <IconsList list={contactsList} type="contacts"/>
        </section>
    );
}

export default MainInfo;
