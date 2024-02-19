export async function getCategories() {
    
    const response = await fetch('http://localhost:5125/categories');
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const categories = await response.json();
  
    return categories;
    

}
