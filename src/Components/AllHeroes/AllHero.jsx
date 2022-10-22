import { useEffect } from "react";
import HeroItem from "../HeroItem/HeroItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllHeroes } from "../../redux/heroesSlice";
import style from "../AllHeroes/AllHero.module.scss";

export default function AllHero() {
  const dispatch = useDispatch();

  const { status, heroes } = useSelector((state) => state.heroesReducer);

  const isLoadedHeroes = status === "loaded";

  useEffect(() => {
    dispatch(getAllHeroes());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {isLoadedHeroes ? (
        heroes?.map((item) => {
          return <HeroItem key={item._id} {...item} />;
        })
      ) : (
        <p>Skeleton</p>
      )}
    </div>
  );
}
