import Testimoni1 from "../../assets/img/testimoni/testimoni1.png"
import Testimoni2 from "../../assets/img/testimoni/testimoni2.png"
import Testimoni3 from "../../assets/img/testimoni/testimoni3.png"
export default function Avatar(){
    return(
        <>
            <div class="flex lg:justify-center justify-left gap-3 items-center mb-4">
                <div class="flex -space-x-4 rtl:space-x-reverse lg:justify-center justify-left">
                    <img class="w-10 h-10 border-2 border-white rounded-full object-cover" src={Testimoni1} alt="" />
                    <img class="w-10 h-10 border-2 border-white rounded-full object-cover" src={Testimoni2} alt="" />
                    <img class="w-10 h-10 border-2 border-white rounded-full object-cover" src={Testimoni3} alt="" />
                    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-blue-700 border-2 border-white rounded-full hover:bg-blue-800"href="#">+99</a>
                </div>
                <p class="font-medium text-lg lg:block hidden">Pengguna Produktif!!</p>
            </div>
        </>
    );
}