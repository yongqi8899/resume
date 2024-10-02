import { memo } from "react";
const Home = memo(() => {
  return (
    <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-transparant dark:bg-hero-pattern-dark">
      <h1>Home</h1>
    </div>
  );
});
export default Home;
