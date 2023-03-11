import './Contact.css';
export const Contact = () => {
  return (
    <div className='mt-20 px-10 py-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:container lg:mx-auto'>
      <h2 className='text-4xl font-semibold place-self-center lg:text-7xl'>
        Don't be shy. Say <span className='text-main-pink'>Hello</span>
      </h2>
      <div>
        <form className=''>
          <h3 className='uppercase font-extralight text-2xl'>
            Tell Us about your project
          </h3>
          <div className='flex flex-col py-10 text-sm gap-5'>
            <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
              <input
                type='text'
                placeholder='First Name'
                className='input-style lg:w-1/2'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='input-style lg:w-1/2'
              />
            </div>
            <input
              type='email'
              placeholder='Email'
              className='input-style'
            />
            <select
              name='project'
              className='input-style appearance-none content-select bg-transparent'
            >
              <option
                value='ui'
                defaultChecked='true'
              >
                Project Type
              </option>
              <option value='ui'>UI</option>
              <option value='ux'>UX</option>
            </select>
          </div>
          <div>
            <textarea
              name=''
              id=''
              cols='30'
              rows='5'
              placeholder='About the Project'
              className='w-full input-style resize-none'
            ></textarea>
          </div>
          <button
            type='submit'
            className='px-10 py-5 bg-main-pink text-white font-medium mt-5'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
