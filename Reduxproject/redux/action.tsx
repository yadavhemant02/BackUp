

export const addBudget = (budget: any) => {
    console.log('hhhhhhhss')
    return {
        type: 'ADD_BUDGET',
        payload: budget
    }
}

export const storeNote = (budget: any) => {
    console.log('store note')
    return {
        type: 'STORE_NOTE',
        payload: budget
    }
}
