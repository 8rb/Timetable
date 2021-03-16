type Class = {
    name: string,
    color: string,
    code: string
}

const Mobile: Class = {
    "name": "Mobile",
    "color": "#7DFFD8",
    "code": "WX71"
};

const Artificial: Class = {
    "name": "AI",
    "color": "#FFDD7D",
    "code": "WV71"
};

const Fas: Class = {
    "name": "FAS",
    "color": "#CF7DFF",
    "code": "WX71"
};

const Concurrent: Class = {
    "name": "Concurrent",
    "color": "#7DBAFF",
    "code": "SW72"
};

const French: Class = {
    "name": "French",
    "color": "#FF7D7D",
    "code": "TR66"
};

const TimeTableData = [
    {
        "time": "7am",
        "monday": Mobile,
        "wednesday": { "color": "", "name": ""},
        "thursday": { "color": "", "name": ""},
        "saturday": { "color": "", "name": ""},
    },
    {
        "time": "8am",
        "monday": Mobile,
    },
    {
        "time": "9am",
        "tuesday": Artificial
    },
    {
        "time": "10am",
        "monday": Artificial,
        "tuesday": Artificial,
        "saturday": Fas
    },
    {
        "time": "11am",
        "monday": Artificial,
        "friday": Mobile,
        "saturday": Fas
    },
    {
        "time": "12pm",
        "monday": Artificial,
        "friday": Mobile,
        "saturday": Fas
    },
    {
        "time": "1pm",
    },
    {
        "time": "2pm",
    },
    {
        "time": "5pm",
        "tuesday": French,
        "wednesday": French,
    },
    {
        "time": "6pm",
        "tuesday": French,
        "wednesday": French,
    },
    {
        "time": "7pm",
        "monday": Fas,
        "friday": Concurrent,
    },
    {
        "time": "8pm",
        "monday": Fas,
        "friday": Concurrent,
    },
    {
        "time": "9pm",
        "friday": Concurrent,
    }
]
export default TimeTableData;