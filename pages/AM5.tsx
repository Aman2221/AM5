import dynamic from "next/dynamic";
import styles from "../styles/AM5.module.css";

const AM5 = dynamic(() => import("../components/AM5"),{ssr: false,});

const ToRun = () => {
  return <AM5 />;
};
export default ToRun;