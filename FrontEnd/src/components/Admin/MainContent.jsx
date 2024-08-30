import { CiUser } from "react-icons/ci";
import { GiGoldBar } from "react-icons/gi";
import SimpleFooter from "./SimpleFooter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function MainContent() {
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let token = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const productResponse = await axios.get(
          `${import.meta.env.VITE_REACT_APP_base_url}/api/product`
        );
        const userResponse = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_base_url
          }/api/user?perPage=10&page=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(productResponse.data);
        setUsers(userResponse.data?.users);
        setIsLoading(false);
      } catch (error) {
        console.error("Get Products Error:", error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  console.log(products, "products");
  console.log(users, "users");

  return (
    <>
      <div className="main-content h-screen">
        {
          <div>
            <h3 className="text-2xl text-gray-700">
              Welcome to Admin Dashboard,{" "}
              <span className="px-3 rounded-t-2xl text-gray-100 bg-orange-400">
                {user?.firstName} {user?.lastName}
              </span>
            </h3>
            <div className="row mt-5">
              <div className="col-xl-6 col-md-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <div className="text-4xl py-3 rounded-2xl text-gray-600 text-center bg-gray-100 font-semibold">
                            {isLoading ? (
                              <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status"
                              >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                              </div>
                            ) : (
                              users?.length
                            )}
                          </div>
                          <div className="flex gap-10 items-center pt-3">
                            <div className="flex items-center">
                              <CiUser className="mx-auto" size={40} />
                            </div>
                            <span className="text-xl">Total System User</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <div className="text-4xl py-3 rounded-2xl text-gray-600 text-center bg-gray-100 font-semibold">
                            {isLoading ? (
                              <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status"
                              >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                              </div>
                            ) : (
                              products?.totalItems
                            )}
                          </div>
                          <div className="flex gap-10 items-center pt-3">
                            <div className="flex items-center">
                              <GiGoldBar className="mx-auto" size={40} />
                            </div>
                            <span className="text-xl">Total Products</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <SimpleFooter />
    </>
  );
}

export default MainContent;
