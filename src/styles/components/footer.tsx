import styled from 'styled-components';

export const FooterDiv = styled.footer`
	background-color: rgb(140, 37, 210);
	display: flex;
	flex-direction: column;
	-moz-box-pack: center;
	justify-content: center;
	-moz-box-align: center;
	align-items: center;
	gap: 5px;
	padding: 5px;
	width: 100%;
	text-align: center;

	a, p {
		color: white;
		font-size: 14px;
	}

	a {
		text-decoration: none;
	}

	a: hover {
		text-decoration: underline;
	}

`;



