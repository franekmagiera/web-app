import React from 'react';
import { Table } from 'reactstrap';

const RightPane = (props) => {
    // TODO: add exception/null/undefined checks.
    if (!props.data) {
        return <div></div>;
    }

    const columnNames = (props.data.columns);

    const createTableData = (key, element) => {
        const tableData = (key === 'concepturi' ? <a href={element} target='_blank' rel='noopener noreferrer'>{element}</a> : element);
        return <td>{tableData}</td>;
    };

    return (
        <div>
            <Table borderless responsive size='sm'>
                <thead>
                    <tr>
                        {columnNames.map(columnName => <th>{columnName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.entities.map(entry => <tr>{Object.entries(entry).map(([key, element]) => createTableData(key, element))}</tr>)}
                </tbody>
            </Table>
        </div>
    )
};

export default RightPane;