import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

const handler = createStartHandler(defaultStreamHandler);

export default {
  fetch(req: Request) {
    return handler(req);
  },
};
