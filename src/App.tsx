import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/components/Home";
import BlogPost from "./pages/components/Blog-Post";
import EditBlog from "./pages/components/Home/componets/EditBog";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/blog_post",
      element: <BlogPost />,
    },
    { path: "/edit_blog/:id", element: <EditBlog /> },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
