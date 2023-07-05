import { json } from "react-router-dom"

export const recipeDetailLoader = async ({params}) => {
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const apiKey = import.meta.env.VITE_REACT_APP_EDAMAM_API_KEY;
    const appId = import.meta.env.VITE_REACT_APP_EDAMAM_APP_ID;
    const id = params.id
    const response = await fetch(`${baseUrl}/${id}?type=public&app_id=${appId}&app_key=${apiKey}`)

    if (!response.ok) {
        throw json({message: 'Could not load page'}, {status: 500})
    } else {
        return response
    }
}