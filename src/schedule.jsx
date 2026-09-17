 import roseImage from './assets/rose.png';



export default function Schedule() {

  const schedule = [

    {

      day: 'Monday',

      type: 'Scrims',

      time: '7:00 PM - 11:00 PM',

      detail: 'Team practice and strategy review',

      className: 'schedule-competitive',

    },

    {

      day: 'Tuesday',

      type: 'Rest / Stream',

      time: '9:00 PM - 12:00 AM',

      detail: 'Recovery day with a live community stream',

      className: 'schedule-recovery',

    },

    {

      day: 'Wednesday',

      type: 'Tournament',

      time: '7:00 PM - late',

      detail: 'Tournament play and match updates',

      className: 'schedule-competitive',

    },

    {

      day: 'Thursday',

      type: 'Rest / Stream',

      time: '9:00 PM - 12:00 AM',

      detail: 'Rest, highlights, and a relaxed live stream',

      className: 'schedule-recovery',

    },

    {

      day: 'Friday',

      type: 'Scrims',

      time: '7:00 PM - 11:00 PM',

      detail: 'Focused team practice before the weekend',

      className: 'schedule-competitive',

    },

    {

      day: 'Saturday',

      type: 'Rest / Stream',

      time: '9:00 PM - 12:00 AM',

      detail: 'Community games, Q&A, and recovery',

      className: 'schedule-recovery',

    },

    {

      day: 'Sunday',

      type: 'Tournament',

      time: '7:00 PM - late',

      detail: 'Tournament day and weekly wrap-up',

      className: 'schedule-competitive',

    },

  ];



  return (

    <section id="schedule" className="schedule-section">

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-left" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-left" />

      <div className="schedule-header">

        <p className="schedule-kicker">Weekly rhythm</p>

        <h1>Schedule</h1>

        <p>Every other day is for competition. The days in between are for recovery and hanging out on stream.</p>

      </div>



      <div className="schedule-grid">

        {schedule.map((item) => (

          <article className={`schedule-card ${item.className}`} key={item.day}>

            <div className="schedule-card-topline">

              <span className="schedule-day">{item.day}</span>

              <span className="schedule-type">{item.type}</span>

            </div>

            <h2>{item.time}</h2>

            <p>{item.detail}</p>

          </article>

        ))}

      </div>



      <p className="schedule-note">Tournament links and match updates will be posted here when they are confirmed.</p>

    </section>

  );

}