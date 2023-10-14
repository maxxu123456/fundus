import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post/Post";
import LandingPage from "./components/landing-page/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/create-post/CreatePost";
import Success from "./components/success/Success";
import Browse from "./components/browse/Browse";
import Join from "./components/join/Join";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/create", element: <CreatePost /> },
  { path: "/success", element: <Success /> },
  { path: "/browse", element: <Browse /> },
  { path: "/join/:postId", element: <Join></Join> },
]);
function App() {
  let post1 = {
    postTitle: "Need paper towel",
    postDescription:
      "We need to put paper towels inside the restroom because there's nothing",
    cost: 5.0,
    minPeople: 2,
    //hours
    maxPostTime: 12,
  };
  let post2 = {
    postTitle: "Microwave",
    postDescription: "We need microwave inside the dorm floor kitchen",
    cost: 150.0,
    minPeople: 10,
    maxPostTime: 23,
  };
  let posts = [];
  posts.push(post1);
  posts.push(post2);
  return (
    <div className="App">
      {/* {posts.map(function (post) {
        return <Post post={post}></Post>;
      })} */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
