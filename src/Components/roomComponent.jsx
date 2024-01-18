const RoomComponent = ({ room }) => {
  return (
    <>
      <div
        className={`bg-[url("${room.img}")] bg-cover w-full pt-[100px]  my-10 h-[500px]
        
        `}
      >
        <div className="container px-10 md:grid h-full grid-cols-2">
          <div
            className="bg-white relative h-full col-start-2 
          before:absolute before:top-0 before:left-0 before:z-10 before:content-[''] before:w-0 before:h-0  before:border-t-[100px] before:border-b-[100px] before:border-s-red-500 before:border-e-transparent
          "
          >
            <h5>{room.room}</h5>
            <p>{room.disc}</p>
            <ul className="pl-4">
              {room.items &&
                room.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className="w-[100px] h-[4px] bg-primary"></span>
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomComponent;
