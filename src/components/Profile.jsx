import useAuth from "../hooks/useAuth";


const Profile = () => {

    const { user } = useAuth();


    return (
        <div  >
            

            <div 
            className="hero min-h-[calc(100vh-48px)] border-2 rounded-2xl shadow-2xl font-bold" 
            style={{backgroundImage: 'url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                <div className="hero-content flex-col lg:flex-row justify-around w-3/4">
                    <div>
                        <img
                            src={user?.photoURL || "https://i.ibb.co/8dJbHdP/No-Photo-Available.webp"}
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName || 'Anonymous user name'}</h1>
                        <p className="py-6">Email: {user?.email || 'No email found!'}</p>
                        <p className="py-6">Phone: {user?.phoneNumber || 'No phone number found!'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;