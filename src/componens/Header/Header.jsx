import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center mx-4 lg:mx-28">
          <h2 className="text-black text-3xl font-bold cursor-pointer">
            Recipe Calories
          </h2>

          <nav className="hidden xl:block">
            <ul className="flex gap-8 text-[#150B2B] text-lg font-normal">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Recipes</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Search</li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <label className="input input-bordered items-center gap-2 bg-gray-300 rounded-full hidden lg:flex">
              <IoSearchOutline className="text-2xl" />
              <input
                type="text"
                className=" text-black text-xl w-40"
                placeholder="Search"
              />
            </label>
            <button className="bg-green-400 p-2 rounded-full">
              <FaRegCircleUser className="text-2xl  " />
            </button>
          </div>
        </div>
      </header>

      <main className="mt-8">
        {/* <img src={bannerImg} alt="bannerImg" className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 " /> */}
        <div className="bg-[url('./images/banner.png')] w-100 h-[600px] bg-no-repeat bg-center rounded-2xl">
          <div className="text-white space-y-4 text-center pt-40 px-2">
            <h2 className="text-3xl lg:text-5xl font-bold leading-snug">
              Discover an exceptional cooking <br className="hidden lg:block" />{" "}
              class tailored for you!
            </h2>
            <p className="text-lg font-normal left-6">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding{" "}
              <br className="hidden md:block" />
              problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-8">
              <button className="btn bg-green-400 hover:bg-green-500 border border-green-400 rounded-full text-black text-lg font-semibold ">
                Explore Now
              </button>
              <button className="btn bg-white border-white rounded-full text-black text-lg font-semibold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16">
        <div className="text-center text-black space-y-4">
          <h2 className="text-4xl font-semibold">Our Recipes</h2>
          <p className="text-[#150B2B] text-lg">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget <br /> urna volutpat
            curabitur elementum mauris aenean neque.{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Header;
