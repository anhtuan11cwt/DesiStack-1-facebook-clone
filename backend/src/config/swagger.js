import swaggerJsdoc from "swagger-jsdoc";

const options = {
  apis: ["./src/routes/*.js", "./src/models/*.js"],
  definition: {
    info: {
      description: "Tài liệu API cho dự án Facebook Clone",
      title: "API Facebook Clone",
      version: "1.0.0",
    },
    openapi: "3.0.0",
    servers: [
      {
        description: "Máy chủ phát triển",
        url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      },
    ],
  },
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
