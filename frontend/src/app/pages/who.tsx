import { Box, Typography } from '@mui/material';

import { images } from '../constants';
import '../assets/scss/who.scss';

const who = () => {
    return (
        <Box component='div' className='who-container'>
            <Box className='who-content'>
                <Typography variant='h3'>من نحن ؟</Typography>
                <Typography variant='body1'>
                    أكاديمية عين واحة متجددة تحتوي العديد من الدروس في مجالات متنوعة، من التطور الذاتي، لعلم النفس، لتكنولوجيا، والعديد من المجالات الأخرى الضرورية لمواكبة آخر ما توصل إليه العلم الحديث.

                    تضم الأكاديمية العديد من المتخصصين في كل المجالات ونوفر دروسنا بشكل دوري والدروس إما مسجلة او بشكل مباشر.
                </Typography>
            </Box>
            <Box sx={{
                width: '50%'
            }}>
                <img className='who-img' src={images.group_people} alt='placeholder' />
            </Box>
        </Box>
    )
}

export default who