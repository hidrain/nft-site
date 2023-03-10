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

    @media (max-width: 70em) {
        font-size: ${props => props.theme.fontxl};
    }
    @media (max-width: 48em) {
       align-self: center;
       text-align: center;
    }
    @media (max-width: 40em) {
      width: 90%;
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

    @media (max-width: 48em) {
       align-self: center;
       text-align: center;
    }
    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontmd};
    }
`

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
       align-self: center;
       text-align: center;

       .button {
            margin: 0 auto;
       }
    }
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
