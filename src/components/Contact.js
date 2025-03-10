import React, { useState } from 'react';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('http://localhost:3000/api/send-contact-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.error) {
                setFormStatus({ type: 'error', message: result.error });
            } else {
                setFormStatus({ type: 'success', message: result.message });
                e.target.reset();
            }
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Contact me
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">
                        get in touch
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-inter font-bold text-2xl mb-4">
                                Get in Touch
                            </h3>
                            <p className="text-gray-600">
                                Below is my contact information. Don't hesitate to reach out
                                to me through email or the contact form.
                            </p>
                            <p className="text-gray-600 mt-2">Thank You!</p>
                        </div>

                        <div className="space-y-6">
                            <ContactInfo
                                icon="user"
                                title="Name"
                                content="Albertha Owiredu-Owusu"
                            />
                            <ContactInfo
                                icon="map-marker-alt"
                                title="Address"
                                content="Accra, Ghana"
                            />
                            <ContactInfo
                                icon="envelope"
                                title="Email"
                                content="alberta.owusu@ashesi.edu.gh / albertaowusu434@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="font-inter font-bold text-2xl mb-6">
                            Message me
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#FF0000] text-white font-inter font-semibold py-4 rounded-lg hover:bg-[#CC0000] transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span>Sending...</span>
                                        <i className="fas fa-spinner fa-spin"></i>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <i className="fas fa-paper-plane"></i>
                                    </>
                                )}
                            </button>
                        </form>
                        {formStatus.message && (
                            <div
                                className={`mt-4 p-4 rounded-lg ${formStatus.type === 'error'
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-green-100 text-green-700'
                                    }`}
                            >
                                {formStatus.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactInfo({ icon, title, content }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <i className={`fas fa-${icon} text-[#FF0000]`}></i>
            </div>
            <div>
                <h4 className="font-inter font-semibold">{title}</h4>
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    );
}

export default Contact;