import RoomComponent from "../Components/roomComponent";

const Rooms = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center mb-5 flex-col m-auto text-center max-w-[700px]">
          <h1 className="text-5xl font-semibold mb-5">Rooms</h1>
          <p>
            Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
            tellus aliquet tellus iaculis tempus, sollicitudin massa duis
            eleifend egestas turpis sit etiam.
          </p>
        </div>
        <RoomComponent />
      </div>
    </>
  );
};

export default Rooms;
