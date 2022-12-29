import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <Head className="">
          <title>London Trip</title>
          <meta
            name="description"
            content="Me and Mom's trip to London and Iceland!"
          />
          <meta
            name="keywords"
            content="Iceland, London, Queen, Buckingham, London Restaurants"
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
