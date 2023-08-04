import AsyncStorage from "@react-native-async-storage/async-storage";

const Budgetdata =
{
    name: "hemant",
    PlannedAmount: 1000,
    actualAmount: 1200
}

const initialstate = [
    {
        name: "T-sh",
        actualamount: 100,
        plannedamount: 10000
    }
];

const useinitialstate: any = [

]

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_BUDGET':

            AsyncStorage.setItem('notedata', JSON.stringify([...state, action.payload]));
            console.log(state, action)

            return [
                ...state,
                action.payload
                //items: [...state.items, action.payload]
            ]

        case 'STORE_NOTE':
            console.log("on")
            return [
                ...state,
                initialstate == action.paylod

            ]
        default:
            return state;


    }

}

export default reducer