import { Box, Container, Grid, Link, Typography } from '@mui/material'

const Why = () => {
  return (
    <Box className="why">
        <Container maxWidth="xl" className='why-container'>
        {/* Section 1 */}
        <Box component="section">
            <Grid
            container
            spacing={2}
            padding={5}
            justifyContent="center"
            alignItems="center"
            borderRadius={'22px'}>
                <Grid item xs={12} md={6} >
                    <Typography variant='h4'
                    className='why-span'> لماذا عين !؟</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='body2' className='why-subtitle'> 
                        في عالمٍ مليءٍ بالنداءات والدعوات صاخبٍ بالضجيج والتيارات تشغلنا فيه الحيرة والتساؤلات نحتاج إلى عين... عينٍ صافيةٍ عذبةٍ ننهل منها لنروي ظمأ أسئلتنا، عن الوجود والحياة، عن دورنا فيها، عن السعادة ما هي وكيف نجنيها !؟ عن الإنسان ما هو !؟ وإلى أين يسير؟
                    </Typography>
                </Grid>
                <Grid container paddingY={10}>
                    <Grid item xs={12} md={6} 
                    sx={{
                        border: '4px solid #facc80',
                        borderRadius: '22px',
                        paddingX: '10px',
                    }}>
                    <Typography variant='h2' className='why-title'>
                        فرص التطور والتعلم معنا أكبر مما تتخيل
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} paddingLeft={3} textAlign={'left'}>
                        <Link
                        variant='subtitle1'
                        href='/courses'
                        className='why-link'
                        underline='hover'
                        >
                                تصفح المكتبة
                        </Link>
                    </Grid>
                </Grid>
                <Grid container paddingBottom={2}>
                    <Grid item xs={12} md={4} paddingLeft={3}>
                        <Typography
                        variant='h4'
                        className='why-span-1'>
                            الإبداع
                        </Typography>
                        <Typography variant='body2' className='why-subtitle'>
                            مناهج منصة عين هي مناهج أصيلة، قام فريق المنصة بتأليفها وتطويرها وتحويلها إلى دورات ونشاطات وألعاب بما يحقق الفائدة والمتعة للطلاب/المتدربين.
                        </Typography>
                        </Grid>
                    <Grid item xs={12} md={4} paddingLeft={3}>
                        <Typography variant='h4'
                        className='why-span-1'>
                            العملية
                        </Typography>
                        <Typography variant='body2' className='why-subtitle'>
                            لا يوجد شيء من مناهج ودورات منصة عين ليس له تطبيق عملي، بل هي متفاعلة بشكل تام مع الواقع لفهمه بشكل أفضل وللتعامل معه ولتغييره.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                        variant='h4'
                        className='why-span-1'>
                            المنهجية
                        </Typography>
                        <Typography variant='body2' className='why-subtitle'>
                            شبر من معرفة منهجية خير من بحر من المعلومات المبعثرة، لذلك نركز في المنصة على أن تقدم المناهج معرفة حقيقية تساعد في تنظيم العقل وتزيد فاعليته، لا تشتته ولا توهمه بمعرفة مزيفة.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        </Container>
    </Box>
  )
}

export default Why