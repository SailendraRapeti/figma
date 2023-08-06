import './App.css';
import Team from './Components/Team';
import Consulting from './Components/Consulting';
import Tag from './Components/Tag';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className='container'>

      <nav className='navbar-style'>
        <h1>logo</h1>
        <div className='nav-elements'>
          <p className='nav-elements-para'>page1</p>
           <p className='nav-elements-para'>page2</p>
            <p className='nav-elements-para'>page3</p>
             <p className='nav-elements-para'>page4</p>
        </div>
        <div className='nav-element-2'>
        <MenuIcon/>
        </div>
      </nav>
    <div className='first-container'>
    
        <img  className="image" src="https://i.pinimg.com/736x/c8/ff/88/c8ff88ba5d7c2844bfbeaaa0837d1de5.jpg" alt='imagee'/>

      <div className='text-styles'>
        <h1>we are the global consultancy</h1>
        <p> Freelancers. Apply Now. High paying Remote Jobs. Build Your Career Now. Online Work Hiring. Latest Vacancies Near You. High Paying Online Hiring. Job. For Freshers And Experienced. Find Jobs. Subscribe for latest Jobs. Work From Home. Work From Jobs Available. Job Openings.</p>
        <button type="button">Read More</button>
      </div>
      </div>

      {/* second card */}
      {/* <div className='secondcard'>
        <div className='span-flex'>
        <div className='first-containerr'>
        <div>
        <p className='para'>what is </p>
        <h1 className='head'>About Us & our work</h1>
        <p className='para'>Freelancers. Apply Now. High paying Remote Jobs. Build Your Career Now. Online Work Hiring. Latest Vacancies Near You. High Paying Online Hiring. Job. For Freshers And Experienced. Find Jobs. Subscribe for latest Jobs. Work From Home. Work From Jobs Available. Job Openings.</p>
      </div>
      <div>
      <p className='para'>ehdyeheh eheh heuheh hfefhe hfeh ee fehdf fefe bhfb hbeh bhe ehe </p>
        <button>button</button>
      </div>
      </div>
      <div>
      <p className='para'>dggg</p>
      <span className='head'>156</span>
      </div>
      </div>
      <div className='card1'>
          <p>something</p>
          <h1>26</h1>
        </div>
        <div className='card2'>
          <p>cost</p>
          <h1>879</h1>
        </div>
        

      </div> */}
       <Tag/>
 
      <Team/>
    
      <Consulting/>
     
    </div>
  );
}

export default App;
