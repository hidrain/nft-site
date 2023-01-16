import { useState } from "react";

export const ScrollTo = (id: string) => {

    const [click, setClick] = useState(false)

    let element = document.getElementById(id);
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })

    setClick(!click)

}
