import Component1 from "./Component1";

export default function Home() {
  return (
    <>
      <Component1 />
      <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-all duration-300 ease-in-out flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              NO hello world de tomasin
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              LOs marcianos llegaron ya
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
