import './Header.css'
const Header = () => {
  return (
    <>
    <div>
           {/* heading */}
         <div className="heading">
         <h1>Family Wellness</h1>
         <p>MASSAGE THERAPY</p>
         </div>
       
          {/* Navabar */}
         <div className="navbar">
            {/* <div className="navbarData"> */}
            <h3 id="home">HOME</h3>
            <h3>ABOUT</h3>
            <h3>SERVICES</h3>
            <h3>FAQ</h3>
            <h3>CONTACT</h3>
            {/* </div> */}
         </div> 

        </div>
    </>
  )
}

export default Header
