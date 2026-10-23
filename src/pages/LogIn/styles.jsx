import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 30vh;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 25rem;
  margin: 0 auto;
  @media screen and (max-width: 1023px) {
    & {
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  margin-bottom: 2rem;
  img {
    width: 15rem;
    height: 100%;
    object-fit: scale-down;
    vertical-align: middle;
  }
`;

export const FormTitle = styled.h2`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 1.3rem;
  font-size: 0.9rem;
  & span {
    font-weight: normal;
  }
  &.password-wrap {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      display: block;
      width: 48%;
    }
    div {
      width: 48%;
    }
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  margin-top: 0.3rem;
  padding: 0.8rem;
  border: none;
  font-weight: 300;
  font-size: 0.9rem;
  background-color: var(--primary-white);
  transition: all 0.2s;
  &:focus {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    outline: none;
  }
  &::placeholder {
    height: 100%;
    font-size: 0.9rem;
    color: var(--primary-grey);
  }
`;

export const FormRequest = styled.p`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
`;

export const Mismatch = styled.span`
  position: absolute;
  top: 0;
  text-align: right;
  color: var(--prism-code-3) !important;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 767px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Login = styled.button`
  width: 183px;
  height: 45px;
  border: none;
  border-radius: 6px;
  font-weight: 300;
  color: var(--primary-white);
  background-color: var(--primary-black);
  cursor: pointer;
  outline: none;
  user-select: none;
`;

export const KakaoLogin = styled.button`
  position: relative;
  width: 183px;
  height: 45px;
  border-radius: 6px;
  background: url('/src/assets/images/kakao_login_large_narrow.png');
  background-size: cover;
  cursor: pointer;
`;

export const LinkContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0;
  font-size: 0.8rem;
  color: var(--primary-black);
  a {
    margin-left: 0.6rem;
    text-decoration: none;
    color: var(--primary-black);
    &:hover {
      text-decoration: underline;
    }
  }
`;
