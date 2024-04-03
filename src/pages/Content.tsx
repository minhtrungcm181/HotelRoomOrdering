import { Outlet } from "react-router-dom"

const Content = () => {
    return (
        <div className="w-full lg:flex-1 bg-gray-600 mt-14">
            <main className="p-1 ml-72 pt-10">
                
       <Outlet/>
      </main>
        </div>

    )
}