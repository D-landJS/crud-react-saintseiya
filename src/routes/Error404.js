import { Link } from 'react-router-dom';
import error404 from '../assets/img1.svg';

function Error404() {
	return (
		<div className="error404">
			<img src={error404} alt="Error 404" />
			<h1>La página que ha solicitado no se encuentra disponible</h1>
			<div className="error_button">
				<Link to="">Volver atrás</Link>
			</div>
		</div>
	);
}

export default Error404;
