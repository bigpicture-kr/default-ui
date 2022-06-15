# React Boilerplate

![banner](https://user-images.githubusercontent.com/57122180/151328244-a75b7be4-467b-4261-9f4d-d6d15ffaa655.png)

## 🤔 What is it ?

This Boilerplate is includes many config setup for useful developing React web project.  
Included package and setup is like below.

- typescript
- react-router (v6)
- styled-components
- storybook
- testing-library/react
- axios / http-proxy-middleware (proxy config)
- redux (reduxjs/toolkit)
- craco (path alias)

🙇‍♂️ _I hope you like this folder structure and useful this boilerplate for saving time project init setup_

## 🗂 Folder Structure

```txt
./src
├── @types
│   └── index.d.ts
├── App.tsx
├── assets
│   ├── fonts
│   ├── images
│   ├── styles
│   └── svgs
├── components
│   ├── Auth            # example folders
│   └── Common
│       └── MButton
│            ├── MButton.stories.tsx    # storybook
│            ├── MButton.style.ts       # styled-components
│            ├── MButton.test.tsx       # test file
│            ├── MButton.tsx            # tsx file
│            ├── MButton.type.ts        # (if needed) type defefine
│            └── index.ts
├── constants
│   ├── Colors.ts
│   └── Fonts.ts
├── hooks
│   ├── index.ts
│   └── useSomeHook.tsx # example file
├── index.tsx
├── reportWebVitals.ts
├── router
│   ├── RootRouter.tsx
│   └── index.ts
├── screens
│   ├── Auth
│   ├── Home
│   └── index.ts
├── setupProxy.js
├── setupTests.ts
├── store
│   ├── ducks
│   │   └── auth
│   │       ├── authSlice.ts
│   │       ├── authThunk.ts
│   │       └── index.ts
│   ├── hooks.ts
│   ├── index.ts
│   └── rootReducer.ts
├── stories
│   ├── Introduction.stories.mdx
│   └── assets
└── utils
    ├── AddComma.ts     # example file
    └── Size.ts
```

## 🤷‍♂️ What` the difference ?

Many Project folder structure is not my style.  
So I made this structure and difference is below.

1. One File, One Role

   I don`t like to combine styled-component with tsx file.
   Since it is too long to read, So I devided styled-component with tsx file. 🔫 Gang

2. Using ducks structure for redux-toolkit

   Same reason here, I devided thunk file and slice file.
   And combined this files for one module

3. Clean Import, Easy Find File

   Many example and existing react project use nameing `index.tsx` like `SomeComponents/index.tsx`.  
   It is reason why import easy, but find file for name was complicated for me.

   So I made `index.ts` file for one component folder, and named tsx file using component name.

e.g

_as is_

```txt
MButton
└── index.tsx
```

_to be_

```txt
MButton
├── MButton.style.ts
├── MButton.tsx
└── index.ts
```

### Useful tips for devided styled-components

Devided styled-components file cause writing so many import line

e.g

```ts
import {
  Container,
  SomeWrapper,
  SomeTitle,
  SomeImageWrapper
  // ... blah blah
} from "./SomeComponents.style.ts";
```

I recommend to use `*` with `as`

to be

```ts
import * as Styled from "./SomeComponents.style.ts";

const SomeComponents = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>hi</Styled.Title>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
```

## 👨‍💻 How to use

1. clone this project

   ```bash
   git clone https://github.com/minsoo-web/react-boilerplate.git
   ```

2. install package

   > before you start this package install, if you use npm rather than use yarn  
   > I recommend you should remove yarn.lock file

   ```bash
   # go into clone folder before installing the package
   # e.g cd react-boilerplate

   # using yarn
   yarn install

   or

   # using npm
   npm install
   ```

3. Let`s get it started

   ```bash
   # using yarn
   yarn start

   or

   # using npm
   npm run start
   ```
