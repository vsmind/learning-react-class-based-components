import UserFinder from "./components/UserFinder";
import UserContext from "./store/user-context";

function App() {
    const DUMMY_USERS = [
        {id: 'u1', name: 'Max'},
        {id: 'u2', name: 'Manuel'},
        {id: 'u3', name: 'Julie'},
    ];

    const userContext = {
        users: DUMMY_USERS
    };

  return (
    <UserContext.Provider value={userContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
