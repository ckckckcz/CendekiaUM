import Avatar from "./Header/Avatar.js";

export default function Header() {
    return (
        <>
            <section className="lg:h-[910px] flex items-center justify-center mt-4">
                <div className="py-8 px-4 mx-auto max-w-screen-xl">
                    {/* <Avatar /> */}
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#b17457] md:text-5xl lg:text-6xl lg:text-center text-left">
                        Belajar Secara Mandiri, Berkembang Secara Bersama
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl lg:text-center text-left">
                        Pendekatan pendidikan yang mengutamakan kebebasan belajar secara individu, sambil tetap memberikan dukungan dan kolaborasi dengan sesama pelajar.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#b17457] hover:bg-[#905C43] focus:ring-4 focus:ring-blue-300 w-full sm:w-auto">Ayo Belajar !</a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#b17457] focus:z-10 focus:ring-4 focus:ring-gray-100 w-full sm:w-auto text-center ">Panduan</a>
                    </div>
                </div>
            </section>
        </>
    );
  }