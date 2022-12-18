const HomePage = () => {
  console.log("Frontend");
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
export default HomePage;

export const getServerSideProps = async (ctx) => {
  console.log("Backend");
  return {
    props: {},
  };
};
