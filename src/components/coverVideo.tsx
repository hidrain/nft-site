import styled from 'styled-components'
import GIF from '../assets/HomeVideo.mp4'

const VideoContainer = styled.div`
    width: 100%;

    video {
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
            <video src={GIF} autoPlay={true} muted loop />
        </VideoContainer>
    )
}
