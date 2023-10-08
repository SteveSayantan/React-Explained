
const Dashboard = ({user}) => {
  return (

    <section className='section'>
      <h2>Hello,{user?.name}</h2>         {/* Using optional chaining as the initial value will be empty */}
    </section>
    
  );
};
export default Dashboard;
