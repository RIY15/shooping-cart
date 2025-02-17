import { useContext } from "react";
import ProductsContext  from "../context/ProductProviders";
import { UseProductContextType } from "../context/ProductProviders";

const useProducts = (): UseProductContextType => {
    return useContext(ProductsContext)  
}

export default useProducts