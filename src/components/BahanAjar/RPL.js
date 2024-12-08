export default function PPT(){
    return(
    <section class="bg-transparent">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">RPL</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">Dalam era globalisasi dan perkembangan pesat teknologi informasi, pendekatan pembelajaran yang inovatif dan relevan menjadi kebutuhan mendesak dalam dunia pendidikan. Metode pembelajaran kontekstual muncul sebagai salah satu pendekatan yang mampu menghubungkan materi pembelajaran dengan kehidupan nyata, sehingga membantu siswa mengembangkan pemahaman yang lebih mendalam. 
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Baca Selengkapnya
                    </a>
                </div>
            </div>
            <div>
                <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
    );
}