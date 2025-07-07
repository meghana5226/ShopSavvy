import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
    <h1 className="text-xl font-bold">🛍️ ShopSavvy</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/add-product" className="hover:underline">Add Product</Link>
    </div>
  </nav>
);

export default Navbar;