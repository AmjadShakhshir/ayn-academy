import { MenuList, MenuItem } from "@mui/material";

const topics = ['الكل','علم النفس', 'تكنولوجيا', 'الأدب'];

export const Menu = ({ setTopicSort }: { setTopicSort: (topic: string) => void}) => (
    <MenuList sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: 2,
        pt: 2,
        color: '#81AFDD'
    }}>
        {topics.map((topic, index) => (
            <MenuItem key={index} onClick={() => setTopicSort(topic)}>{topic}</MenuItem>
        ))}
    </MenuList>
);