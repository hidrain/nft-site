export const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })

}
