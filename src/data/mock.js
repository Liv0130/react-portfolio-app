//mock.js
import { createServer, Model } from "miragejs";

const createMockServer = function () {
  let server = createServer({
    models: {
      comments: Model,
    },
  });

  return server;
};

export default createMockServer;
