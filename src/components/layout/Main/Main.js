import bg from '../../../assets/bronze-saints-background.png';

const Main = () => {
	return (
		<div className="main">
			<div className="description">
				<h2>Saint Seiya API</h2>
				<p> Es una api sencilla de Saint Seiya de la que hice de 6 formas.</p>
				<ol>
					<li>La primera es vanilla js puro con Hooks</li>
					<li>La segunda use JSON Server</li>
					<li>La tercera use Router</li>
					<li>La cuarta use Context</li>
					<li>La cuarta use Reducers</li>
					<li>La cuarta use Redux</li>
				</ol>
			</div>
			<div className="image-container">
				<img src={bg} alt="Bronze Saints" />
			</div>
		</div>
	);
};

export default Main;
