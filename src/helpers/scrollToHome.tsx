
export const scrollToHome = () => {

    let element = document.getElementById('navigation');
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })

}
