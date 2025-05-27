import Image from "next/image";
import styles from "./page.module.css";
import RedButton from "@/components/RedButton";
import BlackBtn from "@/components/BlackBtn";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
    <BlackBtn />
    <RedButton />
    </div>
     </>
  );
}

