import React from "react";
import Button from "../Button/Button";

const Contenido = () => {
  const images = [
    {
      src: "https://3.bp.blogspot.com/-3jjaSJ2WFKw/XI1VrM0oSKI/AAAAAAAAOKU/JcuiRt1BJFwh7YSAbk3lwEIUYOiVNx46wCLcBGAs/s1600/72666_big.jpg",
      alt: "Image 1",
      link: "https://play.max.com/video/watch/e0da18e5-96af-45cb-aa4c-336e2bb5a768/4923f4b4-168e-4248-98ba-a5e889d3319b"
    },
    {
      src: "https://th.bing.com/th/id/R.6424ebdf88c38e78a68ef567ef7e2fef?rik=gcB6rd9GrqteXg&pid=ImgRaw&r=0",
      alt: "Image 2",
      link: "https://es.wikipedia.org/wiki/Toy_Story"
    },
    {
      src: "https://th.bing.com/th/id/R.7dfc2e1afb339eaf3ba6bd6ffe9a6391?rik=T9Rvqfv6UuO7zg&pid=ImgRaw&r=0",
      alt: "Image 3",
      link: "https://es.wikipedia.org/wiki/Cars_2"
    },
    {
      src: "https://th.bing.com/th/id/R.fcf0483f901e273b3738abf6fb9ddde1?rik=qXWpTo2jqnUx9g&pid=ImgRaw&r=0",
      alt: "Image 4",
      link: "https://es.wikipedia.org/wiki/Coraline_(pel%C3%ADcula)"
    },
    {
      src: "https://th.bing.com/th/id/OIP.SJCF9atfqyI843bODmsJ2wHaJ4?rs=1&pid=ImgDetMain",
      alt: "Image 5",
      link: "https://es.wikipedia.org/wiki/WALL%C2%B7E"
    },
    {
      src: "https://4.bp.blogspot.com/-o9AICcJxep8/W0gn_J3ebKI/AAAAAAAAAG4/uGIh5Nb6Jb4lm-0I88ZnEX5t8c0uEjk1ACLcBGAs/s1600/en-iyi-animasyon-filmleri-coco.jpg",
      alt: "Image 6",
      link: "https://es.wikipedia.org/wiki/Coco_(pel%C3%ADcula)"
    },
    {
      src: "https://th.bing.com/th/id/R.d8eb5e1a60da5b1a048f0181f986d590?rik=ZQt2Ntdobqn6jA&pid=ImgRaw&r=0",
      alt: "Image 7",
      link: "https://es.wikipedia.org/wiki/El_viaje_de_Chihiro"
    },
    {
      src: "https://i.pinimg.com/originals/1e/00/43/1e004371152f14137540277853db1d74.jpg",
      alt: "Image 8",
      link: "https://es.wikipedia.org/wiki/South_Park:_Bigger,_Longer_%26_Uncut"
    },
    {
      src: "https://m.media-amazon.com/images/I/81wP+5OtwXL._AC_SL1500_.jpg",
      alt: "Image 9",
      link: "https://es.wikipedia.org/wiki/Los_padrinos_m%C3%A1gicos:_Cazadores_de_canales"
    },
  ];

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img className="body-image" src={image.src} alt={image.alt} />
          <Button link={image.link}/>
        </div>
      ))}
    </div>
  );
}

export default Contenido;
