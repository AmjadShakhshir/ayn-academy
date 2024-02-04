import { MenuList, MenuItem } from "@mui/material";

const topics = ['الكل','علم نفس', 'تكنولوجيا', 'أدب'];

export const Menu = ({ setTopicSort }: { setTopicSort: (topic: string) => void}) => (
    <MenuList sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: 2,
        pt: 2
    }}>
        {topics.map((topic, index) => (
            <MenuItem key={index} onClick={() => setTopicSort(topic)}>{topic}</MenuItem>
        ))}
    </MenuList>
);