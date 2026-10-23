import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * 접속중 유저 목록 가져오는 react-query 함수
 * @returns onlineList
 */
export const useOnlineUsers = (userName) => {
  // 서버리스 배포라 socket.io 대신 20초 주기 폴링
  const { data } = useQuery(
    ['onlineUsers', userName],
    async () => {
      return await axios
        .get('/api/online')
        .then((res) => res.data)
        .catch((error) => console.error(error));
    },
    {
      refetchInterval: 20 * 1000,
      refetchIntervalInBackground: false,
    },
  );

  // 중복 유저명 제거
  const onlineList = Array.isArray(data) ? [...new Set(data)] : [];

  return { onlineList };
};
