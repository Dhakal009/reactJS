import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

function Chat() {
  const { user, token } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (token) {
      getUsers();
    }
  }, [token]);

  const getUsers = async () => {
    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-zinc-950 text-white flex">

      <aside className="w-80 border-r border-zinc-800 bg-zinc-900 flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-zinc-800">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-xl font-semibold">
                Live Chat
              </h1>

              <p className="text-sm text-zinc-400 mt-1">
                {user?.name}
              </p>
            </div>

            {/* Current user avatar */}
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-semibold">
             {user?.ProfilePicture ? (
                <img
                  src={user.ProfilePicture}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                user?.name.charAt(0).toUpperCase()
              )}

            </div>

          </div>

        </div>

        <div className="p-4">

          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-500 placeholder:text-zinc-500"
          />

        </div>


        <div className="flex-1 overflow-y-auto px-2">

          {users.map((item) => (

            <button
              key={item._id}
              onClick={() => setSelectedUser(item)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition ${
                selectedUser?._id === item._id
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-800/70"
              }`}
            >

              <div className="relative">

                <div className="w-11 h-11 rounded-full bg-zinc-700 flex items-center justify-center font-semibold">
                  {item.name.charAt(0).toUpperCase()}
                </div>

                {/* Online indicator */}
                {item.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full" />
                )}

              </div>


              <div className="min-w-0">

                <h3 className="font-medium truncate">
                  {item.name}
                </h3>

                <p className="text-xs text-zinc-500 truncate">
                  {item.email}
                </p>

              </div>

            </button>

          ))}

        </div>

      </aside>


      {/* ================= CHAT AREA ================= */}

      <main className="flex-1 flex flex-col">

        {selectedUser ? (

          <>

            {/* Chat header */}
            <header className="h-18 px-6 border-b border-zinc-800 bg-zinc-900 flex items-center">

              <div className="flex items-center gap-3">

                <div className="relative">

                  <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center font-semibold">
                    {selectedUser.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  {selectedUser.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full" />
                  )}

                </div>


                <div>

                  <h2 className="font-semibold">
                    {selectedUser.name}
                  </h2>

                  <p className="text-xs text-zinc-500">
                    {selectedUser.isOnline
                      ? "Online"
                      : "Offline"}
                  </p>

                </div>

              </div>

            </header>


            {/* Messages area */}
            <div className="flex-1 flex items-center justify-center bg-zinc-950">

              <div className="text-center">

                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-900 flex items-center justify-center text-2xl">
                  💬
                </div>

                <h3 className="text-lg font-medium">
                  Start a conversation
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  Send a message to {selectedUser.name}
                </p>

              </div>

            </div>


            {/* Message input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900">

              <div className="flex gap-3">

                <input
                  type="text"
                  placeholder={`Message ${selectedUser.name}...`}
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 placeholder:text-zinc-500"
                />

                <button
                  className="px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
                >
                  Send
                </button>

              </div>

            </div>

          </>

        ) : (

          /* Empty state */
          <div className="flex-1 flex items-center justify-center bg-zinc-950">

            <div className="text-center">

              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-zinc-900 flex items-center justify-center text-3xl">
                💬
              </div>

              <h2 className="text-2xl font-semibold">
                Welcome to Live Chat
              </h2>

              <p className="text-zinc-500 mt-2">
                Select a user to start chatting
              </p>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Chat;