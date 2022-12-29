import { API_URL } from '../config';

function RestaurantList({ props }) {
  return (
    <div className="my-4">
      {props.data.map((res) => (
        <div
          className="my-4 p-2 bg-gray-200 border-radius hover:shadow-md"
          key={res.id}
        >
          <h2 className="m-2text-xl font-bold text-center">
            {res.attributes.Restaurant}
          </h2>
          <img
            src={res.attributes.Photos.data.attributes.formats.small.url}
            alt={res.attributes.Restaurant}
          />
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
