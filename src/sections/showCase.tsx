import styled, { keyframes } from 'styled-components'
import { RefObject, useRef } from 'react'

import img1 from '../assets/nfts/bighead.svg'
import img2 from '../assets/nfts/bighead-1.svg'
import img3 from '../assets/nfts/bighead-2.svg'
import img4 from '../assets/nfts/bighead-3.svg'
import img5 from '../assets/nfts/bighead-4.svg'
import img6 from '../assets/nfts/bighead-5.svg'
import img7 from '../assets/nfts/bighead-6.svg'
import img8 from '../assets/nfts/bighead-7.svg'
import img9 from '../assets/nfts/bighead-8.svg'
import img10 from '../assets/nfts/bighead-9.svg'
import ETH from '../assets/icons8-ethereum-48.png'

type RowProps = {
    direction: string
}
type NftItemProps = {
    img: string,
    number: number,
    price: number,
    passRef: RefObject<HTMLDivElement>,
}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.text};
    overflow: hidden;

    &>*:first-child{
        animation-duration: 20s;

        @media (max-width: 30em) {
            animation-duration: 15s;
        }
    }
    &>*:last-child{
        animation-duration: 15s;

        @media (max-width: 30em) {
            animation-duration: 10s;
        }
    }
`

const move = keyframes`
    0%{transform: translateX(100%)}
    100%{transform: translateX(-100%)}
`
const Row = styled.section`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;
    animation: ${move} linear infinite ${(props: RowProps) => props.direction};
`
const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${props => props.theme.body};
    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 48em) {
        width: 12rem;
    }
    @media (max-width: 30em) {
        width: 10rem;
    }
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${props => props.theme.fontsm};
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }
    h1 {
        font-size: ${props => props.theme.fontmd};
        color: ${props => props.theme.body};
        font-weight: 600;

        @media (max-width: 30em) {
            font-size: ${props => props.theme.fontsm};
        }
    }
`
const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 1rem;
        height: auto;
    }
`

const NftItem = ({ img, number = 0, price = 0, passRef }: NftItemProps) => {

    let play = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (passRef.current) {
            passRef.current.style.animationPlayState = 'running'
        }
    }
    let pause = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (passRef.current) {
            passRef.current.style.animationPlayState = 'paused'
        }
    }

    return (
        <ImgContainer
            onMouseOver={e => pause(e)}
            onMouseOut={e => play(e)}
        >
            <img src={img} alt="The Weirdos" />

            <Details>
                <div>
                    <span>Weirdos</span> <br />
                    <h1>#{number}</h1>
                </div>
                <div>
                    <span>Price</span> <br />
                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    )
}

export const ShowCase = () => {

    const Row1Ref = useRef<HTMLDivElement>(null)
    const Row2Ref = useRef<HTMLDivElement>(null)

    return (
        <Section id='showcase'>
            <Row direction='none' ref={Row1Ref}>
                <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
                <NftItem img={img2} number={123} price={1.2} passRef={Row1Ref} />
                <NftItem img={img3} number={456} price={1.5} passRef={Row1Ref} />
                <NftItem img={img4} number={666} price={2.5} passRef={Row1Ref} />
                <NftItem img={img5} number={452} price={3.7} passRef={Row1Ref} />
            </Row>
            <Row direction='reverse' ref={Row2Ref}>
                <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} />
                <NftItem img={img7} number={211} price={3.2} passRef={Row2Ref} />
                <NftItem img={img8} number={455} price={1.8} passRef={Row2Ref} />
                <NftItem img={img9} number={456} price={5.1} passRef={Row2Ref} />
                <NftItem img={img10} number={865} price={3.7} passRef={Row2Ref} />
            </Row>
        </Section>
    )
}
