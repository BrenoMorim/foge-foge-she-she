import './index.css';
import 'styles/base.css';
import { footer } from 'mocks/textos';

export default function Footer() {
    return (
        <footer className="base__painel-roxo footer">
            <p className="footer__texto">{ footer.paragrafo }</p>
        </footer>
    );
}