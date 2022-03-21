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

const Portuguese: Class = {
    name: "Portuguese 1",
    color: "#CCFCCB",
    code: "TR189",
    class: "TR89",
    professor: "Luis Alberto Vives Garnique"
};

const Evaluation: Class = {
    name: "Evaluation and New Trends",
    color: "#A882DD",
    code: "SI678",
    class: "SI93",
    professor: "Ernesto Ocampo Tello"
};

const Entrepreneurship: Class = {
    name: "Entrepreneurship",
    color: "#A5D8FF",
    code: "AD204",
    class: "AF95",
    professor: "RAMIREZ BOHADA, JUAN CARLOS"
};

const TP: Class = {
    name: "TP1",
    color: "#F5A38F",
    code: "SI644",
    class: "SS91",
    professor: " REQUEJO CHANAME, WALTER JUAN"
};

const TimeTableData: Times[] = [
    {
        "time": "8am",
    },
    {
        "time": "9am",
        "monday": { class: TP, type: "first" },
        "wednesday": { class: Evaluation, type: "first" },
        "friday": { class: Evaluation, type: "first" }
    },
    {
        "time": "10am",
        "monday": { class: TP, type: "last" },
        "wednesday": { class: Evaluation, type: "last" },
        "friday": { class: Evaluation, type: "last" }
    },
    {
        "time": "11am",
        "monday": { class: Entrepreneurship, type: "first" },
    },
    {
        "time": "12am",
        "monday": { class: Entrepreneurship, type: "last" },
    },
    {
        "time": "3pm",
        "wednesday": { class: Portuguese, type: "first" },
    },
    {
        "time": "4pm",
        "monday": { class: TP, type: "first" },
        "wednesday": { class: Portuguese, type: "last" },
        "thursday": { class: Portuguese, type: "first" },
        "friday": { class: TP, type: "first" },
    },
    {
        "time": "5pm",
        "monday": { class: TP, type: "middle" },
        "friday": { class: TP, type: "middle" },
    },
    {
        "time": "6pm",
        "monday": { class: TP, type: "last" },
        "friday": { class: TP, type: "last" },
    },
    {
        "time": "7pm",
    },
]
export default TimeTableData;