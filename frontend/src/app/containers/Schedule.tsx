import { Box, Typography } from "@mui/material";
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
        <Box component='section' className="schedule">
            <Box className="schedule-heading">
                <Typography className="schedule-title1" variant="body1">
                    مدة الأكاديمية عامٌ كامل، يكون فيها التواصل الرئيسي عبر لقاءات أون لاين، تعطى فيها الدورات التدريبية، وتدار فيها اللقاءات والحوارات والفعاليات المختلفة.
                </Typography>
                <Typography className="schedule-title2" variant='h4'>
                    توزيع اللقاءات سيكون على الشكل التالي:
                </Typography>
                <Typography className="schedule-title3" variant='body2'>
                    لقاءان أسبوعياً، مدة كل لقاء ساعة ونصف وهو يتضمن حصتين تدريبيتين.
                </Typography>
            </Box>
            <Box className="schedule-container">
                {levelsData.map((item, index) =>(
                    <Box className="schedule-card" key={index}>
                        <Typography component='p' className="card-content">{item.icon}{item.text}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
  )
}

export default Levels