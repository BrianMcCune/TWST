import tent from './assets/images/tent.jpg'
import { useState } from 'react'
import './contact.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const Contact = () => {
  const [loaded, setLoaded] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = contactSchema.safeParse(formData)
    if (!result.success) {
      const formErrors = {}
      result.error.errors.forEach(err => {
        if (err.path[0]) formErrors[err.path[0]] = err.message
      })
      setErrors(formErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/myzndbnl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data)
      })
      if (response.ok) {
        alert('Message sent!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Something went wrong. Try again later.')
      }
    } catch {
      alert('Failed to send message. Check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLoad = () => setLoaded(true)

  useGSAP(() => {
    gsap.to('.tent-container > img', { opacity: 1, duration: 1.5, delay: 0.25 })
    gsap.to('.underline', { width: '100%', duration: 1.4, ease: 'expo.inout', delay: 1.5 })
  })

  return (
    <div className='contact'>
      <div className='tent-container'>
        <img className={`tent ${!loaded ? 'lazy-img' : ''}`} onLoad={handleLoad} src={tent} alt='Tent' />
        <div className='overlay-text'>How Can We Help</div>
      </div>
      <div className='information'>
        <div className='join'>
          <h2>Join the Course</h2>
          <p>Ready to start your wilderness adventure?</p>
        </div>
        <div className='enroll'>
          <h2>How to Enroll</h2>
          <p>To secure your spot, contact our instructor directly for more details and upcoming dates.</p>
        </div>
        <div className='more-info'>
          <p><i className='fas fa-phone-alt'></i> 254-681-7543</p>
          <p><i className='fas fa-envelope'></i> Bert.mccune@hotmail.com</p>
        </div>
      </div>
      <div className='form-container'>
        <div className='Contact-form'>
          <form onSubmit={handleSubmit} className='contact-form'>
            Send Us an Email
            <input name='name' placeholder='Name' onChange={handleChange} value={formData.name} />
            {errors.name && <p className='error'>{errors.name}</p>}
            <input name='email' placeholder='Email' onChange={handleChange} value={formData.email} />
            {errors.email && <p className='error'>{errors.email}</p>}
            <textarea name='message' placeholder='Message' onChange={handleChange} value={formData.message} />
            {errors.message && <p className='error'>{errors.message}</p>}
            <button className='cta-button' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
