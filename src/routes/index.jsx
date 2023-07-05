import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import RecipeDetail from "../pages/RecipeDetail";
import {recipeDetailLoader} from "./recipeDetailLoader";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'recipe/:id',
                id: 'recipe-details',
                loader: recipeDetailLoader,
                element: <RecipeDetail />
            }
        ]
    }
]);

export default router;