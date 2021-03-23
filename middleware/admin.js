
export default function({store, redirect}) {

    if(!store.state.auth.loggedIn){
        return redirect('/auth/login')
    }

    if(store.state.auth.user.role == "counsellor"){
        return redirect('/dashboard/counsellor')
    }

}