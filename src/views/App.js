import { cars } from 'assets/carsData';

const Title = () => (
	<p style={{ margin: '22px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
		Segment C Hatchback cars (late 1990's, early 2000's)
	</p>
);

const Wrapper = ({ children }) => (
	<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>{children}</div>
);

const CarCard = ({ children }) => (
	<div style={{ margin: '16px', padding: '16px', backgroundColor: '#D9D9D9' }}>{children}</div>
);

const CarName = ({ brand, model }) => (
	<p
		style={{
			marginTop: '0',
			marginBottom: '16px',
			fontSize: '40px',
			fontWeight: 'bold',
		}}>{`${brand} ${model}`}</p>
);

const CarCardRow = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;

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
				{cars.map(car => {
					return (
						<CarCard key={car.brand}>
							<CarName brand={car.brand} model={car.model} />
							<CarCardRow>
								<CarImg url={car.imgUrl} />
								<CarInfoColumn>
									<CarInfoBox>
										<CarInfoTitle title={'Generation'} />
										<CarInfo info={car.generation} />
									</CarInfoBox>
									<CarInfoBox>
										<CarInfoTitle title={'Production years'} />
										<CarInfo info={`${car.productionStartYear} - ${car.productionEndYear}`} />
									</CarInfoBox>
									<CarInfoBox>
										<CarInfoTitle title={'Facelift'} />
										<CarInfo info={car.facelift} />
									</CarInfoBox>
								</CarInfoColumn>
							</CarCardRow>
						</CarCard>
					);
				})}
			</Wrapper>
		</div>
	);
};

export default App;
