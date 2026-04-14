import FriendContextProvider from "@/context/allContext";

export default function Providers({ children }){
    return(
        <FriendContextProvider>
            { children }
        </FriendContextProvider>
    )
}