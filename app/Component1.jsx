export default function Component1() {
    return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-2 gap-5 p-10">
            <button className="rounded-full border border-solid border-transparent transition-all duration-300 ease-in-out flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            No me mires
            </button>
            <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            me amas?
            </button>
        </div>
      </main>
    );
  }
  