import React, { useState, useEffect } from 'react';
import Data from "../../server/Blog.json";

function Blog() {
    const [content, setContent] = useState(null);

    const loadData = () => {
        const fileName = window.location.pathname.split("/").pop();
        if (fileName === 'rpl') {
            setContent(Data.BlogRPL);
        } else if (fileName === 'bahanajar') {
            setContent(Data.BlogBahanAjar);
        } else if (fileName === 'VideoPembelajaran') {
            setContent(Data.BlogVideoPembelajaran);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (!content) {
        return (
        <div className='flex justify-center items-center mt-20 mb-20'>
            <button disabled type="button" className="text-white bg-[#b17457] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 a inline-flex items-center">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg>
            Sebentar ya...
            </button>
        </div>
        );
    }

    return (
        <section className="bg-transparent min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#b17457] md:text-5xl lg:text-6xl">{content.title}</h1>
            <hr class="h-px my-8 bg-gray-300 border-0" />
            <h3 className='font-bold md:text-3xl lg:text-3xl text-2xl text-gray-800 mt-7 lg:mt-10'>{content.topicOne}</h3>   
            <p className="mb-8 text-lg text-gray-600 mt-1 font-medium lg:text-xl">{content.descriptionOne}</p>
            {/* jeda */}
            <h3 className='font-bold md:text-3xl lg:text-3xl text-2xl text-gray-800 mt-7 lg:mt-10'>{content.topicTwo}</h3>   
            <ul className="space-y-2 mb-8 mt-1 font-medium text-gray-500 list-disc list-inside">
                {content.descriptionTwo.map((item, index) => (
                    <li className='mb-2' key={index}>{item}</li>
                ))}
            </ul>
            {/* jeda */}
            {content.videos.map((videoUrl, index) => (
                <iframe
                key={index}
                className="w-full h-[600px] rounded-3xl"
                src={videoUrl}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
            ))}
        </div>
        </section>
    );
}

export default Blog;
