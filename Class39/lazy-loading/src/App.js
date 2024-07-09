import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import LargeArraySum from "./components/LargeArraySum";
import ItemList from "./components/ItemList";

// function App() {
//   const [HomePage, setHomePage] = useState(null);
//   const [AboutPage, setAboutPage] = useState(null);
//   const [ContactPage, setContactPage] = useState(null);

//   useEffect(() => {
//     import("./components/Home").then((module) => setHomePage(module.default));
//   }, []);

//   const loadHome = () => {
//     import("./components/Home").then((module) => setHomePage(module.default));
//   };

//   const loadAbout = () => {
//     import("./components/About").then((module) => setAboutPage(module.default));
//   };

//   const loadContact = () => {
//     import("./components/Contact").then((module) =>
//       setContactPage(module.default)
//     );
//   };
// console.log(HomePage, AboutPage, ContactPage)
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div>
//           <ul>
//             <li>
//               <Link to="/" onClick={loadHome}>Home</Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={loadAbout}>About</Link>
//             </li>
//             <li>
//               <Link to="/contact" onClick={loadContact}>Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <Routes>
//           <Route path="/" element={HomePage ? HomePage : <div>Loading...</div>} />
//           <Route path="/about" element={AboutPage ? AboutPage : <div>Loading...</div>} />
//           <Route path="/contact" element={ContactPage ? ContactPage : <div>Loading...</div>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  const HomePage = lazy(() => import("./components/Home"));
  const ContactPage = lazy(() => import("./components/Contact"));
  const AboutPage = lazy(() => import("./components/About"));

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={ <HomePage /> }
    //         />
    //         <Route
    //           path="/about"
    //           element={ <AboutPage /> }
    //         />
    //         <Route
    //           path="/contact"
    //           element={ <ContactPage /> }
    //         />
    //       </Routes>
    //     </Suspense>
    //   </div>
    // </BrowserRouter>
    // <LargeArraySum />
    <ItemList />
  );
}

export default App;
