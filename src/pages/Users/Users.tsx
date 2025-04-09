import { UsersWrapper, Title, StyledLink } from "./styles";


function Users() {
    return(
        <UsersWrapper>
            <Title>Users pages</Title>
            <StyledLink to='/users/manager'>Manager</StyledLink>
            <StyledLink to='/users/designer'>Designer</StyledLink>
        </UsersWrapper>
    )
}

export default Users;