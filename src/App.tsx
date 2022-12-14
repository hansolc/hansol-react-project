import React, { useEffect } from 'react';
import './App.less';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import profile from '@images/profile.jpg';
import MyList from '@components/List';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'antd';

const URL = "https://api.unsplash.com";
const token = "Fn3CLKGW-jNbFkcClpglh7O6E4g7TkqO1jaE7Di2TmM"

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
		width: 600px;
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
	const [image, setImage] = useState<any>("")
	useEffect(() => {
		axios.get(`${URL}/photos/random?client_id=${token}`).then(res => {
			setImage(res.data.urls.small)
		})
	},[])

    return (
        <>
		<GlobalStyle></GlobalStyle>
		<Container>
			<ProfileContainer>
				<div>
					<div style={{display: 'flex', gap: '10px'}}>
						<h1>??????????????? ????????? ??????????????????.</h1>
						<Button type="primary" onClick={()=>window.location.replace('/contact')}>Contact</Button>
					</div>
					<p>???????????????, ??????????????? ????????? ??????????????????.</p>
					<p>2??? ??? ???????????? ?????????????????? ??????????????? ????????? ?????? ????????????. React ?????????????????? ??????
					???????????? ???????????? ??? ?????? ?????? ????????? ????????????.
					??? ??? ????????? ??????????????? ????????? ?????? ?????????????????? ?????? ?????? ?????????????????? ???????????? ??????
					??????. ??????????????? ????????? ?????? ????????? ?????????, ????????? ?????? ????????? ?????? ??? ?????? ????????? ??????
					????????????</p>
				</div>
				<img src={image} alt="profileImg" width="300px" />
			</ProfileContainer>
			<MyList></MyList>
		</Container>
        </>
    );
}

export default App;
