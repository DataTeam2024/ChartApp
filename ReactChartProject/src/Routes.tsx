import AIPage from "./Pages/AIPage"
import HomePage from "./Pages/HomePage"
import ScarappingPage from "./Pages/ScrappingPage"

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/AI",
        element: < AIPage />,
    },
    {
        path: "/Scrapping",
        element: <ScarappingPage />,
    },

]
export default routes