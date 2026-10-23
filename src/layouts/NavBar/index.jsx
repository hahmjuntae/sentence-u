import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillCaretDownFill } from 'react-icons/bs';

import ProfileMenu from '@components/ProfileMenu';
import WriteModal from '@components/WriteModal';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  Container,
  HeaderLogo,
  LoginButton,
  LoginButtonBack,
  LoginWrap,
  NavWrap,
  WriteButton,
  WriteButtonBack,
  WriteWrap,
} from './styles';

const NavBar = () => {
  const ref = useRef();
  const { userId, userName, userAvatar } = useGetClientUser();

  const [isBtnActive, setIsBtnActive] = useState(false);
  const [wirteModalOpen, setWirteModalOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  /*============================================
                  프로필 메뉴
  ============================================*/
  const handleClickProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  // 프로필메뉴 밖 클릭 시 닫히는 함수
  useClickOutsideModal(ref, () => {
    setProfileMenuOpen(false);
  });

  /*============================================
                포스트 작성 모달
  ============================================*/
  const handleClickWriteModal = useCallback(() => {
    if (userName) {
      // 로그인 상태에만 이용 가능하도록
      setWirteModalOpen(true);
      setIsBtnActive(true);
    } else {
      sweetAlert('warning', '로그인 후 이용 가능합니다.');
    }
  }, [userName]);

  return (
    <Container>
      <NavWrap>
        <HeaderLogo>
          <Link to='/'>
            <img
              src='/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Link>
        </HeaderLogo>

        {/* 로그인 상태 */}
        {userName && (
          <WriteWrap>
            <WriteButtonBack>
              <WriteButton isBtnActive={isBtnActive} onClick={handleClickWriteModal}>
                새 글 작성
              </WriteButton>
            </WriteButtonBack>
          </WriteWrap>
        )}

        <LoginWrap ref={ref} onClick={handleClickProfileMenu}>
          {/* 로그아웃 상태 */}
          {!userName ? (
            <LoginButtonBack>
              <LoginButton>
                <Link to='/login'>시작하기</Link>
              </LoginButton>
            </LoginButtonBack>
          ) : (
            <Link>
              <img alt={userName} src={userAvatar} />
              <BsFillCaretDownFill />
            </Link>
          )}

          {/* 로그인 상태 */}
          {userName && userAvatar ? (
            <ProfileMenu isOpened={profileMenuOpen} onClick={handleClickProfileMenu} />
          ) : (
            <ProfileMenu isOpened={profileMenuOpen} onClick={handleClickProfileMenu} />
          )}
        </LoginWrap>

        {wirteModalOpen && (
          <WriteModal
            userId={userId}
            userName={userName}
            userAvatar={userAvatar}
            setIsBtnActive={setIsBtnActive}
            wirteModalOpen={wirteModalOpen}
            setWirteModalOpen={setWirteModalOpen}
          />
        )}
      </NavWrap>
    </Container>
  );
};

export default NavBar;
