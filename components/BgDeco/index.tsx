import styles from "./index.module.scss";
import Image from "next/image";

const BgDeco = ({ decoType = "default" }) => {
  switch (decoType) {
    case "pallas":
      return (
        <div className={styles.bgPallas}>
          <div className={styles.bgCentaur}>
            <Image src="/centaur.png" width={270} height={360} alt="" />
          </div>
          <div className={styles.bgHead}>
            <Image src="/athena_head.png" width={270} height={360} alt="" />
          </div>
          <div className={styles.bgFoot}>
            <Image src="/athena_foot.png" width={210} height={280} alt="" />
          </div>
        </div>
      );
    case "default":
    default:
      return (
        <div className={styles.bgDeco}>
          <div className={styles.bgLeft}></div>
          <div className={styles.bgRight}></div>
        </div>
      );
  }
};

export default BgDeco;
