import UserList from "./UserList.jsx";
import ProductList from "./ProductList.jsx";

function MainContent({
  activeTab,
  handleEdit,
  handleDelete,
  handleAddUser,
  handleAddProduct,
}) {
  return (
    <div className="main-content">
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
