import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center pt-44 pb-20 items-center p-4'>
        <form method='POST' action="https://getform.io/f/890485b8-2ab3-43c4-8f8b-809287cba7b3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - pratikbokde9765@gmail.com</p>
            </div>
            <input className='bg-[#d9e0f7] p-2 text-black font-bold' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#d9e0f7] font-bold' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#d9e0f7] p-2 font-bold' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 font-bold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact