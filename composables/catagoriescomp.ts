

export const useCategoriByname = async () => {
    const config = useRuntimeConfig();
    const route = useRoute();
  
    const { data } = await useFetch(
       
        '/api/products'
    );
    const ca=route.params.Categories;
    
   
    return {data,ca,}
  };