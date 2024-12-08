import People from "./Team/People";
export default function Team() {
    return(
    <section class="bg-blue-700">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-left">Team Hebat !</h1>
            <People/>
        </div>
    </section>
    );
}