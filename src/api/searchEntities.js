import axios from 'axios';
import WBK from 'wikibase-sdk';

const DB_INSTANCE = 'https://www.wikidata.org';
const SPARQL_ENDPOINT = 'https://query.wikidata.org/sparql';
const wdk = WBK({
    instance: DB_INSTANCE,
    sparqlEndpoint: SPARQL_ENDPOINT
});

const dropKeys = (obj) => {
    const wantedKeys = ['concepturi', 'label', 'description'];
    const filteredEntries = Object.entries(obj).filter((pair) => wantedKeys.includes(pair[0]));
    return Object.fromEntries(filteredEntries);
};

const searchEntities = async (search, language) => {
    const url = wdk.searchEntities({ search, language });
    // TODO: add exception handling for api call failure and result.data.search etc. being undefined.
    const result = await axios.get(url);
    console.log(result.data.search);
    const filtered = (result.data.search).map(obj => dropKeys(obj));
    return filtered;
};

export default searchEntities;
