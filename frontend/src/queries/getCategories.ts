import { getApiUrl } from "@/utils/NetworkUtils";

const api_url = getApiUrl();

export async function getCategories() {
    
    const response = await fetch(`${api_url}/categories`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const categories = await response.json();
  
    return categories;
    

}
