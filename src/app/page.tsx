import Image from "next/image";
import styles from "./page.module.css";
import BlackBtn from "@/components/BlackBtn";
import RedButton from "@/components/RedButton";


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

