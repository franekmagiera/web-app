import React from 'react';
import { Table } from 'reactstrap';

const SparqlTable = (props) => {

    if (props.data) {
        const columnNames = props.data.head.vars;
        const data = props.data.results.bindings;

        const createTableData = (value) => {
            const tableData = (value.type === 'uri') ? <a href={value.value} target='_blank' rel='noopener noreferrer'>{value.value}</a> : value.value;
            return <td>{tableData}</td>;
        }
        
        return (
            <div>
                <Table borderless responsive size='sm'>
                    <thead>
                        <tr>
                            {columnNames.map(columnName => <th>{columnName}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(obj => <tr>{Object.values(obj).map(createTableData)}</tr>)}
                    </tbody>
                </Table>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default SparqlTable;
