const colorButtons = document.querySelectorAll('.btn')
const style = getComputedStyle(document.body)
let themeColor = style.getPropertyValue('--theme-color')

colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        
        document.documentElement.style.setProperty('--theme-color', btn.dataset.color);
        themeColor = style.getPropertyValue('--theme-color')

        setToLocalStorage(themeColor)

    })
})


const setToLocalStorage = (color) => {
    localStorage.setItem("themeColor", color)
}


const getDataFromLocalStorage = () => {
    let localTheme = localStorage.getItem("themeColor")
    document.documentElement.style.setProperty('--theme-color', localTheme);
}

getDataFromLocalStorage()
