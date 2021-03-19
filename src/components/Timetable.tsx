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
        return data.map(({time, monday, tuesday, wednesday, friday, saturday}, index) => {
            return <tr key={index}>
                <TDTime key={index}>{time}</TDTime>
                <TD color={monday?.class.color} type={monday?.type}>{monday?.class.name}</TD>
                <TD color={tuesday?.class.color} type={tuesday?.type}>{tuesday?.class.name}</TD>
                <TD color={wednesday?.class.color} type={wednesday?.type}>{wednesday?.class.name}</TD>
                <TD></TD>
                <TD color={friday?.class.color} type={friday?.type}>{friday?.class.name}</TD>
                <TD color={saturday?.class.color} type={saturday?.type}>{saturday?.class.name}</TD>
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