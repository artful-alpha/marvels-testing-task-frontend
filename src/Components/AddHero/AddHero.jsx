import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../AddHero/AddHero.module.scss";
import baseServer from "../../configs/axiosConfig";

export default function AddHero() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [imageUpload, setImageUpload] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const fields = {
        nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers.split(","),
        catch_phrase: catchPhrase,
        img_hero: imageUpload,
      };
      const { data } = await baseServer.post("/api/heroes/", fields);
      const id = data._id;

      navigate(`/hero/${id}`);
    } catch (error) {
      console.warn(error);

      alert("Error create post");
    }
  };

  const handleUploadFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await baseServer.post("/upload", formData);
      setImageUpload(data.url_hero);
      console.log(data.url_hero);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      baseServer
        .get(`/api/heroes/${id}`)
        .then(({ data }) => {
          setNickname(data.nickname);
          setRealName(data.real_name);
          setOriginDescription(data.origin_description);
          setSuperpowers(data.superpowers.join(" ,"));
          setCatchPhrase(data.catch_phrase);
          setImageUpload(data.img_hero);
          console.log(data.superpowers);
        })
        .catch((err) => {
          console.warn(err);
          alert("Error get post");
        });
    }
  }, []);

  return (
    <div className={`row ${style.hero_page}`}>
      <h1>Create Marvel Hero</h1>

      <div className='col col-md-7'>
        <div>
          <div className={style.description_hero}>
            <form className='row g-3 needs-validation' onSubmit={onSubmitForm}>
              <div className='col-sm-8'>
                <label htmlFor='nickname' className='form-label'>
                  Nickname
                </label>
                <input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  type='text'
                  id='nickname'
                  className='form-control'
                  placeholder='Enter Nickname Hero'
                />
              </div>

              <div className='col-sm-8'>
                <label htmlFor='origin_description' className='form-label'>
                  Origin description:
                </label>
                <textarea
                  value={originDescription}
                  onChange={(e) => setOriginDescription(e.target.value)}
                  className='form-control'
                  id='origin_description'
                  placeholder=' Please enter a message in the textarea.'></textarea>
              </div>

              <div className='col-sm-8'>
                <label htmlFor='real_name' className='form-label'>
                  Real Name
                </label>
                <input
                  value={realName}
                  onChange={(e) => setRealName(e.target.value)}
                  type='text'
                  id='real_name'
                  className='form-control'
                  placeholder='Enter Real Name'
                />
              </div>

              <div className='col-sm-8'>
                <label htmlFor='superpowers' className='form-label'>
                  Superpowers
                </label>
                <input
                  value={superpowers}
                  onChange={(e) => setSuperpowers(e.target.value)}
                  type='text'
                  id='superpowers'
                  className='form-control'
                  placeholder='Enter superpowers hero'
                />
                <div className='valid-feedback'></div>
              </div>

              <div className='col-sm-8'>
                <label htmlFor='catch_phrase' className='form-label'>
                  Catch phrase:
                </label>
                <input
                  value={catchPhrase}
                  onChange={(e) => setCatchPhrase(e.target.value)}
                  type='text'
                  id='catch_phrase'
                  className='form-control'
                  placeholder='Enter catch phrase hero'
                />
              </div>

              <div className='col-sm-8'>
                <input
                  onChange={handleUploadFile}
                  type='file'
                  className='form-control'
                />
              </div>
              <div className='col-sm-8'>
                <button
                  className='btn btn-primary  form-control '
                  type='submit'>
                  Create Hero
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {imageUpload ? (
        <div className='col-12 col-md-5 form-panel'>
          <img src={`${process.env.REACT_APP_API_URL}${imageUpload}`} alt='' />
        </div>
      ) : (
        false
      )}
    </div>
  );
}
