import RPL from "./Materi/RPL";
import BahanAjar from "./Materi/BahanAjar";
import VideoPembelajaran from "./Materi/VideoPembelajaran";
export default function Materi() {
    return (
        <>
            <RPL/>
            <BahanAjar/>
            <VideoPembelajaran/>
            {/* <section class="bg-transparent">
                <div class="flex justify-center items-center">
                    <div class="flex flex-col gap-5 border border-gray-200 rounded-lg shadow p-6 w-1/2">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl lg:text-center text-left md:text-left">Bahan Ajar</h1>
                        <div class="flex gap-5">
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PPT</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Menyediakan PPT Pembelajaran yang berkualitas </p>
                            </a>
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Makalah</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Menyediakan Makalah Pembelajaran yang berkualitas </p>
                            </a>
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Video</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Menyediakan Video Pembelajaran yang informatif</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );

}