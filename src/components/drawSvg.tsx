import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../icons/vector'

const VectorContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.body};
    margin: 0 auto;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`

const Bounce = keyframes`
    from {transform: translateX(-50%) scale(0.5)}
    to {transform: translateX(-50%) scale(1)}
`
const Ball = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
    animation: ${Bounce} 0.5s linear infinite alternate;
`

export const DrawSvg = () => {

    const ref = useRef(null)
    const ballRef: any = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {

        let element = ref.current
        let svg: any = document.getElementsByClassName('svg-path')[0] as HTMLElement;

        const length: any = svg.getTotalLength()

        //start positioning of svg drawing
        svg.style.strokeDasharray = length

        //hide svg before scrolling start
        svg.style.strokeDashoffset = length

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    const draw = length * self.progress

                    // reverse the drawing when scroll goes up
                    svg.style.strokeDashoffset = length - draw
                },
                // onToggle: (self) => {
                //     if (self.isActive) {
                //         ballRef.current.style.display = 'none'
                //     } else {
                //         ballRef.current.style.display = 'inline-bloke'
                //     }
                // }
            }
        })

        return () => {
            if (t1) t1.kill()
        };
    }, [])

    return (
        <>
            {/* <Ball ref={ballRef} /> */}
            <VectorContainer ref={ref}>
                <Vector />
            </VectorContainer>
        </>
    )
}
