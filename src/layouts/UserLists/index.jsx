import React from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import ProfileCard from '@components/ProfileCard';
import { useAllUsers, useGetClientUser } from '@hooks/userInfo';
import { useOnlineUsers } from '@hooks/useOnlineUsers';

import { Container, Loading, Online, Title } from './styles';

const UserLists = () => {
  const { allUsers, isLoading } = useAllUsers();
  const { userName } = useGetClientUser();
  const { onlineList } = useOnlineUsers(userName);

  /*============================================
      온라인 유저가 맨 위에 위치하도록 배열 순서 바꾸기
  ============================================*/
  let onlineUsers = [];
  let offlineUsers = [];

  allUsers?.forEach((user, i) => {
    if (onlineList.indexOf(user.userName) !== -1) {
      onlineUsers?.push(user); // 온라인 리스트에 있는 유저명일 경우 onlineUsers 배열에 추가
    } else {
      offlineUsers?.push(user); // 없으면 offlineUsers 배열에 추가
    }
  });

  // 온라인, 오프라인 순서의 배열 생성
  const sortedUsers = [
    ...onlineUsers,
    // 오프라인 중 영어 유저명은 뒤로 정렬
    ...offlineUsers.sort((a, b) => {
      if (a.userName.charCodeAt(0) > 127 && b.userName.charCodeAt(0) > 127) {
        return a.userName > b.userName ? 1 : -1;
      } else if (a.userName.charCodeAt(0) > 127) {
        return -1;
      } else if (b.userName.charCodeAt(0) > 127) {
        return 1;
      } else {
        return a.userName > b.userName ? 1 : -1;
      }
    }),
  ];

  return (
    <Container>
      <Title>센텐스유를 빛내주시는 분들 </Title>

      <Online>
        <span></span>접속중
      </Online>

      {isLoading ? (
        <Loading>
          <CircularProgress color='inherit' />
          <div>로딩중...</div>
        </Loading>
      ) : (
        sortedUsers?.map((user, i) => {
          // 온라인 일 경우 isOnline: true
          const isOnline = onlineList.indexOf(user.userName) > -1;

          return (
            <Link to={`/${user.userName}`} key={user._id}>
              <ProfileCard
                isOnline={isOnline}
                userName={user.userName}
                userAvatar={user.userAvatar}
                userTitle={user.userTitle}
              />
            </Link>
          );
        })
      )}
    </Container>
  );
};

export default UserLists;
