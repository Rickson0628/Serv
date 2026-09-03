import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <div className='px-10 py-5 flex justify-between w-full shadow-xl'>
          <div className='flex justify-between  items-center gap-40'>
            <Link href={"/"} className='text-[#007AFF] font-extrabold  text-2xl'>Serv</Link>
            <div className='flex gap-5'>
              <Link href={"/login"} className='text-label'>Book a Service</Link>
              <Link href={"/register"} className='text-label'>Be a Skilled Worker</Link>
            </div>
          </div>

            <div className='flex gap-5 justify-center items-center'>
              <Link href={"/login"} className='text-label'>Log in</Link>
              <Link href={"/register"} className='btn-primary'>Sign up</Link>
            </div>
          
        </div>
      
    </nav>
  );
};

export default Navbar;