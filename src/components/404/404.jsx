import Title from '../commons/title/title';
import MaquinariaAmarilla from '../../assets/images/maquinaria-amarilla.gif'
import './404.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="header not-faund__header">
                <div className="container not-faund__header-content">
                    <Title text={'404 - Page Not Found'} className={'title__primary'} />
                </div>
            </div>
            <section className='container not-found__content'>
                <img src={MaquinariaAmarilla} alt="Maquinaria Amarilla" />
            </section>
        </div>
    );
};

export default NotFound;