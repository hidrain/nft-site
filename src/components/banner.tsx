import styled from 'styled-components'

import img1 from '../assets/nfts/bighead.svg'
import img2 from '../assets/nfts/bighead-1.svg'
import img3 from '../assets/nfts/bighead-2.svg'
import img4 from '../assets/nfts/bighead-3.svg'
import img5 from '../assets/nfts/bighead-4.svg'
import img6 from '../assets/nfts/bighead-5.svg'

const Section = styled.section`
    height: 25rem;
    width: 100vw;
    position: relative;
    border-top: 2px solid ${props => props.theme.text};
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
    display: flex;
    justify-content: center;
    align-items: center;    
    overflow: hidden;

    @media (max-width: 48em) {
        height: 15rem;
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;  
    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
        transition: all 0.3s ease;
    }

    @media (max-width: 48em) {
        img {
        width: 10rem;
        height: auto;
        }
    }
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${props => props.theme.text};

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxxl};
        width: 40%;
        text-align: center;
    }
    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxl};
        width: 100%;
        padding: 2rem 0;
    }
`
const BtnContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;
    font-size: ${props => props.theme.fontxl};

    @media (max-width: 48em) {
        width: 100%;
        justify-content: center;
    }
`
const JoinNow = styled.button`
    position: relative;
    display: inline-block;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontxs};
    font-weight: 400;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;

    @media (max-width: 48em) {
        padding: 1rem 2rem;
    }

    &:hover {
        transform: scale(0.9)
    }
    &::after {
        position: absolute;
        content: ' ';
        transform: scale(0.9);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        width: 100%;
        height: 100%;    
        border-radius: 50px;
        transition: all 0.2s ease;
    }
    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

export const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img src={img1} alt="The Weirdos" />
                <img src={img2} alt="The Weirdos" />
                <img src={img3} alt="The Weirdos" />
                <img src={img4} alt="The Weirdos" />
                <img src={img5} alt="The Weirdos" />
                <img src={img6} alt="The Weirdos" />
            </ImgContainer>
            <Title>
                Join the <br /> weirdos club
            </Title>
            <BtnContainer>
                <JoinNow>Join Now</JoinNow>
            </BtnContainer>
        </Section>
    )
}