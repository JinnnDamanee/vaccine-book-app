import Image from "next/image";
import styles from "./infoCard.module.css";

const InfoCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src={"/img/info.jpg"} alt="product picture" fill objectFit="cover" />
            </div>
            <div className={styles.textContainer}>
                <h2>Why should we get <span style={{ color: '#16a34a' }}>Vaccinated</span> </h2>
                <p style={{ marginTop: 10 }}> Vaccination bolsters individual immunity, safeguarding against severe illness and complications from infectious diseases. It forms a crucial barrier against outbreaks and helps protect vulnerable populations. By contributing to herd immunity, vaccinations collectively foster healthier communities and reduce the overall disease burden. </p>
            </div>
        </div>
    )
}

export default InfoCard;