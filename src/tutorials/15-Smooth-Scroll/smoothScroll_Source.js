import Navbar from './Navbar_1'
function App() {
    /* 
        Coding Addict- https://youtu.be/yg9We54OxmE , Kevin Powell- https://youtu.be/iGUSTyG-CYw

        It is quite similar to the approach used to implement smooth scroll in vanilla JS

        1. First, we have to provide the 'id' attribute to every section

        2. After that, we have to use <a href='#id'></a> to navigate to that particular section.

        3. And obviously, we need to add `html{scroll-behavior:smooth}` to our css file. 
        
        That's all!!

        Further, if we have a sticky navbar and the navbar covers the actual content while scrolling, there are three ways we can handle that

            i. If navbar already has some default height, then we can directly set `html{scroll-behavior:smooth;scroll-padding-top: <Height> px}`.

            ii. Otherwise, we can use the vanilla js approach (checkout Navbar_1.js)

            iii. Otherwise, using hooks (checkout Navbar_2.js)
       

    */

    
  return (
    <main id='home'>
      <Navbar />
      <section className='home'>
        <h1>home</h1>
      </section>
      <section className='about' id='about'>
        <h1>about</h1>
      </section>
      <section className='projects' id='projects'>
        <h1>projects</h1>
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
      </section>
      <section className='rest'></section>
    </main>
  )
}

export default App