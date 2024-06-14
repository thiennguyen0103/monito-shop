import Image from "next/image";

const SearchInput = () => {
  return (
    <form className="hidden max-w-[280px] md:block">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <Image src="/u_search.svg" alt="Search icon" height={20} width={20} />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-neutral-00 placeholder-neutral-40 block w-full rounded-full p-3 ps-10 text-sm text-gray-900"
          placeholder="Search something here!"
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
