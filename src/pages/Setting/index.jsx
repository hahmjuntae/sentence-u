import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  Avatar,
  AvatarForm,
  Caution,
  Container,
  DeleteAccount,
  DeleteAccountButtonBack,
  DeleteAccountForm,
  Edit,
  EditButtonBack,
  Label,
  Loading,
  Menu,
  NameInput,
  ProfileWrap,
  Remove,
  Title,
  TitleInput,
  Upload,
  UploadButtonBack,
  UserForm,
  UserName,
  UserTitle,
} from './styles';

const API_SERVER = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : '';

const Setting = () => {
  const navigate = useNavigate();

  const { userName, userTitle, userAvatar, userId, isLoading, refetch } = useGetClientUser();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [editTitle, setEditTitle] = useState(userTitle);

  /*============================================
                유저 아바타 업로드
  ============================================*/
  const handleUploadUserAvatar = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(); // formData생성

      formData.append('avatar', e.target.files[0]); // input(file)에서 받은 파일 formData에 append, name은 'avatar'

      fetch(`${API_SERVER}/api/users/${userId}/avatar/upload`, {
        // POST로 formData 전송
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then(() => refetch()) // 변경(업로드)성공 시 클라이언트 유저 정보 리패치
        .catch((error) => console.error(error));
    },
    [userId, refetch],
  );

  /*============================================
                  유저 아바타 삭제
  ============================================*/
  const handleRemoveUserAvatar = useCallback(
    (e) => {
      e.preventDefault();

      Swal.fire({
        title: '이미지를 삭제하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008bf8',
        cancelButtonColor: '#e06c75',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`/api/users/${userId}/avatar/remove`)
            .then(() => refetch()) // 삭제 성공 시 유저 정보 리패치
            .catch((error) => console.log(error));
        }
      });
    },
    [userId, refetch],
  );
  /*============================================
                  프로필 수정
  ============================================*/
  // 수정모드 변경
  const handleProfileEditMode = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  // 유저명 변경
  const handleChangeUserName = (e) => {
    setEditName(e.target.value);
  };

  // 유저 타이틀 변경
  const handleChangeUserTitle = (e) => {
    setEditTitle(e.target.value);
  };

  // 수정된 유저 프로필 submit
  const handleSubmitEditedUserProfile = useCallback(
    (e) => {
      e.preventDefault();

      if (editName) {
        axios
          .put(`/api/users/${userId}`, {
            userName,
            editName,
            editTitle,
          })
          .then(() => {
            refetch(); // 유저정보 변경 성공 시 리패치
            setIsEditing(false); // 수정모드 false
          })
          .catch((error) => {
            console.error(error);
            sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
          });
      }
    },
    [userName, editName, editTitle, userId, refetch],
  );

  /*============================================
                  계정 삭제
  ============================================*/
  const handleDeleteAccount = useCallback(() => {
    Swal.fire({
      title: '계정을 삭제하시겠습니까?',
      text: '작성하신 모든 포스트가 삭제되며 복구되지 않습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008bf8',
      cancelButtonColor: '#e06c75',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/users/${userId}`)
          .then(() => {
            refetch(); // 삭제 후 클라이언트 리패치
            navigate('/');
          }) // 삭제 성공 시 홈으로 navigate
          .catch((error) => console.log(error));
      }
    });
  }, [userId, navigate, refetch]);

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
          <Title>내 정보 수정</Title>
          <ProfileWrap>
            <AvatarForm>
              <Avatar src={userAvatar} alt={userName} />
              <UploadButtonBack>
                <Upload htmlFor='avatar'>
                  이미지 변경
                  <input type='file' id='avatar' name='avatar' onChange={handleUploadUserAvatar} />
                </Upload>
              </UploadButtonBack>
              <Remove onClick={handleRemoveUserAvatar}>이미지 제거</Remove>
            </AvatarForm>

            <UserForm onSubmit={handleSubmitEditedUserProfile}>
              {isEditing ? (
                <>
                  <Label htmlFor='editName-label'>
                    <NameInput
                      autoComplete='off'
                      type='text'
                      name='editName'
                      id='editName-label'
                      value={editName}
                      onChange={handleChangeUserName}
                    />
                  </Label>
                  <Label htmlFor='editTitle-label'>
                    <TitleInput
                      autoFocus
                      autoComplete='off'
                      type='text'
                      name='editTitle'
                      id='editTitle-label'
                      value={editTitle}
                      onChange={handleChangeUserTitle}
                    />
                  </Label>
                </>
              ) : (
                <>
                  <UserName>{userName}</UserName>
                  <UserTitle>{userTitle}</UserTitle>
                </>
              )}
              {isEditing ? (
                <EditButtonBack>
                  <Edit onClick={handleSubmitEditedUserProfile}>저장</Edit>
                </EditButtonBack>
              ) : (
                <EditButtonBack>
                  <Edit onClick={handleProfileEditMode}>수정</Edit>
                </EditButtonBack>
              )}
            </UserForm>
          </ProfileWrap>

          <DeleteAccountForm>
            <Menu>계정 삭제</Menu>
            <DeleteAccountButtonBack>
              <DeleteAccount onClick={handleDeleteAccount}>계정 삭제</DeleteAccount>
            </DeleteAccountButtonBack>
            <Caution>
              계정 삭제 시 작성하신 <b>모든 포스트</b>가 삭제되며 복구되지 않습니다.
            </Caution>
          </DeleteAccountForm>
        </Container>
      );
  }
};

export default Setting;
