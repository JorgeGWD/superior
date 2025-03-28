import Button from '../commons/button/button';
import Title from '../commons/title/title';
import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__header">
                <Title text={'Contáctanos'} className={'container title__primary'} />
            </div>
            <section className='container'>
                <form className='contact__content'>
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
                    <Button className={'button__secondary'} text={'Submit'} type={'submit'} />
                </form>
            </section>
        </div>
    );
};

export default Contact;