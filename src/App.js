import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import styled from "styled-components";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

function App(props) {
  return(
    <BrowserRouter>
      <MainTitleText>winter's mini blog</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-wirte" element={<PostWritePage />} />
        <Route path="post/:poastId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
