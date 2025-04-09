import { LayoutComponent, Header, LogoText, Nav, Main, Footer, StyledNavLink, LogoImage, ButtonContainer } from "./styles";
import { LayoutProps, NavLinkObj } from "./types";
import { navLinksData } from './data'
import { v4 } from "uuid";
import Logo from '../../assets/avatar.jpg'
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Layout({children} : LayoutProps) {

const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
    <StyledNavLink key={v4()} style={
        ({isActive})=>({textDecoration: isActive? 'underline' : 'none' })} 
        to={navLink.to}>{navLink.linkName}</StyledNavLink>
    )
})

const navigate = useNavigate();

const goBack = () => {
navigate(-1)
}

    return(
        <LayoutComponent>
           <Header>
            <Link to='/'><LogoImage src={Logo} /></Link>
            <Nav>
                {/* NavLink - компонент библиотеки, который добавляет ссылку на 
          страницу по маршруту через prop to */}
          {navLinks}
               </Nav>
           </Header>
           <Main>
            {children}
           </Main>
           <Footer>
            <ButtonContainer>
            <Button name="<-" onClick={goBack} />
            </ButtonContainer>
           <LogoText>Company name</LogoText>
           </Footer>
        </LayoutComponent>
    )
}

export default Layout;