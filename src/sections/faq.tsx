import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { Accordion } from '../components/accordion'

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: uppercase;
    color: ${props => props.theme.body};
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Box = styled.div`
    width: 45%;
`

export const Faq = () => {

    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {

        let element = ref.current
        ScrollTrigger.create({
            trigger: element,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () => {
            ScrollTrigger.killAll()
        };
    }, [])

    return (
        <Section ref={ref}>
            <Title>FAQ</Title>
            <Container>
                <Box>
                    <Accordion
                        title='WHERE CAN I VIEW MY NFTS?'
                        clicked={false}
                    >
                        Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </Accordion>
                    <Accordion
                        title='WHAT IS THE METAVERSE?'
                        clicked={false}
                    >
                        A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
                    </Accordion>
                    <Accordion
                        title='WHY DO WE NEED ROYALTIES?'
                        clicked={false}
                    >
                        The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
                    </Accordion>
                </Box>
                <Box>
                    <Accordion
                        title='HOW CAN I USE MY NFT?'
                        clicked={false}
                    >
                        You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
                    </Accordion>
                    <Accordion
                        title='WHAT ARE THE WEIRDOS?'
                        clicked={false}
                    >
                        First things first, The Weirdos is a generative collection of 9,272 stylistic NFTs with hand-drawn traits. On the project's website, the project is described as, “A nostalgic, adult-themed universe where your NFT unlocks varying and exclusive levels of access, utility and weirdness.”
                    </Accordion>
                    <Accordion
                        title='WHAT IS THE FUSION PROCESS?'
                        clicked={false}
                    >
                        The NFT Fusion Mechanism will be the process through which you will be able to fuse multiple NFTs from the same moment to create a superior version of that moment. Those repeated NFTs will be destroyed forever, being now replaced by this evolved version.
                    </Accordion>
                </Box>

            </Container>
        </Section>
    )
}
