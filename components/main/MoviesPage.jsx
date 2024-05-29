import React from "react";
import { Button } from "../ui/button";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AceternityLogo from "../logo/AceternityLogo";
import { BorderBeam } from "../ui/border-beam";
import { removeMood } from "@/reducers/moods";
import { useRouter } from "next/router";

export default function MoviesPage() {
  const movies = useSelector(
    (state) => state.recommendations.value.recommendations
  );
  const moods = useSelector((state) => state.moods);
  console.log(moods);
  const [mainFilm, setMainFilm] = useState(movies[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(true); // Mettre à jour l'état après le chargement initial de la page
  }, []);

  const handleFilmClick = (clickedFilm) => {
    setMainFilm(movies[clickedFilm]);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleMood() {
    dispatch(removeMood());
    router.push(`/mood`);
  }

  return (
    <div className="bg-black relative z-20">
      <BorderBeam />
      <div className="relative w-screen flex flex-col bg-top overflow-hidden z-10">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              mainFilm.backdrop ? mainFilm.backdrop : mainFilm.poster
            }`}
            alt={mainFilm.title.fr}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="relative ml-10 mt-20 flex justify-center items-center z-10">
          <Button
            variant="ghost"
            className="w-80 border-2 text-slate-100 text-xl"
          >
            Your mood : {moods[0]}
          </Button>
        </div>

        <div className="ml-10 mt-4 flex justify-center items-center z-10">
          <Button
            variant="ghost"
            className="w-50 border-2 text-slate-100"
            onClick={() => handleMood()}
          >
            Go back ?
          </Button>
        </div>
        <div className="my-auto text-center text-slate-100 mx-auto mt-20 z-10">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
            {mainFilm.title.fr}
          </h2>
          <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Directed by {mainFilm.directors[0]}. {mainFilm.duration} minutes.{" "}
            {mainFilm.release_date.substring(0, 4)}
          </p>
          <div className="max-w-2xl mx-auto flex items-center justify-center mt-6">
            <blockquote className="mt-6 pl-6 italic pr-4 text-justify w-full h-full text-center overflow-hidden line-clamp-6">
              {mainFilm.synopsis.fr}
            </blockquote>
          </div>
          <div className="mt-20 pr-4 pl-4 mx-auto">
            <div className="relative mb-6 w-full max-w-3xl mx-auto">
              {mainFilm.trailer ? (
                mainFilm.trailer.fr ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.fr} className="" />
                  </>
                ) : mainFilm.trailer.en ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.en} className="" />
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center items-center flex-wrap gap-4">
              {mainFilm.providers.fr.length > 0 &&
                mainFilm.providers.fr.map((platform, index) => {
                  return (
                    <HoverBorderGradient
                      key={index}
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-transparent text-slate-100 flex items-center space-x-2"
                    >
                      <AceternityLogo />
                      <span>Available on {platform}</span>
                    </HoverBorderGradient>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="w-screen pt-20 text-3xl font-extrabold text-center text-slate-100 bg-black -mb-16">
        You can also checkout :
      </h2>

      {isLoaded && (
        <div className="bg-black mx-auto w-screen h-screen flex items-center justify-center">
          <div className="h-[400px] flex flex-nowrap justify-start">
            {movies.map((movie, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="slide"
                  id={index}
                  className="hidden"
                  onClick={() => handleFilmClick(index)}
                />
                <label
                  htmlFor={index}
                  className="relative group w-[80px] h-full bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[150px] md:w-[120px] md:hover:w-[350px] lg:w-[150px] lg:hover:w-[550px]"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${
                      movie.backdrop ? movie.backdrop : movie.poster
                    }`}
                    alt={movie.title.fr}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl"
                  />

                  <div className="flex flex-nowrap p-4">
                    <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-all ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
                      <h4 className="uppercase text-white scroll-m-20 text-2xl font-semibold tracking-tight">
                        {movie.title.fr}
                      </h4>
                      <p className="scroll-m-20 text-lg font-semibold tracking-tight pt-1 text-slate-100">
                        Directed by {movie.directors[0]} - {movie.duration}{" "}
                        minutes - {movie.release_date.substring(0, 4)}
                      </p>

                      <blockquote className=" text-slate-100 pt-1 line-clamp-3 mt-2 italic pr-4 text-justify w-full h-full text-center overflow-hidden">
                        {movie.synopsis.fr}
                      </blockquote>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 z-10">
        <Footer />
      </div>
    </div>
  );
}
