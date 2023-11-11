import { render } from '@testing-library/react';
import { CarsProvider } from './providers/CarsProvider';

const AllTheProviders = ({ children }) => {
	return <CarsProvider>{children}</CarsProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
