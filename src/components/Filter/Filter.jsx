export default function Filter({ value, onChange }) {
  return <input type="text" name="filter" value={value} onChange={onChange} />;
}
