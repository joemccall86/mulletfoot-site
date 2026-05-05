import logoNoText from '../assets/logo_no_text.svg';
import { schedule } from '../data/schedule';
import ScheduleCard from './ScheduleCard';
import { colors } from '../constants/theme';

const Flyer = () => {
  return (
    <div className="flyer">
      <div className="header">
        <img src={logoNoText} alt="Mullet Foot" className="logo" />
        <div>
          <div className="logo-text">
            Mullet <span className="highlight" style={{ color: colors.neonGreen }}>Foot</span>
          </div>
          <div className="brand-text">Miles n Mugs</div>
          <div className="tagline">Party in the back, pace in the front</div>
        </div>
      </div>

      <div className="schedule">
        {schedule.map((item, i) => (
          <ScheduleCard key={i} item={item} variant="flyer" />
        ))}
      </div>

      <div className="footer">
        <div>
          <div className="cta">Join the crew</div>
          <div className="website">mulletfoot.com</div>
        </div>
        <div className="qr-container">
          <img src="/qr.png" alt="QR Code" className="qr-code" />
        </div>
      </div>
    </div>
  );
};

export default Flyer;
