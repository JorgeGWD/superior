import { useRef, useState } from 'react'
import SectionTemplate from '../commons/section-template/section-template'
import Button from '../commons/button/button'
import BackgroundIMG from '../../assets/images/planta-de-trituracion-de-arena.jpg'
import './contact.css'

const Contact = () => {
    const formRef = useRef(null)
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus(null)

        const form = formRef.current
        if (!form) return

        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()

        if (!name || !email || !message) {
            setStatus('Por favor completa todos los campos.')
            return
        }

        try {
            const res = await fetch('/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })

            const data = await res.json()

            if (res.ok) {
                setStatus('Mensaje enviado correctamente.')
                form.reset()
            } else {
                setStatus(data.message || 'Hubo un error al enviar el mensaje.')
            }
        } catch (err) {
            console.error('Error al enviar:', err)
            setStatus('Error de red al enviar el mensaje.')
        }
    }

    return (
        <SectionTemplate className='contact' text='Contáctanos' BackgroundIMG={BackgroundIMG}>
            <form className='contact__content-form' ref={formRef} onSubmit={handleSubmit}>
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
                {status && <p className="contact__status">{status}</p>}
            </form>
        </SectionTemplate>
    )
}

export default Contact