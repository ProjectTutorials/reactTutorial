import "./App.css";
import Header from "./components/Header";
import Initialization from "./pages/1.Initialization/Initialization";
import GettingStarted from "./pages/2.GettingStarted/GettingStarted";
import Deployment from "./pages/3.Deployment/Deployment";
import CardOne from "./pages/4.Advanced/CardOne";
import Demo from "./resource/Demo";

function TutorialMain() {
  return (
    <div>
      <Header />
      <div id='1'>
        <Initialization />
      </div>
      <div id='2'>
        <Deployment />
      </div>
      <div id='3'>
        <GettingStarted />
      </div>
      <div id='4'>
        <CardOne />
      </div>
      <div id='5'>
        <Demo />
      </div>
    </div>
  );
}

export default TutorialMain;
