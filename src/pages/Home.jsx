import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1 className="mb-5">Home</h1>
            <Link to="about">About</Link>
        </div>
    );
}
