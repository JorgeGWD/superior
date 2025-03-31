import SectionTemplate from '../commons/section-template/section-template'
import Button from '../commons/button/button'
import BackgroundIMG from '../../assets/images/planta-de-trituracion-de-arena.jpg'
import './contact.css'

const Contact = () => {
    return (
        <SectionTemplate className='contact' text='Contactanos' BackgroundIMG={BackgroundIMG}>
            <form className='contact__content-form'>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <Button className={'button__secondary'} text={'Enviar'} type={'submit'} />
            </form>
        </SectionTemplate>
    );
};

export default Contact;