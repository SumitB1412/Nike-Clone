export const setItem = (key, data) => {
    return sessionStorage.setItem(key, JSON.stringify(data));
};


export const getItem = (key) => {
    if (sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return undefined;
};

export const removeItem = (key)=>{
    return sessionStorage.removeItem(key);
};