import React from 'react';
import { Table } from 'reactstrap';

const SearchEntitiesTable = (props) => {
    if (props.data) {
    const wantedKeys = ['concepturi', 'label', 'description', 'aliases'];

    const dropKeys = (obj) => {
        const filteredEntries = Object.entries(obj).filter((pair) => wantedKeys.includes(pair[0]));
        return Object.fromEntries(filteredEntries);
    };

    const filtered = props.data.map(obj => dropKeys(obj));

    const createTableData = (key, element) => {
        const tableData = (key === 'concepturi' ? <a href={element} target='_blank' rel='noopener noreferrer'>{element}</a> : element);
        return <td>{tableData}</td>;
    };

    return (
        <Table borderless responsive size='sm'>
            <thead>
                <tr>
                    {wantedKeys.map(columnName => <th>{columnName}</th>)}
                </tr>
            </thead>
            <tbody>
                {filtered.map(entry => <tr>{Object.entries(entry).map(([key, element]) => createTableData(key, element))}</tr>)}
            </tbody>
        </Table>
    );
    }
    else {
        return <div></div>;
    }
};

export default SearchEntitiesTable;
