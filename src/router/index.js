import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: "/about", components: <About/>},
    {path: "/posts", components: <Posts/>, exact: true},
    {path: "/posts/:id", components: <PostIdPage/>, exact: true},
    {path: "/error", components: <Error/>}
]

export const publicRoutes = [
    {path: "/login", components: <Login/>, exact: true},
]