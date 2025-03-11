import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap'

export default function Paginate({iLength, iPerPage, active, setActive}) {

	const [p, sP] = useState(0);

	const [finalRender, sFR] = useState()
	
	useEffect(() => {
		sP(Math.ceil(Number(iLength) / iPerPage))
	}, [iLength, iPerPage])
	
	useEffect (() => {
		sFR(
			<Pagination>
				{(active > 1 && p > 5) ? <Pagination.First onClick={e => {setActive(1)}}/> : (active === 1 && p > 5) ? <Pagination.First disabled></Pagination.First> : null}
				{(active > 1) ? <Pagination.Prev onClick={e => {setActive(active - 1)}}/> : <Pagination.Prev disabled/>}
				
				{// pagination items start
				}
				{(active === p && p >= 5) ? <Pagination.Item onClick={e => {setActive(active - 4)}} key={active - 4}>{active - 4}</Pagination.Item> : null} 
				{(active >= p - 1 && p >= 4 && active - 3 > 0 ) ? <Pagination.Item onClick={e => {setActive(active - 3)}} key={active - 3}>{active - 3}</Pagination.Item> : null}
				{((active >=  3 && active <= p - 1) || active === p && active - 2 > 0) ? <Pagination.Item onClick={e => {setActive(active - 2)}} key={active - 2}>{active - 2}</Pagination.Item> : null}
				{((active >=  2 && active <= p - 1) || active === p && active - 1 > 0) ? <Pagination.Item onClick={e => {setActive(active - 1)}} key={active - 1}>{active - 1}</Pagination.Item> : null}

				<Pagination.Item key={active} active={true}>{active}</Pagination.Item>

				{(active <=  p - 1) ? <Pagination.Item onClick={e => {setActive(active + 1)}} key={active + 1}>{active + 1}</Pagination.Item> : null}
				{(active <=  p - 2) ? <Pagination.Item onClick={e => {setActive(active + 2)}} key={active + 2}>{active + 2}</Pagination.Item> : null}
				{(active <   3 && p >= 4 && active + 3 <= p) ? <Pagination.Item onClick={e => {setActive(active + 3)}} key={active + 3}>{active + 3}</Pagination.Item> : null}
				{(active === 1 && p >= 5) ? <Pagination.Item onClick={e => {setActive(active + 4)}} key={active + 4}>{active + 4}</Pagination.Item> : null}

				{// pagination items end
				}

				{(active < p) ? <Pagination.Next onClick={e => {setActive(active + 1)}}/> : <Pagination.Next disabled/>}
				{(active < p && p > 5) ? <Pagination.Last onClick={e => {setActive(p)}}/> : (active === p && p > 5) ? <Pagination.Last disabled></Pagination.Last> : null}
			</Pagination>
		);

	}, [p, active])


	return(<>
		{finalRender}
	</>)
}
