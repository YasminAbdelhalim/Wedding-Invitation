import wedding from './assets/images/w1.jpg'
import Countdown from './components/Countdown'
function App() {
  const img = wedding ;
  return ( 
    <>
    <section className="hero d-flex flex-column justify-content-start align-items-center pt-3">
         <img className="rounded-circle" src={img} alt="weddingImage"/>
         <p className="boldGreen couple ">عبدالله <span className="infinity">&</span> إسراء</p>
    </section>
    <section className="VerseSection d-flex justify-content-center align-items-center">
         <blockquote className="boldGreen fw-bold text-center w-75">﴿َ
           وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
           إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
           ﴾</blockquote>
    </section>
    <section className="InfoCard container my-1 boldGreen rounded-4 py-1">
      <div className="row text-center">

        <div className="col">
          <i className="bi bi-calendar-heart"></i>
          <p>17.7.2026</p>
        </div>

        <div className="col">
          <i className="bi bi-clock"></i>
          <p>7:00 مساءً</p>
        </div>

        <div className="col">
          <i className="bi bi-geo-alt"></i>
          <p>قاعة VIP</p>
        </div>

      </div>
    </section>
    <Countdown />

   <section className="container my-2">
      <div className="row justify-content-center">

        <div className="col-lg-8 col-md-10 col-12">

          <div className="location-card bg-white shadow-sm">

            <div className="location-info">
              

              <div className="location-text">
                <small>نحن بانتظاركم في مكان مليء بالحب والفرح<i className="bi bi-geo-alt-fill location-icon"></i></small>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/LFPijx6uaeHrQWHG9?g_st=atm"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn text-decoration-none"
            >
              <span>Location</span>
              <i className="bi bi-send-fill circle-icon"></i>
            </a>

          </div>

        </div>

      </div>
    </section>
    </>
   );
}

export default App;