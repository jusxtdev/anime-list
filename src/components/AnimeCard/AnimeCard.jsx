function AnimeCard({canonicalTitle, posterImgURL}) {
    return <div className="group overflow-hidden rounded-xl border border-[#2E2A26] bg-[#211E1A] shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-1 hover:border-[#5A3030] hover:bg-[#2A2622]">
        <div className="aspect-[2/3] overflow-hidden bg-[#1B1815]">
            <img src={posterImgURL} alt="poster" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        </div>
        <p className="line-clamp-2 min-h-14 px-4 py-3 text-sm font-semibold leading-5 text-[#D4CEC6] transition group-hover:text-[#C4A06A]">{canonicalTitle}</p>
    </div>;
}

export default AnimeCard;
