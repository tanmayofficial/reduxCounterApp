export const depositeGold = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DEPOSITE",
            payload: amount
        })
    }
}
export const withdrawGold = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount
        })
    }
}