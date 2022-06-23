import axios from "axios";

const client = axios.create({
  baseURL: "https://newsapi.org/v2/",
});
let sortBy="publishedAt"
let apiKey= "bcd45b15863642c59cc0d49756c7d0b9"

class NewsServices {
  getAllNews({q}) {
    return client.get(`everything?q=${q || 'top-headlines'}&sortBy=${sortBy}&apiKey=${apiKey}`);
  }
  
}
let news = new NewsServices();
export default news;
