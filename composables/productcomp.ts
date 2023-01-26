

export const useProductById = async () => {
    const config = useRuntimeConfig();
    const route = useRoute();
  
    const { data } = await useFetch(
       
        '/api/products'
    );
    const ca=route.params.UrunDetay;
    const customFields = computed(() => {
    const ydata=data.value?.filter((t) => t.uuid==ca)
  
     return ydata
    })
   
    return {data,ca,customFields}
  };