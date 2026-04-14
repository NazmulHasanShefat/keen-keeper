import Image from "next/image";

const FriendCard = ({ friend }) => {
  console.log(friend);
  return (
    <div className="shadow-md mt-10 p-3 cursor-pointer hover:translate-y-1.5 transition-[translate] duration-200 friends_card flex flex-col items-center">
      <Image
        src={friend.picture}
        height={70}
        width={70}
        alt={`${friend.name} picture`}
      />
      <h2 className="text-[20px] font-bold">{friend.name}</h2>
      <p className="text-gray-400">{friend.days_since_contact}d ago</p>
      <div className="flex items-center justify-center gap-2">
      {friend.tags.map((tag, index) => {
        return (
          <div
            key={index}
            className="py-1 my-1 rounded-full px-4 text-xs bg-green-300/50 text-gray-700"
          >{tag}</div>
        );
      })}
      </div>
      <div className="py-1 my-1 rounded-full px-4 text-xs bg-yellow-500 text-white">
        almost Due
      </div>
    </div>
  );
};

export default FriendCard;
