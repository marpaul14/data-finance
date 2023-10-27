import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analaytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            mi nulla. Ut accumsan arcu non ligula porta, quis ultricies tellus
            luctus. Nulla facilisi. Phasellus luctus ligula varius leo sagittis
            vehicula. Nam malesuada pellentesque laoreet. Aliquam id erat sed
            nisl ornare pulvinar.
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
