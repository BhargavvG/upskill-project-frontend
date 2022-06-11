import axios from "axios";

const client = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: { "access-token": token },
});
let sortBy="publishedAt"
let apiKey= "bcd45b15863642c59cc0d49756c7d0b9"

class NewsServices {
  getAllNews() {
    return client.get("/");
  }
  
}
let news = new NewsServices();
export default news;
