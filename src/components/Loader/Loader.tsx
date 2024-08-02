import styles from "./loader.module.css";
import { RingLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      {/* <RingLoader color="#078343" size={200}/> */}
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
