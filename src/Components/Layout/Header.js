import { Fragment } from "react";
import mealImage from "../../assests/food.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header class="text-gray-600 body-font bg-red-500">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base  ">
            <a class="mr-5 hover:text-gray-900 text-white text-3xl">Food Katta</a>
          </nav>
          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Button Cart
            </button> */}
            <HeaderCartButton onClick={props.onShowCart} />
          </div>
        </div>
      </header>

      <div>
        <img src={mealImage} width="100%" className="h-[220px]"/>
      </div>
    </Fragment>
  );
};
export default Header;
