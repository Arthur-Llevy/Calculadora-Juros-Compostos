import { Container } from '../styles/components/result';
import { useRef } from 'react';

interface Result {
	time: string | undefined,
	result: number,
	finalMontant: number,
}

export function Result(props: Result){

	let container = useRef<HTMLDivElement>(null);

	function setVisible(): void{
		if(container.current){
			container.current.style.opacity = '0';
		};
	};

	return(
		<Container ref={container}>
			<button onClick={setVisible}>Voltar</button>
			<p>O tempo necessário para o montante final ser de {props.finalMontant} é de {props.result} {props.time}.</p>
		</Container>
	);
};