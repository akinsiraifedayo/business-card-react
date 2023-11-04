import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="info--image"/>
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--role">Frontend Developer</h3>
            <h4 className="info--website">laurasmith.website</h4>
            <div className="info--buttons">
                <button className="info--email">
                    <div className="btn-items">
                        <img src="../images/mail.png" className="info--email-icon" />
                        Email
                    </div>
                </button>
                <button className="info--linkedin">
                    <div className="btn-items">
                        <img src="../images/linkedin.png" className="info--linkedin-icon"/>
                        LinkedIn
                    </div>
                </button>
            </div>
        </div>
    )
}