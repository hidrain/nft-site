import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { Button } from './button';

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;

    span {
        text-transform: uppercase;
        font-family: 'Akaya Telivigala', cursive;
    }
    .text-1 {
        color: #387fea;
    }
    .text-2 {
        color: orange;
    }
    .text-3 {
        color: #da4b4b;
    }
`

const Subtitle = styled.h3`
    font-size: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
`

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;
`

export const TypeWriterText = () => {
    return (
        <>
            <Title>
                Discover A New Era Of Cool

                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,

                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span  class="text-1">NFTs.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span  class="text-2">Collectible items.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span  class="text-3">Ape Killers!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                />
            </Title>

            <Subtitle>
                Bored of apes? Try something new.
            </Subtitle>
            <ButtonContainer>
                <Button text="Explore" link='#about' />
            </ButtonContainer>
        </>
    )
}
