import logo from "./logo.png";

function Header() {
  return (
    <div className="relative z-30 mx-auto mt-6 mb-10 flex w-[min(1450px,calc(100%-32px))] flex-row items-center justify-between gap-6 rounded-2xl border border-[#2E2A26] bg-[#1B1815] px-8 py-2 text-[#D4CEC6] shadow-[0_18px_60px_rgba(0,0,0,0.32)]">
      <div id="logo" className="flex shrink-0 items-center">
        <img
          src={logo}
          className="h-13 w-13 rounded-full border border-[#5A3030] bg-[#2A2622] p-1 object-cover shadow-[0_10px_28px_rgba(0,0,0,0.36)]"
        />
      </div>
      <div id="search" className="flex w-full max-w-md items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="h-11 w-full rounded-lg border border-[#2E2A26] bg-[#211E1A] px-4 text-[#D4CEC6] caret-[#C4A06A] outline-none transition placeholder:text-[#837C74] focus:border-[#A8823A] focus:bg-[#2A2622] focus:ring-4 focus:ring-[#A8823A]/15"
        />
        <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2E2A26] bg-[#211E1A] text-[#D4CEC6] transition hover:-translate-y-0.5 hover:border-[#5A3030] hover:bg-[#2A2622] hover:text-[#C4A06A] active:translate-y-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
