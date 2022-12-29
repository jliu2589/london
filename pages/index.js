import { API_URL } from '../config';
import RestaurantList from '../Components/RestaurantList';
import Layout from '../Components/Layout';

export default function Home({ data }) {
  console.log(data.data);
  return (
    <Layout>
      <div>
        <RestaurantList props={data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/api/somebody-feed-phils?populate=*`);
  const data = await res.json();

  console.log(data);

  return {
    props: { data },
    revalidate: 1,
  };
}
