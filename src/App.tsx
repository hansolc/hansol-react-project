import React from 'react';
import './App.less';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import profile from '@images/profile.jpg';
import { Button } from 'antd';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
/* @import '~antd/dist/antd.css'; */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

h1 {
	font-size: 32px;
	font-weight: bold;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	padding: 50px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
*{
  box-sizing: border-box;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
  font-family: 'Source Sans Pro', sans-serif;;
}
a{
  text-decoration: none;
}
`;

const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	height :100%;
`

const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	> div:first-child {
		width: 550px;
		>:first-child{
			margin-bottom: 15px;
		}
		>:nth-child(2){
			margin-bottom: 10px;
		}
		>:nth-child(3){
			line-height: 20px;
		}
	}
`

function App() {
    return (
        <>
		<GlobalStyle></GlobalStyle>
		<Container>
			<ProfileContainer>
				<div>
					<h1>프론트엔드 개발자 최한솔입니다.</h1>
					<p>안녕하세요, 프론트엔드 개발자 최한솔입니다.</p>
					<p>2년 차 개발자로 스타트업에서 프론트엔드 직무를 맡아 왔습니다. React 프레임워크를 통해
					홈페이지 퍼블리싱 및 개발 해본 경험이 있습니다.
					더 큰 경험과 팀원들과의 소통을 통해 사용자들에게 가치 있는 인터페이스를 제공하고 싶습
					니다. 팀원들과의 투명성 있는 소통을 원하며, 도움을 주고 도움을 받을 수 있는 사람이 되고
					싶습니다</p>
				</div>
				<img src={profile} alt="profileImg" />
			</ProfileContainer>
		</Container>
        </>
    );
}

export default App;
