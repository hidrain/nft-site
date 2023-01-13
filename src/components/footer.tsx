import styled from 'styled-components'

type Props = {}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`

export const Footer = () => {
    return (
        <Section>Footer</Section>
    )
}
