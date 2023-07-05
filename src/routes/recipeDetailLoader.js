import { json } from "react-router-dom"
import { env } from 'import.meta'

export const recipeDetailLoader = async ({params}) => {
    const baseUrl = env.REACT_APP_BASE_URL;
    const apiKey = env.REACT_APP_EDAMAM_API_KEY;
    const appId = env.REACT_APP_EDAMAM_APP_ID;
    const id = params.id
    const response = await fetch(`${baseUrl}/${id}?type=public&app_id=${appId}&api_key=${apiKey}`)

    if (!response.ok) {
        throw json({message: 'Could not load page'}, {status: 500})
    } else {
        return response
    }
}