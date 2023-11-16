export default function TabButton({ children, qqq }) {

    return (
        <li>
            <button onClick={qqq}>{children}</button>
        </li>
    );
}