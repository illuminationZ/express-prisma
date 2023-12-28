export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "A simple Express Todo API",
    },
  },
  //   apis: [".//routes/*.js"], // files containing annotations as above
  apis: ["./src/routes/todoRoute.js"],
};
