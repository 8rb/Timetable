import React, { useState } from 'react'
import { TableContainer, Table, TH, TD, TDTime } from './TimetableStyles';
import TimeTableData from '../events';

const Timetable = () => {

    const [titles] = useState(['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    const [data] = useState(TimeTableData);

    const renderTableHeader = () => {
        return titles.map((key, index) => {
           return <TH key={index}>{key}</TH>
        })
    }

    const renderData = () => {
        return data.map(({time, monday, tuesday, wednesday, thursday, friday, saturday}, index) => {
            return <tr key={index}>
                <TDTime key={index}>{time}</TDTime>
                <TD color={monday?.color}>{monday?.name}</TD>
                <TD color={tuesday?.color}>{tuesday?.name}</TD>
                <TD color={wednesday?.color}>{wednesday?.name}</TD>
                <TD color={thursday?.color}>{thursday?.name}</TD>
                <TD color={friday?.color}>{friday?.name}</TD>
                <TD color={saturday?.color}>{saturday?.name}</TD>
            </tr>
        })
    }
    return (
        <TableContainer>
            <Table>
                <thead>
                    <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </Table>
        </TableContainer>
    )
}

export default Timetable;