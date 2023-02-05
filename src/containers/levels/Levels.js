import React from 'react'
import './levels.css'
import { Level } from '../../components';
import { FaRegCalendarAlt,FaRegClock, FaTasks } from "react-icons/fa";

const levelsData = [
    {
        text: "٢ لقاء أسبوعياً",
        icon: <FaRegCalendarAlt color='#fff' size={20} />
    },{
        text: "مدة كل لقاء ساعة ونصف",
        icon: <FaRegClock color='#fff' size={20} />
    },{
        text: "يتضمن حصتين تدريبيتين",
        icon: <FaTasks color='#fff' size={20} />
    }
]

const Levels = () => {
  return (
    <div className="ayn__levels section__padding" id='levels'>
        <div className="ayn__levels-heading">
            <p>مدة الأكاديمية عامٌ كامل، يكون فيها التواصل الرئيسي عبر لقاءات أون لاين، تعطى فيها الدورات التدريبية، وتدار فيها اللقاءات والحوارات والفعاليات المختلفة.</p>
            <h2 className="gradient__text">توزيع اللقاءات سيكون على الشكل التالي:</h2>
            <p> لقاءان أسبوعياً، مدة كل لقاء ساعة ونصف وهو يتضمن حصتين تدريبيتين.</p>
        </div>
        <div className="ayn__levels-container">
            {levelsData.map((item, index) =>(
          <Level text={item.text} icon={item.icon} key={item.icon + index} />
        ))}
        </div>
    </div>
  )
}

export default Levels