import '@styles/globals.css'
import Nav from '@components/Nav'
// import Provider from '@components/Provider'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title: 'SolveSuite',
  description: 'SolveSuite is a suite of tools to help you solve problems.'
}

const Rootlayout = ({children}) => {
  return (
    <ClerkProvider>
    <html lang='en'> 
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'> 
          <Nav />
          {children} 
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}

export default Rootlayout