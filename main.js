'use strict';

const cars = [
	{
		brand: 'Audi',
		model: 'A3',
		generation: 'I (8L)',
		productionStartYear: 1996,
		productionEndYear: 2003,
		facelift: '2000',
		imgUrl: './img/audi_a3_i.jpg',
	},
	{
		brand: 'BMW',
		model: '3 Compact',
		generation: 'I (E36)',
		productionStartYear: 1993,
		productionEndYear: 2000,
		facelift: '-',
		imgUrl: './img/bmw_3_compact_i.jpg',
	},
	{
		brand: 'Citroen',
		model: 'Xsara',
		generation: 'I',
		productionStartYear: 1997,
		productionEndYear: 2005,
		facelift: '2000',
		imgUrl: './img/citroen_xsara_i.jpg',
	},
	{
		brand: 'Fiat',
		model: 'Brava',
		generation: 'I',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: './img/fiat_brava_i.jpg',
	},
	{
		brand: 'Ford',
		model: 'Focus',
		generation: 'I',
		productionStartYear: 1998,
		productionEndYear: 2005,
		facelift: '2001',
		imgUrl: './img/ford_focus_i.jpg',
	},
	{
		brand: 'Honda',
		model: 'Civic',
		generation: 'VI',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: './img/honda_civic_vi.jpg',
	},
	{
		brand: 'Mazda',
		model: '323',
		generation: 'VI (BJ)',
		productionStartYear: 1998,
		productionEndYear: 2003,
		facelift: '2001',
		imgUrl: './img/mazda_323_vi.jpg',
	},
	{
		brand: 'Nissan',
		model: 'Almera',
		generation: 'I (N15)',
		productionStartYear: 1995,
		productionEndYear: 2000,
		facelift: '1998',
		imgUrl: './img/nissan_almera_i.jpg',
	},
	{
		brand: 'Opel',
		model: 'Astra',
		generation: 'II (G)',
		productionStartYear: 1998,
		productionEndYear: '2009',
		facelift: '-',
		imgUrl: './img/opel_astra_ii.jpg',
	},
	{
		brand: 'Peugeot',
		model: '306',
		generation: 'I',
		productionStartYear: 1993,
		productionEndYear: 2002,
		facelift: '1997, 1999',
		imgUrl: './img/peugeot_306_i.jpg',
	},
	{
		brand: 'Renault',
		model: 'Megane',
		generation: 'I',
		productionStartYear: 1995,
		productionEndYear: 2003,
		facelift: '1999',
		imgUrl: './img/renault_megane_i.jpg',
	},
	{
		brand: 'Seat',
		model: 'Leon',
		generation: 'I',
		productionStartYear: 1999,
		productionEndYear: 2005,
		facelift: '-',
		imgUrl: './img/seat_leon_i.jpg',
	},
	{
		brand: 'Toyota',
		model: 'Corolla',
		generation: 'VIII',
		productionStartYear: 1997,
		productionEndYear: 2002,
		facelift: '1999',
		imgUrl: './img/toyota_corolla_viii.jpg',
	},
	{
		brand: 'Volkswagen',
		model: 'Golf',
		generation: 'IV (1J)',
		productionStartYear: 1997,
		productionEndYear: 2003,
		facelift: '-',
		imgUrl: './img/volkswagen_golf_iv.jpg',
	},
];

const AppContainer = document.querySelector('#root');

const H1 = () => {
	return (
		<h1 style={{ textAlign: 'center' }}>Segment C Hatchback cars (late 1990's, early 2000's)</h1>
	);
};

const CarImg = url => {
	return React.createElement('img', {
		src: url,
		style: { width: '320px', height: '240px', objectFit: 'cover' },
	});
};

const CarInfoTitle = title => {
	return <h6 style={{ marginTop: '0', marginBottom: '8px', fontSize: '20px' }}>{title}</h6>;
};

const CarInfo = info => {
	return <p style={{ margin: '0', fontSize: '16px' }}>{info}</p>;
};

const CarInfoBox = (title, info) => {
	return React.createElement(
		'div',
		{
			style: {
				marginBottom: '24px',
			},
		},
		CarInfoTitle(title),
		CarInfo(info)
	);
};

const App = () => {
	return React.createElement(
		'div',
		{},
		H1(),
		React.createElement(
			'div',
			{
				style: {
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
				},
			},
			cars.map(car => {
				return React.createElement(
					'div',
					{
						style: {
							margin: '16px',
							padding: '16px',
							backgroundColor: '#D9D9D9',
						},
					},
					React.createElement(
						'h4',
						{
							style: {
								marginTop: '0',
								marginBottom: '16px',
								fontSize: '40px',
							},
						},
						`${car.brand} ${car.model}`
					),
					React.createElement(
						'div',
						{
							style: {
								display: 'flex',
							},
						},
						CarImg(car.imgUrl),
						React.createElement(
							'div',
							{
								style: {
									display: 'flex',
									flexDirection: 'column',
									marginLeft: '16px',
								},
							},
							CarInfoBox('Generation', car.generation),
							CarInfoBox(
								'Production years',
								`${car.productionStartYear} - ${car.productionEndYear}`
							),
							CarInfoBox('Facelift', car.facelift)
						)
					)
				);
			})
		)
	);
};

const root = ReactDOM.createRoot(AppContainer);

root.render(App());
