import { join } from "path";

import fastifyStatic from "fastify-static";

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export const spaRoute = async (fastify) => {
  fastify.register(fastifyStatic, {
    root: join(__dirname, "public"),
    wildcard: false,
    cacheControl: true,
    etag: true,
    lastModified: true,
    maxAge: 31536000,
    preCompressed: true,
  });

  fastify.get("/main.js", (_req, reply) => {
    reply.header("content-encoding", "gzip");
    return reply.sendFile("main.js.gz", join(__dirname, "public"));
  });

  fastify.get("/favicon.ico", () => {
    throw fastify.httpErrors.notFound();
  });

  fastify.get("*", (_req, reply) => {
    reply.header("content-encoding", "gzip");
    return reply.sendFile("index.html.gz", join(__dirname, "public"));
  });
};
