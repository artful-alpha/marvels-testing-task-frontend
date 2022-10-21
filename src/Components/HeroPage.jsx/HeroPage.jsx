import React from "react";
import style from "./HeroPage.module.scss";
export default function HeroPage() {
  return (
    <div className={style.hero_page}>
      <h1>Information about Pantera</h1>
      <div className={style.description}>
        <div className={style.info}>
          <p>Nikname: </p>
          <p>Real name: </p>
          <p>Superpowers </p>
          <p>Catch phrase </p>
        </div>

        <img
          src='https://www.superherodb.com/pictures2/portraits/10/100/247.jpg'
          alt=''
        />
      </div>
    </div>
  );
}
