import Head from "next/head"
import Header from "./Header"
import Search from "./Search"



export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <titile>{title}</titile>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico"/> 
        </Head>
        <Header/>
        <Search/>
        
        <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

Layout.defaultProps={
   titile:"Welcomet to Hoylam",
   keyword:"development, coding, programming",
   description:"The best infromation and news about development"
}
