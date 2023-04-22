import styled from 'styled-components';

export const Container = styled.div`

	width: 400px;
	height: auto;
	background-color: rgb(169, 68, 238);
	border-radius: 10px;
	color: white;
	transition: all 0.2s ease 0s;
	padding: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	right: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;	
	visibility: hidden;

	animation: show .2s;

	@keyframes show{
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}	

	button {
	  border: none;
	  outline: none;
	  border-radius: 10px;
	  width: 90px;
	  height: 30px;
	  font-weight: 600;
	  background-color: rgb(108, 0, 181);
	  color: white;
	  margin: 0 0 20px 0;
	  transition: .2s;
	}

	button: hover {
		transition: .2s;
		background-color: white;
		color: rgb(108, 0, 181);
	}


`;