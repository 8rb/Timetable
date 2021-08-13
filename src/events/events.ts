type Class = {
    name: string,
    color: string,
    code: string,
    class: string,
    professor: string,
    type?: string
}

type Cell = {
    class?: Class,
    type?: string
}

type Times = {
    monday?: Cell,
    tuesday?: Cell,
    wednesday?: Cell,
    thursday?: Cell,
    friday?: Cell,
    saturday?: Cell,
    sunday?: Cell,
    time?: string,
}

const Seminar: Class = {
    name: "Research Seminar 2",
    color: "#CCFCCB",
    code: "IN397",
    class: "IS8D",
    professor: "Luis Alberto Vives Garnique"
};

const TDP: Class = {
    name: "TDP",
    color: "#A882DD",
    code: "SI639",
    class: "SV81",
    professor: "Ernesto Ocampo Tello"
};

const Management: Class = {
    name: "Project Management",
    color: "#A5D8FF",
    code: " SI647",
    class: "WV82",
    professor: "Sandra Analia Wong Durand"
};

const French: Class = {
    name: "French 2",
    color: "#F5A38F",
    code: "TR240",
    class: "FS6A",
    professor: "Paolo Rodrigo Nery Lozada"
};

const TimeTableData: Times[] = [
    {
        "time": "1pm"
    },
    {
        "time": "2pm"
    },
    {
        "time": "3pm",
        "monday": {class: French, type: "first"},
        "thursday": {class: French, type: "first"}
    },
    {
        "time": "4pm",
        "monday": {class: French, type: "last"},
        "tuesday": {class: TDP, type: "first"},
        "thursday": {class: French, type: "last"},
        "friday": {class: Seminar, type: "first"},
        "saturday": {class: TDP, type: "first"},
    },
    {
        "time": "5pm",
        "tuesday": {class: TDP, type: "middle"},
        "friday": {class: Seminar, type: "middle"},
        "saturday": {class: TDP, type: "middle"},
    },
    {
        "time": "6pm",
        "tuesday": {class: TDP, type: "last"},
        "friday": {class: Seminar, type: "last"},
        "saturday": {class: TDP, type: "last"},
    },
    {
        "time": "7pm",
        "thursday": {class: Management, type: "first"},
        "saturday": {class: Management, type: "first"},
    },
    {
        "time": "8pm",
        "thursday": {class: Management, type: "last"},
        "saturday": {class: Management, type: "last"},
    },
    {
        "time": "9pm"
    },
]
export default TimeTableData;