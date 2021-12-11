import React from "react"

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-title">VISUAL 360</div>
      <div className="home-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem
        error dolorum provident natus eaque ducimus tempora doloremque esse
        temporibus aliquid accusamus, repellendus fugiat? Assumenda sapiente
        quis inventore reiciendis optio?
      </div>
      <img
        className="home-img"
        src="https://via.placeholder.com/150"
        alt="img"
      />
      <button className="home-btn">TOUR</button>
    </div>
  )
}
