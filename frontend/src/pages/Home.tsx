// import Button from '@/shared/Button';
// import { useNavigate } from 'react-router-dom';

// // ... other imports ...

// const Home: React.FC = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // If no token, redirect to login
//       navigate('/login');
//     } else {
//       // If authenticated, go to events
//       navigate('/events');
//     }
//   };

//   return (
//     // ... existing JSX ...
//     <Button 
//       onClick={handleGetStarted}
//       text="Get Started"
//       // ... other props ...
//     />
//     // ... rest of the JSX ...
//   );
// }; 