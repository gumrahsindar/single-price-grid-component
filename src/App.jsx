import './App.css';

function App() {
  return (
    // global container
    <div className='container grid items-center just mx-auto min-h-screen'>
      {/* inner container */}
      <div className='grid max-w-5xl md:grid-cols-2 mx-8 md:mx-auto py-7 md:p-10 '>
        {/* header area */}
        <div className='bg-white grid md:col-span-2 p-6 pt-7 pb-8 md:p-10 md:pb-10 rounded-t-md '>
          <h1 className='text-primary-cyan text-[20px] md:text-xl font-bold tracking-tight mb-6 '>
            Join our community
          </h1>
          <h3 className='mb-4 text-primary-yellow md:text-lg  leading-5 font-bold tracking-tight '>
            30-day, hassle-free money back guarantee
          </h3>
          <h5 className='text-neutral-blue text-sm md:text-base leading-7'>
            Gain access to our full library of tutorials along with expert code
            reviews. <br /> Perfect for any developers who are serious about
            honing their skills.
          </h5>
        </div>
        {/* pricing area */}
        <div className='p-6 md:p-10 bg-primary-cyan md:rounded-bl-md '>
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
        {/* introducing area */}
        <div className='p-6 md:p-10 bg-primary-cyan bg-opacity-80 rounded-b-md md:rounded-b-none md:rounded-br-md '>
          <h2 className='text-lg font-bold text-white tracking-tight'>
            Why Us
          </h2>
          <ul className='text-white text-sm opacity-75 mt-[18px] leading-[21px]'>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
