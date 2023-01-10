import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};
    transition: all 0.2s ease;
    align-items: center;

    &:hover {
        transform: scale(1.1)
    }
`

export const Logo = () => {
    return (
        <LogoText>
            <Link to='/'>
                w.
            </Link>
        </LogoText>
    )
}
