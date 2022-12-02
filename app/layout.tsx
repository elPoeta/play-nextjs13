import { Header } from '../components/header/Header';
import './globals.css'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark'>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}

export default RootLayout;