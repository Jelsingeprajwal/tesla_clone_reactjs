import React from 'react'
import styled from 'styled-components'
function Section({ backgroundImg, title, description, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <ButtonGrp>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText &&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGrp>
            <DownArrow src="src/assets/down-arrow.svg">
            </DownArrow>
        </Wrap>
    )
}

const Wrap = styled.div`
z-index: -10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/src/assets/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`
const ButtonGrp = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width:768px) {
    flex-direction: column;
   }
   
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    z-index: 0;

`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
    width: 40px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

export default Section
