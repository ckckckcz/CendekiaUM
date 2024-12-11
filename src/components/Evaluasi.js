import Quiz from "../assets/img/qrCode.png"
export default function Evaluasi() {
    return (
        <>
        <section class="bg-[#b17457] flex items-center justify-center">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none lg:text-center text-left text-white md:text-5xl lg:text-6xl">Evaluasi Pembelajaran</h1>
                <p class="mb-8 text-lg font-normal text-gray-200 lg:text-xl lg:text-center text-left">Pastikan pemahamanmu solid dengan menjawab kuis interaktif kami. Raih skor terbaik dan jadilah lebih unggul</p>
                <div class="flex -space-x-4 rtl:space-x-reverse lg:justify-center md:justify-center justify-center mb-4 ">
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-3xl shadow flex flex-col items-center justify-center text-center">
                        <img src={Quiz} alt="Quiz Image" />
                    </div>
                </div>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-72 lg:w-80 h-px my-8 bg-blue-200 border-0 " />
                    <span class="absolute px-3 font-medium text-white -translate-x-1/2 bg-[#b17457] left-1/2 ">atau</span>
                </div>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="https://quizizz.com/join?gc=50801760" target="_blank" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#b17457] focus:z-10 focus:ring-4 focus:ring-gray-100">
                        Mulai Quiz !
                    </a>  
                </div>
            </div>
        </section>
        </>
    );

}