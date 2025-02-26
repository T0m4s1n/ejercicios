//Ejercicios de imitar el appareance el 26/02/2025 tomasin
import { CircleDashed, Play, ChevronDown } from "lucide-react";
import { Image as Icon3 } from "lucide-react";

export default function AppareanceExerciseT0m4s1n() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen py-8 bg-gray-50">
      <article className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto">
        <header className="mb-6">
          <h2 className="text-lg font-medium text-gray-800">Appearance</h2>
          <p className="text-sm text-gray-400">set or customize your preferences for the system</p>
        </header>
        <hr className="border-t border-gray-100 mb-6" />
        <section className="mb-6">
          <figure className="flex justify-between items-center">
            <figcaption>
              <h3 className="text-sm font-medium text-gray-800 mb-1">Language</h3>
              <p className="text-sm text-gray-400">select the language of the platform</p>
            </figcaption>
            <div className="relative">
              <button className="flex items-center justify-between w-32 px-3 py-2 bg-white border border-gray-200 rounded-md">
                <span className="text-gray-600 text-sm font-normal">English</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>
          </figure>
        </section>
        <section className="border-t border-gray-100 pt-6 mb-6">
          <h3 className="text-sm font-medium text-gray-800 mb-1">Interface theme</h3>
          <p className="text-sm text-gray-400">Customize your application appereance</p>
          <ul className="flex justify-between mt-4">
            <li className="flex flex-col items-center">
              <figure className="rounded-lg w-20 h-16 flex overflow-hidden mb-2">
                <div className="flex w-full h-full">
                  <div className="w-1/2 bg-purple-100 p-1">
                    <span className="bg-purple-300 h-1 w-6 mb-1 rounded block"></span>
                    <span className="bg-purple-300 h-1 w-5 mb-1 rounded block"></span>
                    <span className="bg-purple-300 h-1 w-4 mb-1 rounded block"></span>
                    <span className="bg-purple-200 h-5 w-full rounded-sm mt-1">
                      <span className="bg-purple-300 h-0.5 w-6 mt-1 ml-0.5 rounded block"></span>
                      <span className="bg-purple-300 h-0.5 w-5 mt-0.5 ml-0.5 rounded block"></span>
                      <span className="bg-purple-300 h-0.5 w-4 mt-0.5 ml-0.5 rounded block"></span>
                    </span>
                  </div>
                  {/* Dark side */}
                  <div className="w-1/2 bg-indigo-800 p-1">
                    <span className="bg-indigo-700 h-1 w-6 mb-1 rounded block"></span>
                    <span className="bg-indigo-700 h-1 w-5 mb-1 rounded block"></span>
                    <span className="bg-indigo-700 h-1 w-4 mb-1 rounded block"></span>
                    <span className="bg-indigo-600 h-5 w-full rounded-sm mt-1">
                      <span className="bg-indigo-700 h-0.5 w-6 mt-1 ml-0.5 rounded block"></span>
                      <span className="bg-indigo-700 h-0.5 w-5 mt-0.5 ml-0.5 rounded block"></span>
                      <span className="bg-indigo-700 h-0.5 w-4 mt-0.5 ml-0.5 rounded block"></span>
                    </span>
                  </div>
                </div>
              </figure>
              <figcaption className="text-xs text-gray-500">Auto</figcaption>
            </li>
            <li className="flex flex-col items-center">
              <figure className="border-2 border-indigo-500 bg-white rounded-lg w-20 h-16 flex flex-col p-2 mb-2 relative">
                <span className="bg-gray-200 h-1 w-12 mb-1 rounded"></span>
                <span className="bg-gray-200 h-1 w-10 mb-1 rounded"></span>
                <span className="bg-gray-200 h-1 w-8 mb-1 rounded"></span>
                <span className="bg-gray-100 h-5 w-full rounded-sm mt-1">
                  <span className="bg-gray-200 h-0.5 w-14 mt-1 ml-1 rounded block"></span>
                  <span className="bg-gray-200 h-0.5 w-12 mt-0.5 ml-1 rounded block"></span>
                  <span className="bg-gray-200 h-0.5 w-10 mt-0.5 ml-1 rounded block"></span>
                </span>
                <span className="absolute bottom-1 left-1 bg-indigo-500 rounded-full h-3 w-3 flex items-center justify-center">
                  <span className="bg-white rounded-full h-1.5 w-1.5"></span>
                </span>
              </figure>
              <figcaption className="text-xs text-indigo-500">Light</figcaption>
            </li>
            <li className="flex flex-col items-center">
              <figure className="bg-indigo-800 rounded-lg w-20 h-16 flex flex-col p-2 mb-2">
                <span className="bg-indigo-700 h-1 w-12 mb-1 rounded"></span>
                <span className="bg-indigo-700 h-1 w-10 mb-1 rounded"></span>
                <span className="bg-indigo-700 h-1 w-8 mb-1 rounded"></span>
                <span className="bg-indigo-600 h-5 w-full rounded-sm mt-1">
                  <span className="bg-indigo-700 h-0.5 w-14 mt-1 ml-1 rounded block"></span>
                  <span className="bg-indigo-700 h-0.5 w-12 mt-0.5 ml-1 rounded block"></span>
                  <span className="bg-indigo-700 h-0.5 w-10 mt-0.5 ml-1 rounded block"></span>
                </span>
              </figure>
              <figcaption className="text-xs text-gray-500">Dark</figcaption>
            </li>
          </ul>
        </section>
        <section className="border-t border-gray-100 pt-6 mb-6">
          <figure className="flex justify-between items-center">
            <figcaption>
              <h3 className="text-sm font-medium text-gray-800 mb-1">Accent color</h3>
              <p className="text-sm text-gray-400">Pick your platforms main color</p>
            </figcaption>
            <menu className="flex space-x-2">
              <li className="h-6 w-6 rounded-full bg-red-400"></li>
              <li className="h-6 w-6 rounded-full bg-yellow-400"></li>
              <li className="h-6 w-6 rounded-full bg-green-400"></li>
              <li className="h-6 w-6 rounded-full bg-indigo-500"></li>
              <li className="h-6 w-6 rounded-full bg-pink-400"></li>
            </menu>
          </figure>
        </section>
        <section className="border-t border-gray-100 pt-6 space-y-4">
          <figure className="flex items-center justify-between">
            <figcaption className="flex items-center">
              <span className="mr-3 text-gray-400">
                <CircleDashed size={20} />
              </span>
              <span className="text-sm text-gray-600">Reduce motion</span>
            </figcaption>
            <label className="bg-indigo-500 w-10 h-5 rounded-full flex items-center justify-end p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
            </label>
          </figure>
          <hr className="border-t border-gray-100" />
          <figure className="flex items-center justify-between">
            <figcaption className="flex items-center">
              <span className="mr-3 text-gray-400">
                <Play size={20} />
              </span>
              <span className="text-sm text-gray-600">Auto play</span>
            </figcaption>
            <label className="bg-indigo-500 w-10 h-5 rounded-full flex items-center justify-end p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
            </label>
          </figure>
          <hr className="border-t border-gray-100" />
          <figure className="flex items-center justify-between">
            <figcaption className="flex items-center">
              <span className="mr-3 text-gray-400">
                <Icon3 size={20} />
              </span>
              <span className="text-sm text-gray-600">High quality photo</span>
            </figcaption>
            <label className="bg-gray-200 w-10 h-5 rounded-full flex items-center p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
            </label>
          </figure>
        </section>
        <footer className="flex justify-between items-center pt-6 mt-6 border-t border-gray-100">
          <button className="text-sm text-gray-400">Reset to default</button>
          <nav className="flex space-x-2">
            <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-md">Cancel</button>
            <button className="px-4 py-2 text-sm text-white font-medium rounded-md bg-indigo-600">Save Preferences</button>
          </nav>
        </footer>
      </article>
    </main>
  );
};