


import FirstPage from "./pages/firstPage/FirstPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import {Routes, Route} from "react-router-dom"
;
import Layout from "./components/layout/Layout";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import Blog from "./components/blog/Blog";
import LayoutBack from "./components/layout/LayoutBack";


function App() {
  return (
      <div>

        <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route path="/first" element = {<FirstPage/>}/>
          <Route path="/second" element = {<SecondPage/>}/>
          <Route path="/third" element = {<ThirdPage/>}/>
            <Route path = "blogs" element={<BlogsPage/>}/>
        </Route>
            <Route path="/" element = {<LayoutBack/>}>
                <Route path = "blogs/:blog" element={<Blog/>}/>
            </Route>



        </Routes>

      </div>
  );
}

export default App;
