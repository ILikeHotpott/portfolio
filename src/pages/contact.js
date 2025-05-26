import MusicNav from "../components/MusicNav";
import SendMessage from "../components/SendMessage";
import "../globals.css";

const Contact = () => {
    return (
        <div>
            <MusicNav/>
            <div className="bg-gradient-to-br from-slate-900 via-slate-600 to-slate-400 p-8 pl-20 min-h-screen">
                <SendMessage/>
            </div>
        </div>
    );
};

export default Contact;
