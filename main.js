'use strict';

const cars = [
	{
		brand: 'Audi',
		model: 'A3',
		generation: 'I (8L)',
		productionStartYear: 1996,
		productionEndYear: 2003,
		facelift: '2000',
		imgUrl: 'https://www.netcarshow.com/Audi-A3_5-door-2000-1600-08.jpg',
	},
	{
		brand: 'BMW',
		model: '3 Compact',
		generation: 'I (E36)',
		productionStartYear: 1993,
		productionEndYear: 2000,
		facelift: '-',
		imgUrl: 'https://automotyw.com/wp-content/uploads/photos/nadwozie/bmw_seria-3_e36_compact.jpg',
	},
	{
		brand: 'Citroen',
		model: 'Xsara',
		generation: 'I',
		productionStartYear: 1997,
		productionEndYear: 2005,
		facelift: '2000',
		imgUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Citroen_Xsara_front_20070609.jpg/800px-Citroen_Xsara_front_20070609.jpg',
	},
	{
		brand: 'Fiat',
		model: 'Brava',
		generation: 'I',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: 'https://parkers-images.bauersecure.com/wp-images/21368/cut-out/930x620/brava.jpg',
	},
	{
		brand: 'Ford',
		model: 'Focus',
		generation: 'I',
		productionStartYear: 1998,
		productionEndYear: 2005,
		facelift: '2001',
		imgUrl: 'https://www.netcarshow.com/Ford-Focus_5-door-1998-1600-01.jpg',
	},
	{
		brand: 'Honda',
		model: 'Civic',
		generation: 'VI',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: 'https://www.netcarshow.com/Honda-Civic_Hatchback-1995-1600-01.jpg',
	},
	{
		brand: 'Mazda',
		model: '323',
		generation: 'VI (BJ)',
		productionStartYear: 1998,
		productionEndYear: 2003,
		facelift: '2001',
		imgUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mazda_323F_front_20081127.jpg/800px-Mazda_323F_front_20081127.jpg',
	},
	{
		brand: 'Nissan',
		model: 'Almera',
		generation: 'I (N15)',
		productionStartYear: 1995,
		productionEndYear: 2000,
		facelift: '1998',
		imgUrl:
			'https://prod.pictures.autoscout24.net/listing-images/89052e03-21a4-4699-8153-5583d425c416_f89f16f9-93b0-4d4d-9218-c902419185da.jpg/1920x1080.webp',
	},
	{
		brand: 'Opel',
		model: 'Astra',
		generation: 'II (G)',
		productionStartYear: 1998,
		productionEndYear: '2009',
		facelift: '-',
		imgUrl: 'https://flib.samar.pl/700/100/75010969134743a472e.webp',
	},
	{
		brand: 'Peugeot',
		model: '306',
		generation: 'I',
		productionStartYear: 1993,
		productionEndYear: 2002,
		facelift: '1997, 1999',
		imgUrl: 'https://www.cars-data.com/pictures/peugeot/peugeot-306_1989_3.jpg',
	},
	{
		brand: 'Renault',
		model: 'Megane',
		generation: 'I',
		productionStartYear: 1995,
		productionEndYear: 2003,
		facelift: '1999',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Renault_Megane_front_20080104.jpg',
	},
	{
		brand: 'Seat',
		model: 'Leon',
		generation: 'I',
		productionStartYear: 1999,
		productionEndYear: 2005,
		facelift: '-',
		imgUrl: 'https://www.netcarshow.com/Volkswagen-Golf_IV-1997-1600-03.jpg',
	},
	{
		brand: 'Toyota',
		model: 'Corolla',
		generation: 'VIII',
		productionStartYear: 1997,
		productionEndYear: 2002,
		facelift: '1999',
		imgUrl: 'https://mag.toyota.co.uk/wp-content/uploads/sites/2/2018/10/Corolla-8-08-1.jpg',
	},
	{
		brand: 'Volkswagen',
		model: 'Golf',
		generation: 'IV (1J)',
		productionStartYear: 1997,
		productionEndYear: 2003,
		facelift: '-',
		imgUrl: 'https://www.netcarshow.com/Volkswagen-Golf_IV-1997-1600-03.jpg',
	},
];

// import React from 'react';
// import ReactDOM from 'react-dom';

const AppContainer = document.querySelector('#root');

const CarInfoTitle = title => {
    return React.createElement('h6', {}, title);
};

const CarInfo = info => {
    return React.createElement('p', {}, info);
};

const CarInfoBox = (title, info) => {
    return React.createElement('div', {}, CarInfoTitle(title), CarInfo(info))
}

const App = () => {
	return React.createElement(
		'div',
		{},
		React.createElement('h1', {}, `Segment C Hatchback cars (late 1990's, early 2000's)`),
		React.createElement(
			'div',
			{},
			cars.map(car => {
				return React.createElement(
					'div',
					{},
					React.createElement('h4', {}, `${car.brand} ${car.model}`),
					React.createElement(
						'div',
						{},
						React.createElement('img', {}),
						React.createElement(
							'div',
							{},
                            CarInfoBox('Generation', car.generation),
                            CarInfoBox('Production years', `${car.productionStartYear} - ${car.productionEndYear}`),
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
