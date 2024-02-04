import { Box, Typography } from '@mui/material'

const Future = () => {
  return (
    <Box
        sx={{
        backgroundColor: '#fcfcfc',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: 4,
        py: 12,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"main main main main main title1 title1 text1 text1 text1 text1"
                            "main main main main main title2 title2 text2 text2 text2 text2"
                            "main1 main1 main1 main1 main1 title3 title3 text3 text3 text3 text3"`,
        '@media (max-width:1092px)': {
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateAreas: `"main main main main main main"
                            ". title1 title1 title1 title1 ."
                            ". text1 text1 text1 text1 ."
                            ". title2 title2 title2 title2 ."
                            ". text2 text2 text2 text2 ."
                            ". main1 main1 main1 main1 ."
                            ". title3 title3 title3 title3 ."
                            ". text3 text3 text3 text3 ."`,
        },
    }}>
            <Box sx={{ gridArea: 'main' }} px={12}>
                <Typography variant='h3'>
                المستقبل أمامك الآن وليس عليك الإ أن تنظر بعينيك.
                    أخطُ خطواتك نحو النجاح اليوم واجعلها حقيقة.
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'main1' }} px={12}>
                <Typography variant='body2'>
                    سارع في طلب الإنضمام اليوم والتحق بدوراتنا.
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'title1' }}>
                <Typography
                variant='h4'
                borderTop={'5px solid #b9f6ca'}
                sx={{
                    width: '80%',
                    paddingY: '5px',
                }}>
                    لماذا عين !؟
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'text1' }}>
                <Typography variant='body2'>
                    في عالمٍ مليءٍ بالنداءات والدعوات صاخبٍ بالضجيج والتيارات تشغلنا فيه الحيرة والتساؤلات نحتاج إلى عين... عينٍ صافيةٍ عذبةٍ ننهل منها لنروي ظمأ أسئلتنا، عن الوجود والحياة، عن دورنا فيها، عن السعادة ما هي وكيف نجنيها !؟ عن الإنسان ما هو !؟ وإلى أين يسير؟
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'title2' }}>
                <Typography
                variant='h4'
                borderTop={'5px solid #b9f6ca'}
                sx={{
                    width: '80%',
                    paddingY: '5px',
                }}>
                    لماذا أيضا !؟
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'text2' }}>
                <Typography variant='body2'>
                    في عصر انفجار المعلومات وكثرة العلوم والخرافات واختلاط الحق بالهرطقات نحتاج إلى عين...عينٍ ناقدةٍ فاحصةٍ، تعلم أن أغلى ما يملكه الإنسان هو فكره، وأن أكثر ما تراه حولها هو هراء، أمّا ما يستحق أن تبني به الفكر فهو مثل تبر الذهب بين الأتربة والأوساخ، نحتاج إلى عينٍ فارزةٍ للذهب.
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'title3' }} >
                <Typography
                variant='h4'
                borderTop={'5px solid #b9f6ca'}
                sx={{
                    width: '80%',
                    paddingY: '5px',
                }}>
                    ولماذا أيضا !؟
                </Typography>
            </Box>
            <Box sx={{ gridArea: 'text3' }}>
                <Typography variant='body2'>
                    في عالمٍ كثرت فيه الأدوات وتفاوتت فيه الهمم والإمكانيات وكثرت فيه المصائب والإحباطات نحتاج إلى عين... عينٍ حالمةٍ متفائلةٍ تنظر إلى الواقع فتفهمه لتسافر إلى المستقبل، تمتلك أدوات التغيير والفهم، كما تمتلك القدرة على الحكم، فلا يغير العالم إلا الحالمون.
                </Typography>
            </Box>
        </Box>
  )
}

export default Future