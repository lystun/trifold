
export default function({store, redirect}) {

    if(store.state.auth.loggedIn && store.state.auth.user.me.role == "admin"){
        return redirect('/dashboard/admin')
    }

    if(store.state.auth.loggedIn && store.state.auth.user.me.role == "counsellor"){
        return redirect('/dashboard/counsellor')
    }
}