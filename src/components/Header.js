import Avatar from "./Header/Avatar.js";

export default function Header() {
    return(
        <>
        <section class="bg-transparent mt-4 lg:mt-14">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <Avatar />
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl lg:text-center text-left md:text-left">Belajar Secara Mandiri, Berkembang Secara Bersama</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl lg:text-center text-left md:text-left">Pendekatan pendidikan yang mengutamakan kebebasan belajar secara individu, sambil tetap memberikan dukungan dan kolaborasi dengan sesama pelajar.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                        Ayo Belajar !
                    </a>
                    <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                        Panduan
                    </a>  
                </div>
            </div>
        </section>
        </>
    );
}