import client from "./client";

class ChannelServices {
  getAllChannels() {
    return client.get("/channel");
  }
  getChannelById(id) {
    return client.get(`/channel/${id}`);
  }
  addChannel(body) {
    return client.post("/channel/add", body);
  }
  updateChannel(id, body) {
    return client.put(`/channel/update${id}`, body);
  }
}
let channel = new ChannelServices();
export default channel;
