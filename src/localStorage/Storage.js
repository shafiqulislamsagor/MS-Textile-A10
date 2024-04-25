export const getStore =() =>{
    const find = localStorage.getItem('theme')
    return find
}

export const setStore = (value) =>{
    localStorage.setItem('theme',value)
}