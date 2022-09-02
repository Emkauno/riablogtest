import * as prismic from "@prismicio/client";
// import * as prismicNext from "@prismicio/next";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// export const linkResolver = doc => {
//   if (doc.type === "homepage") {
//     return `/`;
//   }
//   if (doc.type === "page") {
//     return `/${doc.uid}`;
//   }
//   return "/";
// };


export const linkResolver = doc => {
  const properties = doc._meta || doc;

  if (properties.type === "homepage") {
      return "/"
  }

  if (properties.type === "blog_post") {
    return `/blog/${doc.uid}`
  } 

  if (properties.type === "category") {
    return `/${doc.uid}`
  } 
  return "/";
};

export let repository = {};
export let locales = [];


/** 
*@type {prismic.ClientConfig["routes"]}
*/


// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
// export const createClient = async (config = {}) => {
//   const client = prismic.createClient(endpoint, {
//     ...config,
//   });
//   repository = await client.getRepository();
//   prismicNext.enableAutoPreviews({
//     client,
//     previewData: config.previewData,
//     req: config.req,
//   });
//   return client;
// };

// (async () => {
//   const client = createClient();
//   repository = await (await client).getRepository();
//   locales = repository.languages.map(lang => lang.id);
// })();

// Additional helper function for Next/Link component

export const hrefResolver = doc => {
  if (doc.type === "homepage") {
    return `/`;
  }

  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}` 
  }

};
