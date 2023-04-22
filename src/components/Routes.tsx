import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Exports';

export function Rts(){

	return(
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Main />}></Route>
			</Routes>
		</BrowserRouter>
	);

};