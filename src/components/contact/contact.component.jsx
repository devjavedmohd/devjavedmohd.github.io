import { useForm, ValidationError } from '@formspree/react';


const ContactUs = () => {
    const [state, handleSubmit] = useForm("manwnjwy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} method="post">
                <section className="pt-12 pb-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center">
                            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
                                <input id="name" type="text" name="name" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                                <input id="email" type="email" name="email" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                <textarea id="message" name="text" className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 p-4 mb-10" placeholder="Message" rows="4"></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                                <button type="submit" disabled={state.submitting} className="w-full h-12 text-white text-base font-semibold leading-6 rounded transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default ContactUs;
