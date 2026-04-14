(
    friendsConnectionStatus.map((connectionTimeline, index) => {
      return (
        <li
          key={index}
          className="list-row grid grid-cols-12 border border-gray-200"
        >
          <div className="flex items-center gap-3 col-span-10">
            <MessageSquareMore size={30} />
            <div>
              <div className="text-base text-gray-400">
                <span className="font-bold text-gray-700">Text</span> with{" "}
                <span>Sumith</span>
              </div>
              <div className="text-xs uppercase font-normal text-gray-400">
                March 29, 2026
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center col-span-2">
            <p className="text-gray-400">11h 58m 42s</p>
          </div>
        </li>
      );
    })
  )