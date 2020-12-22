import axios from 'axios';
import WBK from 'wikibase-sdk';

const DB_INSTANCE = 'https://www.wikidata.org';
const SPARQL_ENDPOINT = 'https://query.wikidata.org/sparql';
const wdk = WBK({
    instance: DB_INSTANCE,
    sparqlEndpoint: SPARQL_ENDPOINT
});

// Throws an error if network request fails.
export const searchEntities = async (search, language) => {
    const url = wdk.searchEntities({ search, language });
    const result = await axios.get(url);
    return result.data.search;
};

// Throws an error if network request fails.
export const executeQuery = async (query) => {
    const [url, body] = wdk.sparqlQuery(query).split('?');
    const result = await axios.post(url, body);
    return result.data;
};
