import React from "react";
import style from "../HeroItem/HeroItem.module.scss";
export default function HeroItem() {
  console.log(style);
  return (
    <div className={style.hero_item}>
      <a href='hero/pantera'>
        <h2>Black Pantera</h2>
        <img
          src='https://www.superherodb.com/pictures2/portraits/10/100/247.jpg'
          alt=''
        />
      </a>
    </div>
  );
}
