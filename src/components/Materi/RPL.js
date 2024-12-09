export default function RPL() {
    return (
        <section className="bg-transparent">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    RPL
                    </h1>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Baca Selengkapnya
                    </a>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <iframe
                    className="mx-auto w-full lg:max-w-xl h-64 rounded-2xl sm:h-96 shadow-xl"
                    src="https://drive.google.com/file/d/{nanti diisi}/preview"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}