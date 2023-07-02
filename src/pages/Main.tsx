import React, { useState, useRef } from 'react';
import { MainDiv } from '../styles/pages/main';
import { Container } from '../styles/pages/main';
import { Footer } from '../components/Exports';

export function Main(){

	document.title = 'Calculadora | Juros compostos';
	
	let [initialMontant, setInitialMontant] = useState<number>(0);
	let [index, setIndex] = useState<number>(0);
	let [finalMontant, setFinalMontant] = useState<number>(0);	
	let [visible, setVisible] = useState<boolean>(false);
	let container = useRef<HTMLDivElement>(null);
	let [anos, setAnos] = useState<number>(0);
	let [meses, setmeses] = useState<number>(0);
	let [dias, setdias] = useState<number>(0);
	let [message, setMessage] = useState<string>('');
	
	function calculate(): void {

		if(initialMontant !== 0 && index !== 0 && finalMontant !== 0){
		  	let firstLog: number = Number((Math.log10(finalMontant / initialMontant)));
		  	let secondLog: number = Number((Math.log10(index + 1.0)));
		 	let resultado: number = (firstLog / secondLog);
		 	setAnos(Math.floor(resultado));
		 	setmeses(Math.floor((resultado - Math.floor(resultado)) * 12));	  
		 	setdias(Math.floor((meses - Math.floor(meses)) * 30));
		 	setMessage(`O tempo necessário para o montante final ser de ${finalMontant} a uma taxa de ${index * 100}% é de ${anos} anos  ${meses} meses ${dias} dias.`);
		  	showAnwser();		  	

		}else {
			setMessage('Todos os campos precisam conter dados.');
			showAnwser();
		};
	};

	function showAnwser(): void{				

		if(container.current && visible){
			container.current.style.opacity = '0';
			container.current.style.visibility = 'hidden';			
			setVisible(false);
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
					<label htmlFor="initialMontant">Capital inicial</label>
					<input 
						id="initialMontant"
						placeholder="Ex.: 1200"
						onChange={e => setInitialMontant(Number(e.target.value))}
					/>
					<label htmlFor="index">Taxa</label>
					<input 
						id="index"
						placeholder="Ex.: 20.5"
						onChange={e => setIndex(Number(e.target.value) / 100)}
					/>
					<label htmlFor="finalMontant">Montante final</label>
					<input
						id="finalMontant" 
						placeholder="Ex.: 2300"
						onChange={e => setFinalMontant(Number(e.target.value))}
					/>
					<button onClick={calculate}>Calcular</button>
				</div>
				<Footer />			
			</MainDiv>
			<Container ref={container}>
				<button onClick={showAnwser}>Voltar</button>
				<p>{message}</p>
			</Container>		
		</>
	);
};
