import MostWatched from "../MostWatched/MostWatched";
import cover from "./cover.jpg";

function Home() {
    return (
        <div className="relative -mt-32 overflow-hidden pt-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-180">
                <img
                    src={cover}
                    alt=""
                    className="h-full w-full object-cover opacity-[1]"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#141210] via-[#141210]/10 via-55% to-[#141210]" />
                <div className="absolute inset-0 bg-linear-to-r from-[#141210]/80 via-[#141210]/20 to-[#141210]/80" />
            </div>
            <div className="relative z-10 h-90" />
            <div className="relative z-10 -mt-10">
                <p className="mx-auto flex w-[min(1120px,calc(100%-32px))] items-center gap-4 text-sm font-bold uppercase tracking-[0.26em] text-[#b8b33b] before:h-0.5 before:w-5 before:rounded-full before:bg-[#A84040] after:h-px after:flex-1 after:bg-[#2E2A26]">
                    Trending Anime
                </p>
                <MostWatched />
            </div>
        </div>
    );
}

export default Home;
