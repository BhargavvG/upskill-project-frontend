import client from "./client";

class TweetServices {
  getAllTweets() {
    return client.get("/tweet");
  }
  getTweetById(id) {
    return client.get(`/tweet/${id}`);
  }
  getTweetByUser() {
    return client.get(`/tweet/byUsers`);
  }
  getTweetByChannels(body) {
    return client.post(`/tweet/byChannels`, body);
  }
  addTweet(body) {
    return client.post("/tweet/", body);
  }
  updateTweet(id, body) {
    return client.put(`/tweet/update/${id}`, body);
  }
  deleteTweet(id, body) {
    return client.delete(`/tweet/delete/${id}`);
  }
  like(id) {
    return client.post(`/tweet/like/${id}`);
  }
}
let tweet = new TweetServices();
export default tweet;
