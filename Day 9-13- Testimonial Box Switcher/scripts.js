const testimonial = document.querySelector(".comment");
const images = document.getElementById("image");
const namee = document.getElementById("name");
const professions = document.getElementById("profession");

let allComments = [
  {
    id: "1",
    image:
      "https://th.bing.com/th/id/OIP.VqPvGsWqGrrSoL9sw4FsJAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Prabhas",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "2",
    image:
      "https://th.bing.com/th/id/R.df6f10a13408660e4f41b4a43968178f?rik=Q0JqrAo9sA%2fw9Q&pid=ImgRaw&r=0",
    name: "Emma Watson",
    profession: "Actress",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "3",
    image:
      "https://th.bing.com/th/id/R.ab76d7a070290fa8119f0e0ff6497d88?rik=6S0Gw3vKN0bGyQ&pid=ImgRaw&r=0",
    name: "Leonardo DiCaprio",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "4",
    image:
      "https://th.bing.com/th/id/OIP.spPiCz2FZ2s7Q489SiisNAHaFh?rs=1&pid=ImgDetMain",
    name: "Taylor Swift",
    profession: "Singer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "5",
    image:
      "https://th.bing.com/th/id/R.7f74cdafb3416c87fcf605e66f4c12fd?rik=7P%2bt3AOvlY1ztQ&pid=ImgRaw&r=0",
    name: "Elon Musk",
    profession: "Entrepreneur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "6",
    image:
      "https://th.bing.com/th/id/R.01fae7a5090fa0919cf55c6f7d582f9a?rik=1VOLxy8T6hJh6w&pid=ImgRaw&r=0",
    name: "Sydney Sweeney",
    profession: "Actress",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "7",
    image:
      "https://th.bing.com/th/id/R.b64fceb7f5a2fd99e794d4250a33b6ba?rik=%2fU7sKcQMJ9DSlA&pid=ImgRaw&r=0",
    name: "Chris Hemsworth",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
];

let index = 0;

function updateTestimonial() {
  if (index >= allComments.length) {
    index = 0;
  }
  const { name, image, profession, comment } = allComments[index];
  console.log(name);

  namee.innerText = name;
  testimonial.innerText = comment;
  professions.innerText = profession;
  images.src = image;
  index++;
}

updateTestimonial();

setInterval(() => {
  updateTestimonial();
}, 8000);
