import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;600&display=swap');

	* {
		font-family: 'Roboto Mono', monospace;
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}
`;

export const MainDiv = styled.div`
	width: 100%;
	height: 100vh;		
	background-color: #f7f7f7;
	justify-content: center;
	align-items: center;
	display: flex;
	color: white;

	div {
		width: 450px;
		height: 550px;
		background-color: #8c25d2;
		border-radius: 10px;
		box-shadow: 2px 2px 4px #8212d0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		text-align: center;
		font-size: 23px;
	}

	select {
		width: 180px;
		height: 32px;
		text-align: center;
		border-radius: 10px;
		border: none;
		outline: none;
	}

	input {
	  border-radius: 10px;
	  border: none;
	  outline: none;
	  width: 180px;
	  height: 32px;
	  text-align: center;
	}

	button {
		width: 180px;
		height: 32px;
		border-radius: 10px;
		border: medium none;
		outline: none;
		color: white;
		background-color: rgb(108, 0, 181);
		font-weight: 600;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.2s ease 0s;
	}

	button: hover {
		transition: .2s;
		background-color: white;
		color: rgb(108, 0, 181);
	}	
`;

export const ResultContainer = styled.div`
	
	position: absolute;
	width: 390px;
	height: 150px;

	div{
		width: 390px;
		height: 150px;
		background-color: rgb(140, 37, 210);
		border-radius: 10px;
		box-shadow: rgb(130, 18, 208) 2px 2px 4px;
		display: flex;
		justify-content: space-evenly;
		-moz-box-align: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		text-align: center;
		transition: .2s;
	}
`;





