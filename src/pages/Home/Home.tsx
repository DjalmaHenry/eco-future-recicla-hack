import './home.css';

import Navbar from '../../components/Navbar/Navbar';

export function Home() {

    return(
        <div className="container">
            <Navbar />
            <p>This is home screen.</p>
        </div>
    )
}