import { useState } from 'react'
import {
	TableContainer,
	Table,
	TH,
	TD,
	TDTime,
	Modal,
	ModalSubTitleRow,
	ModalTitle,
	ModalSubTitle,
	ModalText,
} from './TimetableStyles'
import TimeTableData from '../events/events'

type Class = {
	name: string
	color: string
	code: string
	class: string
	professor: string
	type?: string
}

const Timetable = () => {
	const [titles] = useState([
		'Time',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	])
	const [data] = useState(TimeTableData)
	const [showModal, setShowModal] = useState(false)
	const [actualClass, setActualClass] = useState<Class>()

	const renderModal = () => {
		return (
			actualClass && (
				<Modal
					color={actualClass.color}
					onClick={() => {
						toggleModal(undefined)
					}}
				>
					<ModalTitle>{actualClass.name}</ModalTitle>
					<ModalSubTitleRow>
						<ModalSubTitle>{actualClass.code}</ModalSubTitle>
						<ModalSubTitle>{actualClass.class}</ModalSubTitle>
					</ModalSubTitleRow>
					<ModalText>{actualClass.professor}</ModalText>
				</Modal>
			)
		)
	}

	const toggleModal = (clickedClass: Class | undefined) => {
		if (clickedClass) {
			setShowModal(true)
			setActualClass(clickedClass)
		} else {
			setShowModal(false)
		}
	}

	const renderTableHeader = () => {
		return titles.map((key, index) => {
			return <TH key={index}>{key}</TH>
		})
	}

	const renderDataCell = (
		actualClass: Class | undefined,
		type: string | undefined
	) => {
		if (type === 'first') {
			return (
				<TD
					onClick={() => {
						toggleModal(actualClass)
					}}
					color={actualClass?.color}
					type={type}
				>
					{actualClass?.name}
				</TD>
			)
		} else if (type === 'last') {
			return (
				<TD
					onClick={() => {
						toggleModal(actualClass)
					}}
					color={actualClass?.color}
					type={type}
				>
					{actualClass?.class}
				</TD>
			)
		} else if (type === 'middle') {
			return (
				<TD
					onClick={() => {
						toggleModal(actualClass)
					}}
					color={actualClass?.color}
					type={type}
				>
					{'-'}
				</TD>
			)
		} else {
			return (
				<TD
					onClick={() => {
						toggleModal(undefined)
					}}
				></TD>
			)
		}
	}

	const renderData = () => {
		return data.map(
			(
				{ time, monday, tuesday, wednesday, thursday, friday, saturday },
				index
			) => {
				return (
					<tr key={index}>
						<TDTime key={index}>{time}</TDTime>
						{renderDataCell(monday?.class, monday?.type)}
						{renderDataCell(tuesday?.class, tuesday?.type)}
						{renderDataCell(wednesday?.class, wednesday?.type)}
						{renderDataCell(thursday?.class, thursday?.type)}
						{renderDataCell(friday?.class, friday?.type)}
						{renderDataCell(saturday?.class, saturday?.type)}
					</tr>
				)
			}
		)
	}
	return (
		<>
			<TableContainer>
				<Table>
					<thead>
						<tr>{renderTableHeader()}</tr>
					</thead>
					<tbody>{renderData()}</tbody>
				</Table>
			</TableContainer>
			{showModal && renderModal()}
		</>
	)
}

export default Timetable
