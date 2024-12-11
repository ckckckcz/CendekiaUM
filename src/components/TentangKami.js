import Learning from "../assets/img/learning.png";
export default function Tujuan() {
    return (
        <>
            <section class="bg-[#b17457]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                    <div class="grid grid-cols-1 lg:grid lg:grid-cols-2 justify-between lg:gap-12">
                        <div class="text-information">
                            <h1 class="text-5xl font-extrabold tracking-tight leading-none text-white mb-8 md:text-5xl lg:text-6xl text-left">Mengenal Cendekia</h1>
                            <p className="mb-8 text-xl font-normal text-left text-gray-200 lg:text-xl">
                            Cendekia merupakan platform pembelajaran yang memanfaatkan teknologi dalam bentuk website ntuk menyampaikan materi edukasi kepada mahasiswa.Website ini dirancang dengan berbagai fitur interaktif yang mendukung proses belajar mahasiswa, seperti beranda, RPL, video pembelajaran dan kuis. Tujuan dari pembuatan website Cendekia ini adalah agar memudahkan mahasiswa untuk mengakses materi di mana saja dan kapan saja tanpa terbatas oleh waktu, membuat proses belajar lebih menarik karena adanya ilustrasi dan video pembelajaran, dan meningkatkan kemampuan kolaboratif mahasiswa. 
                            </p>
                        </div>
                        <div class="image-information">
                            <img src={Learning} class="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}