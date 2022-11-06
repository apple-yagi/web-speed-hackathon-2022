import { join } from "path";

import fastifyStatic from "fastify-static";

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export const spaRoute = async (fastify) => {
  fastify.register(fastifyStatic, {
    root: join(__dirname, "public/assets"),
    prefix: "/assets",
    wildcard: false,
  });

  fastify.get("/favicon.ico", () => {
    throw fastify.httpErrors.notFound();
  });

  fastify.get("/main.js", (_req, reply) => {
    reply.header("content-encoding", "gzip");
    return reply.sendFile("main.js.gz", join(__dirname, "public"));
  });

  fastify.get("/403.chunk.js", (_req, reply) => {
    reply.header("content-encoding", "gzip");
    return reply.sendFile("403.chunk.js.gz", join(__dirname, "public"));
  });

  fastify.get("*", (_req, reply) => {
    return reply.sendFile("index.html", join(__dirname, "public"));
  });
};
