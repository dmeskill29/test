import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'SolveSuite',
  description: 'SolveSuite is a suite of tools to help you solve problems.'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'> 
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'> 
          <Nav />
          {children} 
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout