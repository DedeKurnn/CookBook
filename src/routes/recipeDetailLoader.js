import { json } from "react-router-dom"

export const recipeDetailLoader = async ({params}) => {
    const appId = '&app_id=af8f2662&app_key=8d08930086bef226d85e93b83466ed15'
    const id = params.id
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public${appId}`)

    if (!response.ok) {
        throw json({message: 'Could not load page'}, {status: 500})
    } else {
        return response
    }
}