const testimonial = document.querySelector(".comment");
const image = document.getElementById("image");
const name = document.getElementById("name");
const profession = document.getElementById("profession");

let allComments = [
  {
    id: "1",
    image: "https://example.com/images/will-smith.jpg",
    name: "Will Smith",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "2",
    image: "https://example.com/images/emma-watson.jpg",
    name: "Emma Watson",
    profession: "Actress",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "3",
    image: "https://example.com/images/leonardo-dicaprio.jpg",
    name: "Leonardo DiCaprio",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "4",
    image: "https://example.com/images/taylor-swift.jpg",
    name: "Taylor Swift",
    profession: "Singer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "5",
    image: "https://example.com/images/elon-musk.jpg",
    name: "Elon Musk",
    profession: "Entrepreneur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "6",
    image: "https://example.com/images/serena-williams.jpg",
    name: "Serena Williams",
    profession: "Tennis Player",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "7",
    image: "https://example.com/images/chris-hemsworth.jpg",
    name: "Chris Hemsworth",
    profession: "Actor",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "8",
    image: "https://example.com/images/bill-gates.jpg",
    name: "Bill Gates",
    profession: "Entrepreneur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "9",
    image: "https://example.com/images/rihanna.jpg",
    name: "Rihanna",
    profession: "Singer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
  {
    id: "10",
    image: "https://example.com/images/michael-jordan.jpg",
    name: "Michael Jordan",
    profession: "Basketball Player",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsamtenetur ab corrupti quas! Maxime quibusdam praesentium facere eosquis dicta laborum, placeat alias saepe nesciunt unde nihil   repellendus voluptatum ullam maxime excepturi iste officia sed saepetotam sint, repudiandae, error optio possimus delectus.",
  },
];

console.log(allComments[0]);


