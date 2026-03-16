import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"

const Home = () => {

const {products,search,category} = useSelector(s=>s.products)

const filtered = products.filter(p =>
p.title.toLowerCase().includes(search.toLowerCase()) &&
(category==="all" || p.category===category)
)

return(

<div className="p-6">
 <div className="flex justify-between mb-4 text-xl">

<SearchBar/>

<Filter/>

</div>

<div className="grid grid-cols-6 gap-6 mb-2 h-50">

{filtered.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>

)

}

export default Home