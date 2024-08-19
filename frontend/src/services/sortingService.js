export const fetchSortingSteps = async (array, algorithm) => {
    try {
      const response = await fetch('http://localhost:8080/sort', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ array, algorithm }),
      });
  
      if (!response.ok) {
        throw new Error('Error fetching sorting steps');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching sorting steps:', error);
      return [];
    }
  };
  