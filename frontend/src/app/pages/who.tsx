import { Box, Typography } from '@mui/material';

import { images } from '../constants';
import './who.scss';

const who = () => {
    return (
        <Box component='div' sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            marginY: '70px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'right',
                gap: '20px',
                width: '50%',
                backgroundColor: 'rgba(250,204,128, .2)',
                m: '0 5%',
                padding: '200px 50px',
                borderRadius: '50px',
            }}>
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