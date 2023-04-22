import React, { useState, useRef } from 'react';
import { MainDiv } from '../styles/pages/main';
import { Container } from '../styles/components/result';

export function Main(){

	document.title = 'Calculadora | Juros compostos';
	
	let [initialMontant, setInitialMontant] = useState<number>(0);
	let scale = useRef<HTMLSelectElement>(null);
	let [index, setIndex] = useState<number>(0);
	let [finalMontant, setFinalMontant] = useState<number>(0);	
	let [result, setResult] = useState<number>(0);
	let [visible, setVisible] = useState<boolean>(false);
	let container = useRef<HTMLDivElement>(null)
	
	function calculate(): void {	
		let firstLog: number = Number((Math.log10(finalMontant / initialMontant)).toFixed(2));
		let secondLog: number = Number((Math.log10(index + 1.0)).toFixed(2))
		setResult(Number((firstLog / secondLog).toFixed(2)));	

	};

	function showAnwser(): void{
		if(container.current && visible){
			container.current.style.opacity = '0';
			container.current.style.visibility = 'hidden';
			setVisible(false);
			setResult(0);
		}else if(container.current && !visible){
			container.current.style.opacity = '1';
			container.current.style.visibility = 'initial';
			setVisible(true);
		};
	};	

	return(
		<>
			<MainDiv>
				<div>
					<h1>Calculadora | Juros compostos</h1>
					<label>Tempo em:</label>
					<select ref={scale}>
						<option value="(mês /meses)">Meses</option>
						<option value="(ano / anos)">Anos</option>
					</select>
					<label htmlFor="initialMontant">Montante Inicial</label>
					<input id="initialMontant" onChange={e => setInitialMontant(Number(e.target.value))}/>
					<label htmlFor="index">Taxa</label>
					<input id="index" onChange={e => setIndex(Number(e.target.value))}/>
					<label htmlFor="finalMontant">Montante Final</label>
					<input id="finalMontant" onChange={e => setFinalMontant(Number(e.target.value))}/>
					<button onClick={() => { calculate(); showAnwser()}}>Calcular</button>
				</div>
			</MainDiv>
			<Container ref={container}>
				<button onClick={() => showAnwser()}>Voltar</button>
				<p>O tempo necessário para o montante final ser de {finalMontant} a uma taxa de {`${index * 100}%`} é de {result}    
				{` ${scale.current?.value}`}.</p>
			</Container>		
			
		</>
	);
};

