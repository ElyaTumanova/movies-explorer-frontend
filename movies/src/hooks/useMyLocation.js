import { useState,useEffect } from 'react';
import { useLocation  } from 'react-router-dom';

export function useMyLocation () {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  
  useEffect(()=>{
    setCurrentPage (location)
  }, [location]);

  return currentPage;
}
