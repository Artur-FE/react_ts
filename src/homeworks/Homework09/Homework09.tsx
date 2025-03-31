import { UserInfoBox, ContainerHW09, UserInfoBoxTitle, UserInfoBoxDescription } from "./styles";

function Homework09() {
  return (
    <ContainerHW09>
      <UserInfoBox width height bgColor>
      <UserInfoBoxTitle>VIP Пользователь</UserInfoBoxTitle>
      <UserInfoBoxDescription>
      Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.
      </UserInfoBoxDescription>
      </UserInfoBox>

      <UserInfoBox>
      <UserInfoBoxTitle>Обычный Пользователь</UserInfoBoxTitle>
      <UserInfoBoxDescription>
      Стандартный доступ, базовые функции и поддержка в порядке очереди.
      </UserInfoBoxDescription>
      </UserInfoBox>
    </ContainerHW09>
  );
}

export default Homework09;
