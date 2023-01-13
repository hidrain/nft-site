import styled from 'styled-components'
import { DrawSvg } from '../components/drawSvg'

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
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`
const Container = styled.div`
    height: 200vh;
    width: 70%;
    position: relative;
    background-color: ${props => props.theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`
const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
`

export const RoadMap = () => {
    return (
        <Section>
            <Title>Road map</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                </Items>
            </Container>
        </Section>
    )
}
