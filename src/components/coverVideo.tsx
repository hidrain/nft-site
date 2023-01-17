import styled from 'styled-components'
import GIF from '../assets/HomeGIF.gif'

const VideoContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 64em) {
        min-width: 40vh;
    }
`

export const CoverVideo = () => {
    return (
        <VideoContainer>
            <img src={GIF} alt='CoverGif' />
        </VideoContainer>
    )
}
