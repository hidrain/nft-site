import styled from 'styled-components'
import { Banner } from './banner'

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    display: flex; 
    flex-direction: column; 
`

export const Footer = () => {
    return (
        <Section>
            <Banner />
        </Section>
    )
}
