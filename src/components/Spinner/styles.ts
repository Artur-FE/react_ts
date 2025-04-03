import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
 position: fixed;
 width: 50px;
 height: 50px;
 border-radius: 50%;
 border: 4px solid #0000001a;
 border-left-color: rgb(28, 8, 106);
 animation: spin 1s linear infinite;
 z-index: 999;

 @keyframes spin {
    to{
        transform: rotate(360deg)
    }
 }
`;