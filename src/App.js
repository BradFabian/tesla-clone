
import './App.css';
import Header from './components/Header'
import Item from './components/Item'
import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={ModelS}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={Model3}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
      
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={ModelX}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={ModelY}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
       
        ></Item>
         <Item
        title='Lowes Cost Solar Panels in America'
        desc='Money-back gurantee'
        descLink=''
        backgroundImg={Accessories}
        leftBtnText='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='false'
        
        ></Item>
      


      </div>
    </div>
  );
}

export default App;
