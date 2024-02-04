import PropTypes from "prop-types";
import ProductList from "../Components/ProductList";
import { useSelector } from "react-redux";
const RoomComponent = ({ room }) => {
  const roome = room
  const listproducts = useSelector(state => state.products)
  const list = listproducts.filter((item) => {
    return item.category === roome.room;
  });
  return (
    <div className="bg-semi-white pb-10">
      <div
        style={{ backgroundImage: `url('rooms/${roome.img}')` }}
        className={`bg-cover bg-no-repeat z-1 bg-center w-full pt-[100px]`}
        id={roome.room}
      >
        <div className="container px-10 lg:grid h-full grid-cols-2">
          <div
            className="bg-white relative h-full col-start-2 
          before:absolute before:top-[-30px] before:left-[-30px] before:z-10 before:content-[''] 
          before:w-0 before:h-0
          before:border-primary
          before:border-[30px]
          before:border-x-transparent
          before:border-t-transparent
          before:rotate-[-45deg]
          pt-16
          pe-2
          sm:ps-10
          ps-2
          text-lg
          "
          >
            <h5 className="text-2xl font-bold mb-3">{roome.room}</h5>
            <p className="">{roome.disc}</p>
            <ul className=" mt-3">
              {roome.items &&
                roome.items.map((item, i) => {
                  return (
                    <li key={i} className=" pb-1">
                      <span className="w-4 h-1 me-2 p-0 bg-primary inline-block"></span>
                      <span> {item}</span>
                    </li>
                  );
                })}
            </ul>
            <div className="max-sm:flex items-center justify-center">
              <button className="bg-primary py-3 px-10 mt-5 mb-10 uppercase tracking-wider text-semi-black font-semibold">
                shop {roome.room}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-10 py-10 ">
        <ProductList list={list} />
      </div>
    </div>
  );
};

RoomComponent.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    room: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    disc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default RoomComponent;
