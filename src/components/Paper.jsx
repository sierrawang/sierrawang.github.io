import { FaStar } from "react-icons/fa";


export const Paper = ({authors, title, conference, picUrl, award="", pdfUrl}) => {
    const style = {
        marginBottom: "4px",
        marginTop: "2px"
    }

    const badgeStyle = {
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundColor: 'gold',
        padding: '2px 5px',
        borderRadius: '0 0 0 5px', // Rounded corner on the bottom-left
        fontSize: '14px',
        fontWeight: 'bold',
    };

    const linkStyle = {
        textDecoration: 'none', // Removes underline
        color: 'black' // Changes color from default blue to black
    }

    return (
        <div className="paper">
            {award && <div style={badgeStyle}><FaStar/> {award}</div>}
            <img className="paper-pic" src={picUrl} alt={title}/>
            <div className="paper-info">
                <h2 style={style}>
                    <a href={pdfUrl} target="_blank" rel="noreferrer" style={linkStyle}>
                        {title}
                    </a>
                    </h2>
                <p style={style}>{authors}</p>
                <p style={style}><i>{conference}</i></p>
            </div>


        </div>
    )
}