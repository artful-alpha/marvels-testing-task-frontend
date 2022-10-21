import React from "react";
import HeroItem from "../HeroItem/HeroItem";
import style from "../AllHero/AllHero.module.scss";
export default function AllHero() {
  return (
    <div className={style.container}>
      <HeroItem />
      <HeroItem />
      <HeroItem />
      <HeroItem />
      <HeroItem />
      <HeroItem />
      <HeroItem />
    </div>
  );
}
