import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import axios from 'axios';

import useInput from '@hooks/useInput';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  ButtonWrap,
  Container,
  Form,
  FormTitle,
  HeaderLogo,
  Input,
  KakaoLogin,
  Label,
  LinkContainer,
  Loading,
  Login,
} from './styles';

const LogIn = () => {
  const navigate = useNavigate();

  const { isAuth, refetch, isLoading } = useGetClientUser();

  const [userName, onChangeUserName] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (isAuth) navigate('/'); // 로그인상태라면 홈으로 navigate
  }, [isAuth, navigate]);

  /*============================================
                    일반 로그인
  ============================================*/
  const handleLogin = useCallback(
    (event) => {
      event.preventDefault();
      if (userName && password) {
        axios
          .post(`/api/users/login`, { userName, password })
          .then(() => {
            navigate('/'); // 홈으로 navigate
            refetch(); // ClientUser 정보 리패치
            sweetAlert('success', `환영합니다 ${userName}님!`);
          })
          .catch((error) => {
            sweetAlert('error', error.response.data);
          });
      } else {
        sweetAlert('question', '빈 칸이 있습니다.');
      }
    },
    [userName, password, navigate, refetch],
  );

  /*============================================
                   카카오 로그인
  ============================================*/
  const handleKakaoLogin = useCallback((e) => {
    e.preventDefault();

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
  }, []);

  switch (isLoading) {
    case true:
      return (
        <Container>
          <Loading>
            <CircularProgress color='inherit' />
            <div>로딩중...</div>
          </Loading>
        </Container>
      );

    default:
      return (
        <Container>
          <Form onSubmit={handleLogin}>
            <HeaderLogo>
              <Link to='/'>
                <img
                  src='/src/assets/images/logo_empty.png'
                  alt='센텐스유 로고'
                />
              </Link>
            </HeaderLogo>

            <FormTitle>로그인</FormTitle>

            <Label htmlFor='userName-label'>
              <span>유저명</span>
              <div>
                <Input
                  autoFocus
                  autoComplete='off'
                  type='userName'
                  name='userName'
                  id='userName-label'
                  placeholder='User Name'
                  value={userName}
                  onChange={onChangeUserName}
                />
              </div>
            </Label>

            <Label htmlFor='password-label'>
              <span>비밀번호</span>
              <div>
                <Input
                  autoComplete='off'
                  type='password'
                  name='password'
                  id='password-label'
                  placeholder='Password'
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </Label>

            <ButtonWrap>
              <Login id='Button' type='submit'>
                로그인
              </Login>
              <KakaoLogin onClick={handleKakaoLogin} />
            </ButtonWrap>

            <LinkContainer>
              아직 회원이 아니신가요?
              <Link to='/signup'>회원가입 &gt;</Link>
            </LinkContainer>
          </Form>
        </Container>
      );
  }
};

export default LogIn;
