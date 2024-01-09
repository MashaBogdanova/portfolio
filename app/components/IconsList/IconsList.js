import Link from "next/link";
import styles from './icons-list.module.css';
import Image from "next/image";

function IconsList({list, type}) {
    return (
        <ul className={type === "contacts" ? styles.iconsList_contacts : styles.iconsList}>
            {list.map((item) => {
                    return (<li key={item.title}>
                            <Link href={item.link} download={item.download ? item.download : ''} target="_blank">
                                <Image
                                    className={type === "contacts" ? styles.iconsList__icon_contacts : styles.iconsList__icon}
                                    src={item.icon} alt={item.title}/>
                            </Link>
                        </li>
                    )
                }
            )}
        </ul>
    );
}

export default IconsList;
