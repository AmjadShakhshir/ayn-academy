import { Box, Container, Typography } from "@mui/material"
import { images } from "../constants"

const Possibility = () => {
    return (
        <Box component={'section'} className="possibility">
            <img src={images.possibility} alt="woman using IVR while playing some games" />
            <Container maxWidth="xl">
                <Box component={'div'} className="possibility-main">
                    <Typography className="possibility-span" component='span'>
                        سارع في طلب الإنضمام اليوم والتحق بدوراتنا.
                    </Typography>
                    <Typography className="possibility-title" variant="h2">
                        فرص التطور والتعلم معنا أكبر مما تتخيل
                    </Typography>
                    <Typography className="possibility-body" variant="body2">
                        حرصنا أثناء إعداد المناهج على أن تكون المادة عمليةً متينةً، وفي الوقت ذاته مفيدةً عملياً، كما حرصنا على أن تكون طريقة العرض والإعطاء مبدعة في الوسائل. لن نعتمد أسلوب التلقين في الأكاديمية، بل التدريب النشط التفاعلي، حيث ستكون لدينا مساحات واسعة من الحوارات التي نناقش فيها قضايا معاصرة مهمة، كما أننا سنعتمد على أسلوب الألعاب في تبسيط الأفكار وفي خلق جو من التحفيز والمتعة، وكذلك الأمر مع المسابقات والمناظرات. كما أن الشباب سيكونون شركاء معنا في المنصة في إعداد مشاريع ومنتجات تكون تطبيقاً لما سيتعلمونه وإضافة للمنهاج وللمنصة ككل.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Possibility