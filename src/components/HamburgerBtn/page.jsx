"use client";

import styles from "@/components/Header/header.module.css";

const handleBtn = () => {
  const btn = document.getElementsByClassName("header_navbtn__oye2c");
  //btn.classList.toggle("active");
  console.log(btn);
} 


export function HamburgerBtn() {
  
  return (
    <>
        <div className={styles.hamburgerButton}>
          <button className={styles.g_button} onClick={() => handleBtn()} >
          <div className={styles.navbtn}><span></span><span></span><span></span></div>
          </button>
        </div>
    </>

  );
}

