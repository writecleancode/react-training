import { cars } from 'data/carsData';

const Title = () => (
	<p style={{ margin: '22px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
		Segment C Hatchback cars (late 1990's, early 2000's)
	</p>
);

const Wrapper = ({ children }) => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>{children}</div>
);

const CarCard = ({ children }) => (
	<div style={{ display: 'grid', gridTemplateRows: '1fr 240px', gridTemplateColumns: '320px 1ft', margin: '16px', padding: '16px', backgroundColor: '#D9D9D9' }}>{children}</div>
);

const CarName = ({ brand, model }) => (
	<p
		style={{
			gridColumn: '1 / 3',
			marginTop: '0',
			marginBottom: '16px',
			fontSize: '40px',
			fontWeight: 'bold',
		}}>{`${brand} ${model}`}</p>
);

const CarImg = ({ url }) => (
	<img src={url} alt='car' style={{ width: '320px', height: '240px', objectFit: 'cover' }} />
);

const CarInfoColumn = ({ children }) => (
	<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>{children}</div>
);

const CarInfoBox = ({ children }) => <div style={{ marginBottom: '24px' }}>{children}</div>;

const CarInfoTitle = ({ title }) => (
	<p style={{ marginTop: '0', marginBottom: '8px', fontSize: '20px', fontWeight: 'bold' }}>
		{title}
	</p>
);

const CarInfo = ({ info }) => <p style={{ margin: '0', fontSize: '16px' }}>{info}</p>;

const App = () => {
	return (
		<div>
			<Title />
			<Wrapper>
				{cars.map(({ brand, model, imgUrl, generation, productionStartYear, productionEndYear, facelift }) => {
					return (
						<CarCard key={brand}>
							<CarName brand={brand} model={model} />
							<CarImg url={imgUrl} />
							<CarInfoColumn>
								<CarInfoBox>
									<CarInfoTitle title={'Generation'} />
									<CarInfo info={generation} />
								</CarInfoBox>
								<CarInfoBox>
									<CarInfoTitle title={'Production years'} />
									<CarInfo info={`${productionStartYear} - ${productionEndYear}`} />
								</CarInfoBox>
								<CarInfoBox>
									<CarInfoTitle title={'Facelift'} />
									<CarInfo info={facelift} />
								</CarInfoBox>
							</CarInfoColumn>
						</CarCard>
					);
				})}
			</Wrapper>
		</div>
	);
};

export default App;
