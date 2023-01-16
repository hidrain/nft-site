import styled from 'styled-components'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import LinkedIn from '../icons/linkedIn'
import Twitter from '../icons/twitter'
import { Banner } from './banner'
import { Logo } from './logo'
import { scrollTo } from '../helpers/scrollTo'

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    display: flex; 
    flex-direction: column; 
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.text};

    @media (max-width: 48em) {
        width: 90%;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 48em) {
        width: 100%;
    }
`
const IconList = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;

    &>* {
        padding-right: 0.5rem;
        transition: all 0.2s ease;

        &:hover{
            transform: scale(1.2)
        }
    }
`
const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 48em) {
        display: none;
    }
`
const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after { 
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }
    &:hover::after { 
        width: 100%;
    }
`
const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 48em) {
        width: 100%;
        flex-direction: column;

        span {
            margin-bottom: 1rem;
        }
    }
`

export const Footer = () => {
    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="http://facebook.com" target="_blank" rel="noopener">
                            <Facebook />
                        </a>
                        <a href="http://instagram.com" target="_blank" rel="noopener">
                            <Instagram />
                        </a>
                        <a href="http://twitter.com" target="_blank" rel="noopener">
                            <Twitter />
                        </a>
                        <a href="http://linkedin.com" target="_blank" rel="noopener">
                            <LinkedIn />
                        </a>
                    </IconList>
                </Left>

                <MenuItems>
                    <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>RoadMap</Item>
                    <Item onClick={() => scrollTo('showcase')}>ShowCase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>FAQ</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
                </span>
            </Bottom>
        </Section>
    )
}
