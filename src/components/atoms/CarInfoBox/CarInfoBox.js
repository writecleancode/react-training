const CarInfoTitle = ({ children }) => (
	<p style={{ marginTop: '0', marginBottom: '8px', fontSize: '20px', fontWeight: 'bold' }}>
		{children}
	</p>
);

const CarInfo = ({ children }) => <p style={{ margin: '0', fontSize: '16px' }}>{children}</p>;

export const CarInfoBox = ({ title, info }) => (
	<div style={{ marginBottom: '24px' }}>
		<CarInfoTitle>{title}</CarInfoTitle>
		<CarInfo>{info}</CarInfo>
	</div>
);
