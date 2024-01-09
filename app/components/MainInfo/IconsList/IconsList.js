import Link from "next/link";
import styles from './icons-list.module.css';
import Image from "next/image";

function IconsList({list}) {
    return (
        <ul className={styles.iconsList}>
            {list.map((item) => <li key={item.title}>
                    <Link href={item.link} download={item.download ? item.download : ''} target="_blank">
                        <Image className={styles.iconsList__icon} src={item.icon} alt={item.title}/>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default IconsList;
