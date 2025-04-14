import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // استفاده از useRef برای ذخیره initialData
  const initialDataRef = useRef(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error retrieving information. Using fallback data.');
        // استفاده از مقدار ذخیره شده در ref
        if (initialDataRef.current) {
          setData(initialDataRef.current);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // حذف initialData از dependency array

  return { data, error, loading };
};
