import './style.css';

function SocailMedia() {
    return (
        <div className="social-icons">
                <button className="btn"><img src="images/facebook.png" alt="" /><span className='btn-txt'>Share on Facebook</span></button>
                <button className="btn"><img src="images/twitter.png" alt="" /><span className='btn-txt'>Share on Twitter</span></button>
                <button className="btn"><img src="images/whatsapp.png" alt="" /><span className='btn-txt'>Share on WhatsApp</span></button>
        </div>
    );
}

export default SocailMedia;