import RoomComponent from "../Components/roomComponent";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      room: "Living Room",
      img: "/rooms/bedroom-img.jpg",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
    // {
    //   id: 2,
    //   room: "Bedroom",
    //   img: "/rooms/bedroom-img.jpg",
    //   items: [
    //     "Massa cras egestas laoreet montes",
    //     "dapibus eu sit etiam curabitur",
    //     "faucibus habitasse lectus vestibulum leo",
    //     "odio dolor quis maecenas faucibus vulputate pharetra",
    //     "Nulla placerat viverra",
    //     "Cursus viverra",
    //     "Vitae interdum eget",
    //     "Risus tempus elementum",
    //     "Aliquet dignissim",
    //   ],
    // },
  ];

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
        {rooms &&
          rooms.map((room) => {
            return <RoomComponent key={room.id} room={room} />;
          })}
      </div>
    </>
  );
};

export default Rooms;
