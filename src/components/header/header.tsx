import { Link } from "react-router-dom";
import Signup from "@/auth/signup";
import Login from "@/auth/login";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const userName = useSelector((state: any) => state.user.name);

  return (
    <div className="w-full bg-white shadow-md h-20 p-4 flex items-center">
      <div className="w-[95%] mx-auto flex items-center justify-center">
        <div className="w-[13%]">
          <Link to="/" className="flex items-center space-x-4">
            <Avatar className="w-11 h-11">
              <AvatarImage src="logo.jpg" alt="Logo" />
            </Avatar>
            <p className="text-xl text-center py-2 font-bold text-gray-800 dark:text-white">
              Deepak <br /> Jewellers
            </p>
          </Link>
        </div>

        <div className="w-[55%] flex items-center border border-gray-300 rounded-xl p-2 ">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[22px] px-4 text-lg focus:outline-none rounded-l-full"
          />
          <button className="h-[27px] w-[30px] flex items-center justify-center bg-white rounded-full">
            <FaSearch className="text-xl text-orange-500" />
          </button>
        </div>

        <div className="flex ml-11 items-center space-x-12">
          {isLoggedIn ? (
            <div className="flex items-center space-x-12">
              <div className="flex ">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-2 items-center justify-center">
                    <FaRegCircleUser className="text-xl text-gray-700" />
                    <p className="text-lg">Account</p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Refunds</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Link
                  to="/cart"
                  className="flex gap-2 items-center justify-center"
                >
                  <button>
                    <LuShoppingCart className="text-2xl text-gray-600" />
                  </button>
                  <p className="text-lg text-gray-700">Cart</p>
                </Link>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-center">
                    <BsThreeDotsVertical className="text-2xl text-gray-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="flex items-start justify-start">
                      <CiBellOn />
                      <p>Notification</p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-start justify-start">
                      <TfiHeadphoneAlt />
                      <p>Customer Care</p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-start justify-start ">
                      <AiOutlineRise />
                      <p>Advertise</p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-start justify-start">
                      <MdOutlineFileDownload />
                      <p>Download App</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4 items-center justify-center">
              <div className="flex space-x-4">
                <Login />
                <Signup />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
