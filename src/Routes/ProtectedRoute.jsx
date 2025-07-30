import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
    navigate("/login")
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null; 

  return children;
};

export default ProtectedRoute;
