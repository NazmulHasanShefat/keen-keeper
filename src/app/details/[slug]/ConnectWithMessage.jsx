"use client"
import { FriendsContext } from "@/context/allContext";
import { MessageSquareMore } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const ConnectWithMessage = ({ CurrentFriend }) => {
     const { friendsConnectionStatus, setFriendsConnectionStatus } = useContext(FriendsContext);
            const handleUpdateConnectionStatus = ()=>{
                // CurrentFriend,
               const current_date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
               const communicationTime = `${new Date().getHours() % 12 || 12 }h ${new Date().getMinutes()}m ${new Date().getSeconds()}s`;
               const newStatus = [
                   ...friendsConnectionStatus,
                    {
                        communication_date: current_date,
                        communicationType: "Message",
                        personName: CurrentFriend.name,
                        communicationTime
                    }
                ];
                setFriendsConnectionStatus(newStatus);
                toast.success(`Message with ${CurrentFriend.name}`)
            }
            console.log(friendsConnectionStatus)
    return (
     <div
      onClick={handleUpdateConnectionStatus}
      className="card cursor-pointer h-max card-border shadow-md hover:translate-y-1.5 transition-[translate] duration-200">
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center font-bold text-[30px]">
              <MessageSquareMore />
            </h2>
            <p className="text-[18px] text-gray-600">Text</p>
          </div>
        </div>
    );
};

export default ConnectWithMessage;