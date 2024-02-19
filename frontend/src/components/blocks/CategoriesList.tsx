'use client'
import React, { useState, useEffect } from 'react';
import { getCategories } from "@/queries/getCategories";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [randomCategory, setRandomCategory] = useState(null);
  
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await getCategories();
        
        if (result.categories) {
          setCategories(result.categories);
          setRandomCategory(result.randomcat)
        } else {
          console.error('Categories property is missing');
          setRandomCategory(null);
          setCategories([]);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setRandomCategory(null);
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Categories</h2>
    
    {randomCategory ? (
      <p className="text-lg font-semibold mt-4 mb-2">Random Category: {randomCategory.type}</p>
    )  : (
       <p>none</p>
       )}
  
    {categories.length > 0 ? (
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="list-disc ml-4 mb-1">
            {category.type}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-red-500">No categories found.</p>
    )}
  </div>

  );
}
