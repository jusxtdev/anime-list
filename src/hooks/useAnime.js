import { useEffect, useState } from "react";
import { getTop5TrendingAnime } from "../services/animeAPI";

export function useAnime() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnime() {
      try {
        const data = await getTop5TrendingAnime();
        setAnime(data);
      } catch (e) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadAnime();
  });

  return { anime, loading, error };
}
