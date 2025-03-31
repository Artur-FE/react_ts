import styled from "@emotion/styled";

interface ProfileCardStyledProps{
    vip?: boolean
}

export const Homework09Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex: 1;
padding: 60px;
background-color: rgb(219, 209, 188);
`;


export const ProfileCard = styled.div<ProfileCardStyledProps>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
width: ${({vip})=> vip? '650px' : '600px'};
height: ${({vip})=> vip? '550px' : '500px'};
background-color: ${({vip})=> vip? 'rgb(25, 23, 96)' : 'rgb(67, 65, 134)'} ;
color: #fff;
font-size: 20px;
border-radius: 6px;
`;

export const Title = styled.h2`
font-size: 40px;
`;

export const Description = styled.div`
display: flex;
`;



// import styled from "@emotion/styled";

// interface UserInfoStyledProps {
//     width?: boolean;
//     height?: boolean;
//     bgColor?: boolean;
// }

// export const ContainerHW09 = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 30px;
//     flex: 1;
//     padding: 20px;
// `;

// export const UserInfoBox = styled.div<UserInfoStyledProps>`
// display: flex;
// flex:1;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// box-shadow: 7px 7px 6px lightgray;
// border: none;
// border-radius: 10px;
// width: ${({width}) => width? '400px' : '350px'};
// height: ${({height}) => height? '350px' : '300px'};
// background-color: ${({bgColor}) => bgColor? '#54D0DE' : '#A7BAE0'}
// `;

// export const UserInfoBoxTitle = styled.h2`
// font-size: 27px;
// `;

// export const UserInfoBoxDescription = styled.div`
// font-size: 22px;
// padding: 10px;
// text-align: center;
// `;