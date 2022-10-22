import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./HeroPage.module.scss";
import { getOneHero } from "../../redux/oneHeroSlice";
import { Link } from "react-router-dom";
import baseServer from "../../configs/axiosConfig";
import { useNavigate } from "react-router-dom";
export default function HeroPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { hero, status } = useSelector((state) => state.oneHeroReducer);
  const isLoadedHeroes = status === "loaded";

  const deleteHero = () => {
    baseServer.delete(`/api/heroes/${id}`);
  };

  useEffect(() => {
    dispatch(getOneHero(id));
  }, []);

  return (
    <div className={`row ${style.hero_page}`}>
      <h1>Information about {hero.nickname}</h1>

      {isLoadedHeroes ? (
        <>
          <div className='col col-md-8 order-1'>
            {hero && (
              <>
                <Link to={`/hero/${id}/edit`}>
                  <button type='button' className='btn btn-warning'>
                    Edit Hero
                  </button>
                </Link>
                <Link to={`/`} onClick={deleteHero}>
                  <button type='button' className='btn btn-danger'>
                    Delete Hero
                  </button>
                </Link>
              </>
            )}
            <div>
              <div className={style.description_hero}>
                <p>
                  <span>Nikname: </span>
                  {hero.nickname}
                </p>
                <p>
                  <span>Origin description: </span>
                  {hero.origin_description}
                </p>
                <p>
                  <span>Real name: </span>
                  {hero.real_name}
                </p>
                <p>
                  <span>Superpowers: </span>
                  {hero.superpowers?.join(", ")}
                </p>
                <p>
                  <span>Catch phrase: </span>
                  {hero.catch_phrase}
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 sm-order-first'>
            <img
              src={`http://localhost:3013${hero.img_hero}`}
              alt={`marvel hero ${hero.nickname}`}
            />
          </div>
        </>
      ) : (
        <p>SKELETON</p>
      )}
    </div>
  );
}
