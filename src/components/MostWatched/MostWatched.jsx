import { useAnime } from "../../hooks/useAnime";
import AnimeCard from "../AnimeCard/AnimeCard";

function MostWatched() {
  const { anime, loading, error } = useAnime();
  if (loading)
    return (
      <p className="mx-auto my-10 w-[min(1120px,calc(100%_-_32px))] rounded-xl border border-[#2E2A26] bg-[#1B1815] px-6 py-5 text-center font-semibold text-[#837C74]">
        Loading ...
      </p>
    );
  if (error)
    return (
      <p className="mx-auto my-10 w-[min(1120px,calc(100%_-_32px))] rounded-xl border border-[#5A3030] bg-[#211E1A] px-6 py-5 text-center font-semibold text-[#A84040]">
        Error Occurred
      </p>
    );

  const animeCards = anime.map((anime) => (
    <AnimeCard canonicalTitle={anime.attributes.canonicalTitle} posterImgURL={anime.attributes.posterImage.medium} />
  ));
  return (
    <div className="mx-auto my-10 grid w-[min(1120px,calc(100%_-_32px))] grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
      {animeCards}
    </div>
  );
}

export default MostWatched;
