import { Link } from "react-router-dom";
import blueBag from "./../../../assets/images/bluebag.svg";
import savedbyyou from "./../../../assets/images/savedbyyou.svg";
import orders from "./../../../assets/images/orders.svg";
import account from "./../../../assets/images/account.svg";
import signIn from "./../../../assets/images/signIn.svg";

import styles from "./Navbar.module.css";

const DropDownMenu = () => {
  return (
    <div className="px-5 min-h-[90px]">
      <p className="text-center text-gray-500 pt-9 pb-6">Your Bag is empty.</p>
      <nav className={styles.nav}>
        <ul className="border-t border-[#d2d2d7] mt-3 list-none">
          <li className="border-t border-[#d2d2d7]">
            <Link
              to="#"
              className="text-blue-500 block leading-[44px] px-7 no-underline whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                backgroundImage: `url(${blueBag})`,
                backgroundPosition: "-2px 11px",
                backgroundRepeat: " no-repeat",
                backgroundSize: "21px 21px",
              }}
              role="menuitem"
            >
              Bag
            </Link>
          </li>
          <li className="border-t border-[#d2d2d7]">
            <Link
              to="#"
              className="text-blue-500 block leading-[44px] px-7 no-underline whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                backgroundImage: `url(${savedbyyou})`,
                backgroundPosition: "-2px 11px",
                backgroundRepeat: " no-repeat",
                backgroundSize: "21px 21px",
              }}
              role="menuitem"
            >
              Saved Item
            </Link>
          </li>
          <li className="border-t border-[#d2d2d7]">
            <Link
              to="#"
              className="text-blue-500 block leading-[44px] px-7 no-underline whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                backgroundImage: `url(${orders})`,
                backgroundPosition: "-2px 11px",
                backgroundRepeat: " no-repeat",
                backgroundSize: "21px 21px",
              }}
              role="menuitem"
            >
              Orders
            </Link>
          </li>
          <li className="border-t border-[#d2d2d7]">
            <Link
              to="#"
              className="text-blue-500 block leading-[44px] px-7 no-underline whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                backgroundImage: `url(${account})`,
                backgroundPosition: "-2px 11px",
                backgroundRepeat: " no-repeat",
                backgroundSize: "21px 21px",
              }}
              role="menuitem"
            >
              Account
            </Link>
          </li>
          <li className="border-t border-[#d2d2d7]">
            <Link
              to="#"
              className="text-blue-500 block leading-[44px] px-7 no-underline whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                backgroundImage: `url(${signIn})`,
                backgroundPosition: "-2px 11px",
                backgroundRepeat: " no-repeat",
                backgroundSize: "21px 21px",
              }}
              role="menuitem"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropDownMenu;
