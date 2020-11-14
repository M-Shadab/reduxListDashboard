import * as types from "../types"

const initialState = {
    1: {
        id: 1,
        category: "portugal",
        totalChecked: 3,
        list: {
            1: {
                id: 1,
                label: "Aasiya Jayavant",
                checked: true
            },
            2: {
                id: 2,
                label: "luvleen lawrence",
                checked: true
            },
            3: {
                id: 3,
                label: "Rey mibourne",
                checked: false
            },
            4: {
                id: 4,
                label: "Cayla Brister",
                checked: true
            }
    }},
    2: {
        id: 2,
        category: "nicaragua",
        totalChecked: 1,
        list: {
            5: {
                id: 5,
                label: "Aasiya Jayavant",
                checked: false
            },
            6: {
                id: 6,
                label: "obesey chidy",
                checked: true
            },
            7: {
                id: 7,
                label: "Rmitr xwhuy",
                checked: false
            },
            8: {
                id: 8,
                label: "hsiyei dengea",
                checked: false
            }
    }},
    3: {
        id: 3,
        category: "marshall Islands",
        totalChecked: 0,
        list: {
            9:{
                id: 9,
                label: "sgyet urie",
                checked: false
            },
            10: {
                id: 10,
                label: "jiet ywios",
                checked: false
            },
            11: {
                id: 11,
                label: "siye oitp",
                checked: false
            },
            12: {
                id: 12,
                label: "asuite jiret",
                checked: false
            }
    }},
    }

const data = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_OPTION:
            return {...action.payload}
        default:
            return state 
    }
}

export default data