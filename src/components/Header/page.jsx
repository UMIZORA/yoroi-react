import Image from "next/image";
import styles from "@/components/Header/header.module.css";

import getConfig from "next/config";
const {basePath} = getConfig().publicRuntimeConfig;


export function Header() {
  return (
    <>
      <header className={styles.header}>
	      <div className={styles.g_nav}>
	        <h1><a href="/" className={styles.headerTitle}>鎧神社</a></h1>
          <nav>
            <div className={styles.sp_logo}><Image src={`${basePath}/logo_bk.png`} className={styles.imgAuto} width={200} height={42} alt="鎧神社" /></div>
            <ul className={styles.g_menu}>
            <li><a href="history/">鎧神社ものがたり</a></li>
            <li><a href="shrine_deity/">鎧神社のかみさま</a></li>
            <li><a href="prize/">授与品・御朱印</a></li>
            <li><a href="sanpai/">お祭り・ご祈祷</a></li>
            <li><a href="map/">境内さんぽ</a></li>
            <li className={styles.sp_limited}><a href="news/">お知らせ</a></li>
            <li className={styles.sp_limited}><a href="bridal/">神前結婚式</a></li>
            <li><a href="access/">アクセス</a></li>
            <li className={styles.sp_limited}><a href="faq/">よくあるご質問</a></li>
            <li className={styles.sp_limited}><a href="contact/">お問い合わせ</a></li>
            </ul>

		        <ul className={styles.g_sns}>
              <li><a href="/"><Image src={`${basePath}/icon_facebook_bk.png`} alt="facebook" className={styles.imgAuto} width={50} height={50} /></a></li>
              <li><a href="/"><Image src={`${basePath}/icon_twitter_bk.png`} alt="twitter" className={styles.imgAuto} width={50} height={50} /></a></li>
              <li><a href="/"><Image src={`${basePath}/icon_instagram_bk.png`} alt="Instagram" className={styles.imgAuto} width={50} height={50} /></a></li>
              <li><a href="/"><Image src={`${basePath}/icon_youtube_bk.png`} alt="YouTube" className={styles.imgAuto} width={50} height={50}/></a></li>
            </ul>
          </nav>
        </div>

        <div id="hamburgerButton">
          <button className={styles.g_button}>
          <div className={styles.navbtn}><span></span><span></span><span></span></div>
          </button>
      </div>
      </header>

    </>
  );
}
