import React from 'react'
import styled from 'styled-components'

type Props = {}

const Section = styled.section`
    width: 100vw;
    background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${props => props.theme.navHeight};
    margin: 0 auto;
    background-color: ${props => props.theme.body};
`

export const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <h2>Logo</h2>
                <h2>Menu</h2>
                <h2>Button</h2>
            </NavBar>
        </Section>

    )
}
