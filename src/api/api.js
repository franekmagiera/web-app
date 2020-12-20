import axios from 'axios';
import WBK from 'wikibase-sdk';

const DB_INSTANCE = 'https://www.wikidata.org';
const SPARQL_ENDPOINT = 'https://query.wikidata.org/sparql';
const wdk = WBK({
    instance: DB_INSTANCE,
    sparqlEndpoint: SPARQL_ENDPOINT
});
const wantedKeys = ['concepturi', 'label', 'description', 'aliases'];

const dropKeys = (obj) => {
    const filteredEntries = Object.entries(obj).filter((pair) => wantedKeys.includes(pair[0]));
    return Object.fromEntries(filteredEntries);
};

export const searchEntities = async (search, language) => {
    const url = wdk.searchEntities({ search, language });
    // TODO: add exception handling for api call failure and result.data.search etc. being undefined.
    const result = await axios.get(url);
    const filtered = (result.data.search).map(obj => dropKeys(obj));
    return {
        entities: filtered,
        columns: wantedKeys
    };
};

export const executeQuery = async (query) => {
    // TODO: add exception handling.
    const [url, body] = wdk.sparqlQuery(query).split('?');
    const result = await axios.post(url, body);
    return result.data;
};