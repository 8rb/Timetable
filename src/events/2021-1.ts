type Class = {
    name: string,
    color: string,
    code: string,
    class: string,
    professor: string,
    type?: string
}

const Mobile: Class = {
    name: "Mobile",
    color: "#7DFFD8",
    code: "CC183",
    class: "WX71",
    professor: "David Gerardo Quevedo Velasco"
};

const Artificial: Class = {
    name: "AI",
    color: "#FFDD7D",
    code: "SI404",
    class: "WV71",
    professor: "Hugo David Calderon Vilca"
};

const Fas: Class = {
    name: "FAS",
    color: "#CF7DFF",
    code: "SI657",
    class: "WX71",
    professor: "Juan Antonio Flores Moroco"
};

const Concurrent: Class = {
    name: "Concurrent",
    color: "#7DBAFF",
    code: "CC65",
    class: "SW72",
    professor: "Carlos Alberto Jara Garcia"
};

const French: Class = {
    name: "French",
    color: "#FF7D7D",
    code: "TR224",
    class: "TR66",
    professor: "Paolo Rodrigo Nery Lozada"
};

const TimeTableData = [
    {
        "time": "7am",
        "monday": {class: Mobile, type: "first"},
    },
    {
        "time": "8am",
        "monday": {class: Mobile, type: "last"},
    },
    {
        "time": "9am",
        "tuesday": {class: Artificial, type: "first"},
    },
    {
        "time": "10am",
        "monday": {class: Artificial, type: "first"},
        "tuesday": {class: Artificial, type: "last"},
        "saturday": {class: Fas, type: "first"},
    },
    {
        "time": "11am",
        "monday": {class: Artificial, type: "middle"},
        "friday": {class: Mobile, type: "first"},
        "saturday": {class: Fas, type: "middle"}
    },
    {
        "time": "12pm",
        "monday": {class: Artificial, type: "last"},
        "friday": {class: Mobile, type: "last"},
        "saturday": {class: Fas, type: "last"}
    },
    {
        "time": "1pm",
    },
    {
        "time": "3pm",
        "tuesday": {class: French, type: "first"},
        "wednesday": {class: French, type: "first"}
    },
    {
        "time": "4pm",
        "tuesday": {class: French, type: "last"},
        "wednesday": {class: French, type: "last"},
    },
    {
        "time": "5pm",
    },
    {
        "time": "7pm",
        "monday": {class: Fas, type: "first"},
        "friday": {class: Concurrent, type: "first"},
    },
    {
        "time": "8pm",
        "monday": {class: Fas, type: "last"},
        "friday": {class: Concurrent, type: "middle"},
    },
    {
        "time": "9pm",
        "friday": {class: Concurrent, type: "last"},
    }
]
export default TimeTableData;