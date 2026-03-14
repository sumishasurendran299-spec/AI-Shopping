
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Filter from "../components/Filter";

function Home() {
  const { items, search, category } = useSelector((state) => state.products);

  const filteredProducts = items.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category)
    );
  });

  return (
    <div className="p-6">

      <div className="flex gap-4 mb-6">
        <Search />
        <Filter />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
};

export default Home;