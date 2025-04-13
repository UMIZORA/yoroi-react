import Image from "next/image";
import styles from "@/app/page.module.css";
import { Header } from "@/components/Header/page";

import getConfig from "next/config";
const {basePath} = getConfig().publicRuntimeConfig;

export const metadata = {
  title: '鎧神社（よろいじんじゃ）公式サイト --平将門の鎧が眠ると伝えられる北新宿の神社--',
  description: '伝説の地・鎧神社へ、社殿で手を合わせれば、悠久の歴史を感じられます',
}


export default function Home() {
  return (
    <>

    <Header />

    
    </>
  );
}
