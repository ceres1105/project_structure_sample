## structure

```
/build
/node_modules
/public
/src
    /assets
    /components
    /contexts
    /screen
    /styles
    /utils

```

## src

### assets

img, font, svg 파일 저장

### component

    - share/base :독립적으로 사용되는 componenet
         ex) Header.js, Footer.js, Input.js
    - screen에서 import 되어 사용되는 컴포넌트들
        ex) Article/ArticleList.js
                    /ArticleContainer.js
                    /ArticleHeader.js
            Main/MainBody.js
                /Right.js
                /Left.js

### screen/page/view

router와 1:1로 연결되는 컴포넌트.
component를 import 해오는 용도로만 사용

### context

- context api 저장소

### router/ utils

- routes.js

### serveice/ api

- config.js
- (api.js)
- (jwt.js)

### style

- global styles

### hooks

- custom hooks 있을 경우 사용

- index.js
  생성된 리액트를 public/index.js의 id가 root인 곳에 넣는 코드

---

## root

- .env
  절대경로 사용
- git.ignore
- package.json

---

### 참조

- https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i

- https://medium.com/@FourwingsY/react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-bb183c0a426e#.yrtwuvl4v

- [realworld_vue](https://github.com/gothinkster/vue-realworld-example-app/tree/master/src/common)
