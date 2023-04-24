import React, { useState, useRef,  } from 'react';
import { MainDiv } from '../styles/pages/main';
import { Container } from '../styles/pages/main';

export function Main(){

	document.title = 'Calculadora | Juros compostos';
	
	let [initialMontant, setInitialMontant] = useState<number>(0);
	let [index, setIndex] = useState<number>(0);
	let [finalMontant, setFinalMontant] = useState<number>(0);	
	let [result, setResult] = useState<number>(0);
	let [visible, setVisible] = useState<boolean>(false);
	let container = useRef<HTMLDivElement>(null);
	let [anos, setAnos] = useState<number>(0);
	let [meses, setmeses] = useState<number>(0);
	let [dias, setdias] = useState<number>(0);


	
	function calculate(): void {
	  let firstLog: number = Number((Math.log10(finalMontant / initialMontant)));
	  let secondLog: number = Number((Math.log10(index + 1.0)));
	  let resultado: number = (firstLog / secondLog);
	  setResult(resultado)
	  setAnos(Math.floor(resultado));
	  setmeses(Math.floor((resultado - Math.floor(resultado)) * 12));	  
	  console.log()
	  setdias(Math.floor((meses - Math.floor(meses)) * 30));
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
					<h1>Arthur Levy (3°A - D.S.)</h1>
					<label htmlFor="initialMontant">Capital Inicial</label>
					<input required id="initialMontant" onChange={e => setInitialMontant(Number(e.target.value))}/>
					<label htmlFor="index">Taxa (em decimal | a.a)</label>
					<input id="index" onChange={e => setIndex(Number(e.target.value))}/>
					<label htmlFor="finalMontant">Capital Final</label>
					<input id="finalMontant" onChange={e => setFinalMontant(Number(e.target.value))}/>
					<button onClick={() => { calculate(); showAnwser()}}>Calcular</button>
				</div>
			</MainDiv>
			<Container ref={container}>
				<button onClick={() => showAnwser()}>Voltar</button>
				<p>						
				  O tempo necessário para o montante final ser de {finalMontant} a uma taxa de {`${index * 100}%`} é de {anos} anos  {meses} meses {dias} dias.
				</p>
			</Container>		
			
		</>
	);
};
