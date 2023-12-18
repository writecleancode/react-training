import { CarCard } from './CarCard';
import { v4 as uuid } from 'uuid';

const meta = {
	title: 'Components/Molecules/CarCard',
	component: CarCard,
	parameters: {
		layout: 'centered',
	},
	args: {
		car: {
			id: uuid(),
			brand: 'Alfa Romeo',
			model: '146',
			generation: 'I (Type 930)',
			productionStartYear: 1994,
			productionEndYear: 2000,
			facelift: '1999',
			imgUrl: 'https://www.datocms-assets.com/112049/1699786166-alfa_romeo_146_i.png',
		},
	},
};

export default meta;

export const Default = {};

export const AddCarPreview = {
	args: {
		$isPreviewCard: true,
	},
};
