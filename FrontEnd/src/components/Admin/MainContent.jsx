import UserList from "./UserList.jsx";
import ProductList from "./ProductList.jsx";
import { MdMenuOpen } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiGoldBar } from "react-icons/gi";

function MainContent({
  activeTab,
  handleEdit,
  handleDelete,
  handleAddUser,
  handleAddProduct,
  setShowSideBar,
  showSideBar,
}) {
  return (
    <div className="main-content">
      <button className="mb-2" onClick={() => setShowSideBar(!showSideBar)}>
        <MdMenuOpen size={40} />
      </button>
      {activeTab == null && (
        <div>
          <h3>Welcome to Admin Dashboard</h3>
          <div className="row mt-5">
            <div class="col-xl-6 col-md-6 col-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="media-body text-left">
                        <h3 class="success">156</h3>
                        <span>Total System User</span>
                      </div>
                      <div class="align-self-center">
                        <CiUser size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="media-body text-left">
                        <h3 class="success">156</h3>
                        <span>Total Products</span>
                      </div>
                      <div class="align-self-center">
                        <GiGoldBar size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "users" && (
        <UserList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleAddUser={handleAddUser}
        />
      )}
      {activeTab === "products" && (
        <ProductList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleAddProduct={handleAddProduct}
        />
      )}
    </div>
  );
}

export default MainContent;
