import { Description, Homework09Container, ProfileCard, Title } from "./styles";


function Homework09() {
  return (
    <Homework09Container>
      <ProfileCard vip>
        <Title>VIP пользователь</Title>
        <Description>
          Доступ к эксклюзивным функциям, персональный менеджер и приоритетная
          поддержка.
        </Description>
      </ProfileCard>

      <ProfileCard>
        <Title>Обычный Пользователь</Title>
        <Description>
          Стандартный доступ, базовые функции и поддержка в порядке очереди.
        </Description>
      </ProfileCard>
    </Homework09Container>
  );
}

export default Homework09;

// import { UserInfoBox, ContainerHW09, UserInfoBoxTitle, UserInfoBoxDescription } from "./styles";

// function Homework09() {
//   return (
//     <ContainerHW09>
//       <UserInfoBox width height bgColor>
//       <UserInfoBoxTitle>VIP Пользователь</UserInfoBoxTitle>
//       <UserInfoBoxDescription>
//       Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.
//       </UserInfoBoxDescription>
//       </UserInfoBox>

//       <UserInfoBox>
//       <UserInfoBoxTitle>Обычный Пользователь</UserInfoBoxTitle>
//       <UserInfoBoxDescription>
//       Стандартный доступ, базовые функции и поддержка в порядке очереди.
//       </UserInfoBoxDescription>
//       </UserInfoBox>
//     </ContainerHW09>
//   );
// }

// export default Homework09;
