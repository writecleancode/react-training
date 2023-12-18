import { GlobalStyle } from '../../study-buddy-vite-ts/src/assets/styles/GlobalStyle';
import '../src/assets/styles/fonts.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<>
				<GlobalStyle />
				<Story />
			</>
		),
	],
};

export default preview;
