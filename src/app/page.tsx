import Image from "next/image";
import styles from "./page.module.css";
import BlackBtn from "@/components/BlackBtn";

export default function Home() {
  return (
    <div className={styles.page}>
      <BlackBtn />
    </div>
  );
}

