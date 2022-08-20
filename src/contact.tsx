import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	height :100%;
`

function Contact(){
    return (
        <Container>
            <h1>연락처</h1>
            <ul>
                <li>Email: hsc080808@naver.com</li>
            </ul>
        </Container>
    )
}

export default Contact;