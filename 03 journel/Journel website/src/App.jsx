export default function App (){
  return (
  <>
  <Header/>
  <MainContent/>
  </>
  )
}

function Header() {
  return(
  <header>
    <img src="earth.png" alt="earth" />
    <h1>my travel journel.</h1>
  </header>
  )
}

function MainContent(){
  return(
    <article>
      <img id="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
      <div>
        <img id="placeholder" src="placeholder.png" alt="" />
        <span>Japan</span>
        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
      </div>
    </article>
  )
}