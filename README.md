
![](https://velog.velcdn.com/images/ahuuae/post/0b9aa86d-ba08-4b16-a090-511144100945/image.png)

## 💬 누군가의 말 한마디에
용기가 생긴 적이 있나요?

감동을 받은 적이 있나요?

동기부여가 생긴 적이 있나요?

## 💬 이제는 여러분이 말해주세요!
📝 [방문하기](https://sentenceu.graphite.is)

---

## 🔖 소개
**SENTENCE U**는 "삶은 한 문장이다" 라는 문장에서 영감을 얻어 짧은 글로 사람들에게 동기부여와 여러 긍정적인 메시지를 담기위해 만들어진 공간입니다.

동기부여를 얻거나 다른 사람에게 큰 힘을 줄 수 있는 공간을 제공합니다.

글에는 힘이 있습니다. 여러분의 한 마디로 이 공간을 아름답게 빛내주세요.

---

## 📆 개발기간
- ver 1. (2023.01.05 ~ 2023.02.11)
- ver 2. (2026.10.23) sentenceu.graphite.is 로 이전, Atlas 스냅샷에서 데이터 복구

## 📝 작업 기록

[SENTENCE U | Log](https://kyledev.tistory.com/category/Project/SENTENCE%20U)

## 📚 기술스택
| 분야           | 사용 기술                       |
| -------------- | ------------------------------- |
| FrontEnd       | JavaScript / React / Webpack |
| BackEnd        | Node / Express                         |
| Database       | MongoDB(Mongoose)               |
| Cloud | Vercel / MongoDB Atlas (2026.10 이전, 이전 AWS S3 / CloudType) |
| Tool           | VisualStudio Code           |

---

## ⚙️ 주요 기능

>#### 로그인/로그아웃

- JWT 토큰 방식을 이용하여 로그인이 가능합니다.
- 로그인 상태는 MongoDB에 세션으로 저장됩니다.
- 카카오 소셜 로그인이 가능합니다.
- 카카오 ID 여부에 따라 로그아웃의 방식이 달라집니다.
![](https://velog.velcdn.com/images/ahuuae/post/badf3181-a495-4ff1-82e9-d90df4f7cd29/image.png)

>#### 회원가입

- MongoDB를 통해 유저명의 중복 확인이 가능합니다.
- 비밀번호 확인 기능을 통해 정확한 비밀번호 설정이 가능합니다.
- 카카오 소셜 로그인이 가능합니다.
![](https://velog.velcdn.com/images/ahuuae/post/eb4d08e4-1624-478a-a64b-5a6d4c2a17dd/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/b7f008eb-43b5-46f6-bca7-cf27d6c8fc4a/image.png)

>#### 포스트 작성 모달 창

- 사람들에게 동기부여와 여러 긍정적인 메시지를 작성 할 수 있습니다.
- 미들웨어를 거쳐 로그인 한 유저에게만 상태에만 작성버튼이 보입니다.
![](https://velog.velcdn.com/images/ahuuae/post/1af991b8-78eb-41a5-a726-2d9e74f7490c/image.png)

>#### 메인 페이지

- 서비스의 소개를 보여줍니다.
- 유명한 명언을 크롤링해서 롤링배너로 보여줍니다.
- 인기포스트/최신포스트의 미리보기를 제공합니다.
- 공간을 빛내주는 유저리스트를 제공합니다.
- soket.io를 통해 현재 접속 중인 유저를 확인할 수 있습니다.
![](https://velog.velcdn.com/images/ahuuae/post/e1533c74-8a96-4739-843a-14ae5ffa1061/image.png)

>#### 포스트 페이지

- 인기포스트 : 좋아요 높은 순으로 10개를 보여줍니다.
- 최신포스트 : 최신 순으로 날짜별로 구분해서 포스트를 보여줍니다.
- 글 작성자의 경우 게시글 수정, 삭제가 가능합니다.
- 댓글을 통해 여러 유저와 소통할 수 있습니다.
- 댓글 등록자의 경우 댓글의 수정, 삭제가 가능합니다.
![](https://velog.velcdn.com/images/ahuuae/post/aaba49f8-de30-4b0e-ac88-e68c8e02d10d/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/37058846-53bc-41e2-a181-bec94895c361/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/d66a7c67-c11c-4adb-ab8f-69ae619ce7e8/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/7935706c-4bd7-45ca-8a8e-9ca0e41ccb15/image.png)

>#### 마이 페이지

- 내가 작성한 포스트를 모아볼 수 있습니다.
- 내가 좋아요를 누른 컬렉션을 모아볼 수 있습니다.
![](https://velog.velcdn.com/images/ahuuae/post/92ab2626-d7c0-4676-bb63-f2ea5b6e0fc3/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/b326ce2b-5655-4e2d-84b0-a38430b4d506/image.png)

>#### 유저 페이지

- 다른 유저가 작성한 포스트를 모아볼 수 있습니다.
- 해당 유저가 좋아요를 누른 컬렉션은 볼 수 없습니다.
![](https://velog.velcdn.com/images/ahuuae/post/bd8e1851-c493-4cc3-8380-a4712550973a/image.png)

>#### 설정 페이지

- 유저 아바타, 유저명, 유저 타이틀을 수정 할 수 있습니다.
- 유저 아바타는 AWS S3 스토리지에 저장됩니다.
- 계정 삭제가 가능합니다.
- 계정 삭제 시 해당 유저가 작성했던 모든 포스트를 삭제합니다.
![](https://velog.velcdn.com/images/ahuuae/post/4c07f483-6bf2-4c0f-8077-d2e5e8872afe/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/fa8f3f19-f326-43fc-8379-c1e8f3115f7f/image.png)


>#### 공지사항 페이지

- 서비스의 업데이트 사항 및 새로운 소식을 전달합니다.
![](https://velog.velcdn.com/images/ahuuae/post/9fdff1e7-4fbf-42dd-9e16-a02c102d3755/image.png)

>#### PWA

- PWA를 추가해 모바일 유저가 앱처럼 사용 가능합니다.
- iOS 유저에게는 PWA iOS Prompt를 통해 '홈 화면에 추가'를 가이드 해줍니다.
- 새로운 버전 업데이트 시 유저에게 업데이트 알림을 제공합니다.
![](https://velog.velcdn.com/images/ahuuae/post/66dc5718-eb2f-4b6d-af3a-f6e6a348ad78/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/615f504a-6b94-4384-93a8-8f45dc9dd311/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/8e44efc4-06c3-4658-9d24-ca4a32251deb/image.png)
![](https://velog.velcdn.com/images/ahuuae/post/62c7ac2d-f19f-448b-9449-127af6bd1a7f/image.png)

---

## 📦 사용 패키지
- aws-sdk
- axios
- bcrypt
- cheerio
- connect-mongodb-session
- dayjs
- emotion
- loadable
- mongoose
- multer
- multer-s3
- react-query
- react-icons
- react-ios-pwa-prompt
- socket.io
- sweetalert2
- web-push
- workbox
