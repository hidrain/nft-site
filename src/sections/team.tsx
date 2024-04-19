import styled from 'styled-components'

import img1 from '../assets/nfts/bighead.svg'
import img2 from '../assets/nfts/bighead-1.svg'
import img3 from '../assets/nfts/bighead-2.svg'
import img4 from '../assets/nfts/bighead-3.svg'
import img5 from '../assets/nfts/bighead-4.svg'
import img6 from '../assets/nfts/bighead-5.svg'
import img7 from '../assets/nfts/bighead-6.svg'
import img8 from '../assets/nfts/bighead-7.svg'
import img9 from '../assets/nfts/bighead-8.svg'
import ConfettiComponent from '../components/confetti'

type MemberContainerProps = {
    img: string,
    name: string,
    position: string,
}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 1rem;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontxl};
    }
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 64em) {
        width: 80%;
    }
    @media (max-width: 48em) {
        width: 90%;
        justify-content: center;
    }
`
const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0px;
    margin: 2rem 1rem;
    color: ${props => props.theme.body};
    position: relative;
    border: 2px solid ${props => props.theme.text};
    border-radius: 20px;
    backdrop-filter: blur(4px);
    z-index: 5;

    &:hover{
        img{
            transform: translateY(-2rem) scale(1.1);
        }
    }

    @media (max-width: 30em) {
        width: 70vw;
    }
`

const ImgContainer = styled.div`
    width: 80%;
    margin: 0px auto;
    background-color: ${props => props.theme.carouselColor};
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    padding: 1rem;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        transition: all 0.3s ease;
    }
`
const Name = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin-top: 1rem;
`
const Position = styled.h2`
    font-size: ${props => props.theme.fontmd};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 400;
`
const MemberComponent = ({ img, name = ' ', position = ' ' }: MemberContainerProps) => {
    return (
        <Item>
            <ImgContainer>
                <img src={img} alt={name} />
            </ImgContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

export const Team = () => {
    return (
        <Section id='team'>
            <ConfettiComponent />
            <Title>Team</Title>
            <Container>
                <MemberComponent img={img1} name='SKYBLAZE' position='Founder' />
                <MemberComponent img={img2} name='MEGNUM' position='Co-Founder' />
                <MemberComponent img={img3} name='MONKEY KING' position='Director' />
                <MemberComponent img={img4} name='BLACK PANTHER' position='Manager' />
                <MemberComponent img={img5} name='DEATHSTROKE' position='Artist' />
                <MemberComponent img={img6} name='LAZY KONG' position='Social Media Manager' />
                <MemberComponent img={img7} name='CYBER PUNK' position='Blockchain Specialist' />
                <MemberComponent img={img8} name='MONK' position='Web3 Developer' />
                <MemberComponent img={img9} name='BANANA' position='Graphic Designer' />
            </Container>
        </Section>
    )
}
