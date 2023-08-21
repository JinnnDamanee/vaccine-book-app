import Image from "next/image"
import styles from "./banner.module.css"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Image
                src="/img/cover.jpeg"
                alt="cover"
                objectFit="cover"
                priority
                fill
            />
            <div className={styles.bannerText}>
                <h1> Getting <span style={{ color: '#16a34a' }}>Sick</span>  is not <span style={{ color: '#16a34a' }}>COOL ! </span> </h1>
                <h3> Book your vaccine now </h3>
            </div>
        </div>
    )
}
export default Banner