import './Tag.css';

export interface TagProps {
    label: string;
}

const Tag = ({ label }: TagProps) => (
    <p className="tagLabel">{label}</p>
)

export default Tag;