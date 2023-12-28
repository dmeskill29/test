"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";


const Nav = () => {

const { user } = useUser();

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="SolveSuite Logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">SolveSuite</p>
        </Link>
        
        <div className="flex gap-3 md:gap-5">
          {!user && (
            <>
            <Link href="/sign-in" className="outline_btn">Sign In</Link>
            <Link href="/sign-up" className="outline_btn">Sign Up</Link>
            </>
          )}
          {user && (
          <>
          <Link href="/profile" className="outline_btn">
            Profile
          </Link>
            </>)}
        </div>

        </nav>    )
} 

export default Nav
{/* Desktop Navigation
<div className="sm:flex hidden">
 (<div className="flex gap-3 md:gap-5"> 
<Link href="/create-prompt" className="black_btn">Create Post</Link> 
<button type="button" onClick={signOut} className="outline_btn">
  Sign Out
  </button>
  <Link href="/profile">
    <Image src="/assets/images/logo.svg" width={30} height={30} alt="profile" className="rounded-full"/>
    </Link>
</div>): (<> 
{providers && Object.values(providers).map((provider) => (
  <div key={provider.name}>
    <UserButton afterSignOutUrl="/"/>
  </div>
))}
</>)
</div> */}

{/* Mobile Navigation */}
{/* <div className="sm:hidden flex relative">
{session?.user ? (
  <div className="flex">
    <Image
      src="/assets/images/logo.svg"
      width={30}
      height={30}
      alt="profile"
      className="rounded-full"
      onClick={() => setToggleDropdown((prev) => !prev)}
    />

    {toggleDropdown && (
      <div className="dropdown"> 
      <Link href="/profile" 
      className="dropdown_link" 
      onClick={() => setToggleDropdown(false)}
      > 
      My Profile
      </Link> 
      <Link href="/create-prompt" 
      className="dropdown_link" 
      onClick={() => setToggleDropdown(false)}
      > 
      Create Prompt
      </Link> 
      <button type="button" onClick={() => {setToggleDropdown(false);
      signOut()} } className="mt-5 w-full black_btn">Sign Out</button>
      </div> 
    )}
  </div>
) : (
  <> 
    {providers && Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </>)}

</div>
*/}
