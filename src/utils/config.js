export const getConfig = () => {
    // const getTokenFromLocalStorage = localStorage.getItem("user")
    //     ? JSON.parse(localStorage.getItem("user")).result.token
    //     : "";


    return {
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage}`,
            Accept: "application/json",
        },
    };
};