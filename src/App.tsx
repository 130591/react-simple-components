import * as React from "react";
import "./styles.css";

// import Slide, { SlideItem } from "./slide";
// import Tabs, { Tab } from "./tab";
import Modal, { refProps, ModalHeader, ModalBody, ModalFooter } from "./modal";
import { useRef, useContext } from "react";

export default function App() {
  const ref = useRef<refProps>(null);

  const handleModal = () => {
    ref.current.toggleModal();
  };

  return (
    <div style={{ width: "350px", marginTop: "30px", marginLeft: "30px" }}>
      {/* <Slide>
        <SlideItem path="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrine6TNnrG4uv_4DJDSYCuCVtB3NTmadGLVse6_xrvW09ynEG&usqp=CAU" />
        <SlideItem path="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=" />
        <SlideItem path="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrine6TNnrG4uv_4DJDSYCuCVtB3NTmadGLVse6_xrvW09ynEG&usqp=CAU" />
      </Slide> */}
      {/* <Tabs>
        <Tab label={"1"}>test 1</Tab>
        <Tab label={"2"}>test 2</Tab>
        <Tab label={"3"}>test 3</Tab>
        <Tab label={"4"}>test 4</Tab>
      </Tabs> */}
      <button onClick={() => handleModal()}>test</button>
      <Modal ref={ref}>
        <ModalHeader>header</ModalHeader>
        <ModalBody>body</ModalBody>
        <ModalFooter>
          <button>close</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
