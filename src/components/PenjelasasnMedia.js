export default function PenjelasanMedia() {
    return(
        <>
            <section class="bg-transparent">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                    <div class="text-information">
                        <h1 class="text-5xl font-extrabold tracking-tight leading-none mb-8 md:text-5xl lg:text-6xl text-left text-[#b17457]">Petunjuk Penggunaaan Media</h1>     
                        <div class="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 items-stretch">
                            <div class="card-1">
                                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-full">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Persiapan sebelum penggunaan</h5>
                                    <p class="font-normal text-gray-700">Pastikan perangkat yang digunakan (komputer/laptop/smartphone) memiliki koneksi internet yang stabil.</p>
                                </a>
                            </div>
                            <div class="card-1">
                                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-full">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Menavigasi website</h5>
                                    <p class="font-normal text-gray-700">Masuk ke website media pembelajaran yang telah disediakan.</p>
                                </a>
                            </div>
                            <div class="card-1">
                                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-full">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Menggunakan fitur interaktif pada media pembelajaran</h5>
                                    {/* <p class="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}