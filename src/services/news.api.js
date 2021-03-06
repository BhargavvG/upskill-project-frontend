import axios from "axios";

const client = axios.create({
  baseURL: "https://newsapi.org/v2/",
});
let sortBy="popularity"
// let sortBy="publishedAt"
let apiKey= "bcd45b15863642c59cc0d49756c7d0b9"

class NewsServices {
  getAllNews({q}) {
    return client.get(`everything?q=${q || 'top-headlines'}&sortBy=${sortBy}&apiKey=${apiKey}&from=2022-06-24`);
  }
  
}
let news = new NewsServices();
export default news;
