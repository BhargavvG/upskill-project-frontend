import React, { useState } from "react";
import "./news.css";

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
          <p className="p-0 m-0 mb-4 text-sm leading-3">{news.description}</p>
        </section>
        <footer className="bg-[#20638f] text-sm text-right leading-7">
          <a href={news.url}>View Article</a>
        </footer>
      </div>
      {/* <figure class="snip1253 hover">
        <div class="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg"
            alt="sample66"
          />
        </div>
        <figcaption>
          <div class="date">
            <span class="day">17</span>
            <span class="month">Nov</span>
          </div>
          <h3>An Abstract Post Heading</h3>
          <p>
            Sometimes the surest sign that intelligent life exists elsewhere in
            the universe is that none of it has tried to contact us.
          </p>
        </figcaption>
        <footer>
          <div class="views">
            <i class="ion-eye"></i>1,870
          </div>
          <div class="love">
            <i class="ion-heart"></i>973
          </div>
          <div class="comments">
            <i class="ion-chatboxes"></i>85
          </div>
        </footer>
        <a href="#"></a>
      </figure>
        <div class="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample59.jpg"
            alt="sample59"
          />
        </div>
        <figcaption>
          <div class="date">
            <span class="day">01</span>
            <span class="month">Dec</span>
          </div>
          <h3>Down with this sort of thing</h3>
          <p>
            I don't need to compromise my principles, they don't have the
            slightest bearing on what happens to me anyway.
          </p>
        </figcaption>
        <footer>
          <div class="views">
            <i class="ion-eye"></i>928
          </div>
          <div class="love">
            <i class="ion-heart"></i>198
          </div>
          <div class="comments">
            <i class="ion-chatboxes"></i>23
          </div>
        </footer>
        <a href="#"></a>
  </figure> */}
    </>
  );
}
