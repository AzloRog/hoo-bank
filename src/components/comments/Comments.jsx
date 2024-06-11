import "./comments.css"

import avatar01 from "./public/avatar01.jpg"

const Comments = () => {
    return (
        <section className="comments">
            <div className="container comments-container">
                <div className="comments-header">
                    <div className="comments-header-title">
                        What people are saying about us
                    </div>
                    <div className="comments-header-text">
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </div>
                </div>
                <div className="comments-body">
                    <Comment 
                        text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
                        person = {{pName: "Herman Jensen", job: "Founder & Leader", img: avatar01}}
                    />
                    <Comment 
                        text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
                        person = {{pName: "Herman Jensen", job: "Founder & Leader", img: avatar01}}
                    />
                    <Comment 
                        text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
                        person = {{pName: "Herman Jensen", job: "Founder & Leader", img: avatar01}}
                    />

                </div>
            </div>
        </section>
    )
}

const Comment = ({text, person}) => {
    return (
        <div className="comment">
            <div className="comment-text">
                {text}
            </div>
            <div className="comment-person">
                <div className="comment-person-img">
                    <img src={person.img} alt={person.name} />
                </div>
                <div className="comment-person-body">
                    <div className="comment-person-body-name">{person.pName}</div>
                    <div className="comment-person-body-job">{person.job}</div>
                </div>
            </div>
        </div>
    )
}

export default Comments;