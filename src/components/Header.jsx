
import React from 'react'
import styled from 'styled-components'

function Header() {
    const handleCloseMenu = (e) => {
        document.getElementById('menu').style.transform = "translateX(100%)";
    }
    const handleOpenMenu = (e) => {
        document.getElementById('menu').style.transform = "translateX(0)";
    }
    return (
        <Container id="nav">
            <a href=""><img src="src/assets/logo.svg" alt="Logo" /></a>
            <Menu>
                <a href="#">Model X</a>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla account</a>
                <CustomMenu src='/src/assets/bars-solid.svg' onClick={handleOpenMenu} />
            </RightMenu>
            <BurgerNav id="menu">
                <CloseWrapper onClick={handleCloseMenu}>
                    <CustomClose src="src/assets/xmark-solid.svg" alt="" />
                </CloseWrapper>
                <li><a href="">Model X</a></li>
                <li><a href="">Model S</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade in</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    min-height: 60px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
     a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right:10px; 
       flex-wrap: nowrap;

    }
`


const CustomMenu = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateX(100%);
    transition: .2s ;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.8);
        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
        
`
const CustomClose = styled.img`
    left: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
`
export default Header