import { RouterProvider } from "react-router-dom"
import { RecipeContextProvider } from "./context"
import router from "./routes"

const App = () => {
  return (
    <RecipeContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </RecipeContextProvider>
  )
}

export default App