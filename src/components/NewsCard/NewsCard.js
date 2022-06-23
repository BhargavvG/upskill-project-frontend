import React, { useState } from 'react'

export default function NewsCard({ news }) {
  let date = new Date(news?.publishedAt)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  return (
    <>
      <div class="snip1253 font-['Raleway', Arial, sans-serif] relative overflow-hidden m-3 min-w-[250px] max-w-[310px] w-full bg-[#ffffff] text-black text-base shadow-lg text-left p-2 transition duration-300 ease ">
        <div class="image max-h-[220px] overflow-hidden">
          <img
            src={news.urlToImage}
            className="relative max-w-full align-top hover:scale-110"
            alt="sample52"
            onError={(e) => {
              // e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg'
              e.target.src = 'https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg'
            }}
          />
        </div>
        <section className="relative p-4 bg-white mt-[-40px] mx-4">
          <div class="date bg-[#2980b9] top-4 text-white left-4 min-h-[48px] min-w-[48px] absolute text-center text-lg font-bold uppercase">
            <span class="day leading-6 block">{date.getDay()}</span>
            <span class="month text-sm bg-[#0000001a]">{months[date.getMonth()]}</span>
          </div>
          <h3 className="p-0 m-0 min-h-[50px] mb-3 ml-16 inline-block font-semibold uppercase">{news.title}</h3>
          <p className="p-0 m-0 mb-4 text-sm leading-4">{news.description}</p>
        </section>
        <footer className="bg-[#20638f] text-sm text-center leading-7 text-white font-medium uppercase">
          <a href={news.url}>View Article</a>
        </footer>
      </div>
    </>
  )
}
