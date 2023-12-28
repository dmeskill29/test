// pages/home.js
import { useUser } from '@clerk/clerk-react';

export default function HomePage() {
  const { user } = useUser();

  if (!user) {
    return <p>Please log in to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>You are now logged in.</p>
    </div>
  );
}