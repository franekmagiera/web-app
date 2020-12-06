import React from 'react';
import { Table } from 'reactstrap';

const RightPane = (props) => {
    // TODO: add exception/null/undefined checks.
    if (!props.data) {
        return <div></div>;
    }
    const columnNames = Object.keys(props.data[0]);
    return (
        <div>
            <Table hover borderless responsive size='sm'>
                <thead>
                    <tr>
                        {columnNames.map(columnName => <th>{columnName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(entry => <tr>{Object.values(entry).map(element => <td>{element}</td>)}</tr>)}
                </tbody>
            </Table>
        </div>
    )
};

export default RightPane;