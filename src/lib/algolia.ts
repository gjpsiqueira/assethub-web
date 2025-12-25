import { algoliasearch } from "algoliasearch";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "";
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? "";
export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? "";

export const searchClient = algoliasearch(appId, apiKey);
