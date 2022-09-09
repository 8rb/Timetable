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

const Chess: Class = {
    name: "Chess",
    color: "#F7FFF7",
    code: "-",
    class: "-",
    professor: "Fanny Duarte"
};

const Client: Class = {
    name: "Product Owner",
    color: "#6F7D8C",
    code: "-",
    class: "-",
    professor: "Walter Requejo"
};

const Coauthor: Class = {
    name: "CO-Author",
    color: "#F4BBD3",
    code: "-",
    class: "-",
    professor: "Daniel Subauste"
};

const TP: Class = {
    name: "Manager",
    color: "#ffe66d",
    code: "-",
    class: "-",
    professor: "Milton Chinchay"
};

const TimeTableData: Times[] = [
    {
        "time": "8am",
    },
    {
        "time": "9am",
    },
    {
        "time": "10am",
    },
    {
        "time": "11am",
    },
    {
        "time": "12am",
    },
    {
        "time": "3pm",
        "thursday": { class: Client, type: "first" },
    },
    {
        "time": "4pm",
        "tuesday": { class: TP, type: "first" },
        "thursday": { class: TP, type: "first" },
        "saturday": { class: Chess, type: "first" },
    },
    {
        "time": "5pm",
        "tuesday": { class: TP, type: "middle" },
        "thursday": { class: TP, type: "middle" },
        "saturday": { class: Chess, type: "last" },
    },
    {
        "time": "6pm",
        "tuesday": { class: TP, type: "last" },
        "thursday": { class: TP, type: "last" },
    },
    {
        "time": "7pm",
        "friday": { class: Coauthor, type: "first" },
    },
]
export default TimeTableData;