import axios from 'axios';
import WBK from 'wikibase-sdk';

const DB_INSTANCE = 'https://www.wikidata.org';
const SPARQL_ENDPOINT = 'https://query.wikidata.org/sparql';
const wdk = WBK({
    instance: DB_INSTANCE,
    sparqlEndpoint: SPARQL_ENDPOINT
});

const searchEntities = async (search, language) => {
    const url = wdk.searchEntities({ search, language });
    const result = await axios.get(url);
    return result.data.search;
};

export default searchEntities;
