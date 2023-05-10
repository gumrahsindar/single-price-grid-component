import './App.css';

function App() {
  return (
    // global container
    <div className='container grid items-center just mx-auto min-h-screen'>
      {/* inner container */}
      <div className='grid md:grid-cols-2 mx-8 md:mx-auto py-7 md:p-10 '>
        {/* header area */}
        <div className='bg-white grid md:col-span-2 p-6 pt-7 pb-8 md:p-10 md:pb-10 rounded-t-md drop-shadow-xl'>
          <h1 className='text-primary-cyan text-[20px] font-bold tracking-tight mb-6 '>
            Join our community
          </h1>
          <h3 className='mb-4 text-primary-yellow  leading-5 font-bold tracking-tight '>
            30-day, hassle-free money back guarantee
          </h3>
          <h5 className='text-neutral-blue text-sm leading-7'>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </h5>
        </div>
        {/* pricing area */}
        <div className='p-6 md:p-10 bg-primary-cyan rounded-bl-md drop-shadow-xl '>
          <h2 className='text-lg font-bold text-white tracking-tight'>
            Monthly Subscription
          </h2>
          <div className='flex items-center mt-[18px]'>
            <h2 className='text-2xl text-white font-bold me-3'>$29</h2>
            <h3 className='text-white opacity-50'>per month</h3>
          </div>
          <h3 className='text-white mb-7'>
            Full access for less than $1 a day
          </h3>
          <button className='py-3 px-8 w-full text-white font-bold bg-primary-yellow shadow-lg rounded-md hover:bg-opacity-90 duration-500  '>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
