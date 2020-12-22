import React from 'react';
import DataSourceEnum from './DataSourceEnum.js';
import SearchEntitiesTable from './SearchEntitiesTable.js';
import SparqlTable from './SparqlTable.js';

const RightPane = (props) => {
    
    const componentMapping = Object.freeze({
        [DataSourceEnum.SEARCH_ENTITIES]: <SearchEntitiesTable data={props.data} />,
        [DataSourceEnum.SPARQL_QUERY]: <SparqlTable data={props.data} />
    });

    return (
        <div>
            {componentMapping[props.dataSourceType]}
        </div>
    );
};

export default RightPane;