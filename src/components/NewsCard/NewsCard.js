import React, { useState } from "react";

export default function NewsCard() {
  const [news, setNews] = useState({
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Two Twitter bosses ousted ahead of Elon Musk $44bn takeover",
    description:
      "One of the senior executives was on parental leave when he learned he was out of a job.",
    url: "http://www.bbc.co.uk/news/business-61432742",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
    publishedAt: "2022-05-13T02:52:19.8905225Z",
    content:
      "By Peter HoskinsBusiness reporter\r\nImage source, Getty Images\r\nTwo senior Twitter bosses are leaving the social media company in one of the biggest shake-ups since Elon Musk agreed to buy the firm.\r\n… [+2064 chars]",
  });
  let date = new Date(news.publishedAt);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      <div class="snip1253 font-['Raleway', Arial, sans-serif] relative overflow-hidden m-3 min-w-[250px] max-w-[310px] w-full bg-[#ffffff] text-black text-base shadow-lg text-left p-2 transition duration-300 ease ">
        <div class="image max-h-[220px] overflow-hidden">
          <img src={news.urlToImage} className="relative max-w-full align-top hover:scale-110" alt="sample52" />
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
  );
}
