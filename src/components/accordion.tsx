import { useState } from 'react'
import styled from 'styled-components'
import { Minus } from '../icons/minus'
import { Plus } from '../icons/plus'

type Props = {
    title: string,
    children: any,
    clicked: boolean
}

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.carouselColor};
    padding: 1rem 0.5rem;
    margin: 3rem 0;

    @media (max-width: 48em) {
        margin: 2rem 0;
    }
`
const Title = styled.div`
    font-size: ${props => props.theme.fontsm};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Reveal = styled.div`
    display: ${(props: Props) => props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: ${props => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
`
const Name = styled.div`
    display: flex;
    align-items: center;
`
const Indicator = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontxxl};

    svg {
        width: 1rem;
        height: auto;
        fill: ${props => props.theme.carouselColor};
    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxl};
    }
`

export const Accordion = ({ title, children }: Props) => {

    const [collapse, setCollapse] = useState(false)

    return (
        <Container>
            <Title onClick={() => setCollapse(!collapse)}>
                <Name>
                    <span>{title}</span>
                </Name>
                {
                    collapse ?
                        <Indicator>
                            <Minus />
                        </Indicator> :
                        <Indicator>
                            <Plus />
                        </Indicator>
                }
            </Title>
            <Reveal clicked={collapse} title={''}>
                {children}
            </Reveal>
        </Container>
    )
}
