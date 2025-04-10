import { ClientsWrapper, Title, ClientImg, ClientLink, ClientsContainer } from "./style";
import Mercedes from "../../assets/Mercedes.jpg"
import Audi from "../../assets/Audi.jpeg"
import Volkswagen from "../../assets/Volkswagen.jpg"

function Clients() {
    return (
<ClientsContainer>
        <Title>Clients</Title>
        <ClientsWrapper>
                <ClientLink to="/clients/mercedes"><ClientImg src={Mercedes} /></ClientLink>
                <ClientLink to="/clients/audi"><ClientImg src={Audi} /></ClientLink>
                <ClientLink to="/clients/volkswagen"><ClientImg src={Volkswagen} /></ClientLink>
        </ClientsWrapper>
        </ClientsContainer>
    )
}

export default Clients;