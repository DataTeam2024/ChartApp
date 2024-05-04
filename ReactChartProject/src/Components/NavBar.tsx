function NavBar() {
    return <nav className="bg-main-color border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse text-black">

                <span className="self-center text-3xl font-bold whitespace-nowrap text-black">HeyBanco</span>
            </a>

            <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                    <li>
                        <a href="/" className="block py-2 px-3 md:p-0  rounded md:bg-transparent  text-black" aria-current="page">DashBoard</a>
                    </li>
                    <li>
                        <a href="/AI" className="block py-2 px-3 md:p-0 text-blac rounded   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AI</a>
                    </li>
                    <li>
                        <a href="/Scrapping" className="block py-2 px-3 md:p-0 text-black rounded  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Scrapping</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default NavBar;