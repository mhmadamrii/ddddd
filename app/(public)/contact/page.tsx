'use client';

export default function ContactPage() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
      <p className='mb-8 text-lg'>
        If you have any questions, feel free to reach out!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Contact Form */}
        <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor='name' className='block mb-2 font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your name'
            />
          </div>
          <div>
            <label htmlFor='email' className='block mb-2 font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='you@example.com'
            />
          </div>
          <div>
            <label htmlFor='subject' className='block mb-2 font-medium'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Subject'
            />
          </div>
          <div>
            <label htmlFor='message' className='block mb-2 font-medium'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your message'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}
