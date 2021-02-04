
export default function( { $axios, store, redirect} ){

    $axios.onError(error => {

        if(`${error.response.status}`.startsWith(5)) {            
            redirect("")
        }
        
        if(`${error.response.status}`.startsWith(4)) {
            store.dispatch("validation/setErrors",  error.response.data )
        }
        
        return Promise.reject(error)
    })
    
    $axios.onRequest(() => {
        store.dispatch("validation/clearErrors")
    })

}