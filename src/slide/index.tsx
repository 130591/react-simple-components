import React, { useState, Children, useMemo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { SlideContainer, SlideContent, Image, Next, Prev } from "./slideStyle";

const Slide: React.FC = ({ children }) => {
  let [current, setCurrent] = useState<number>(0);

  const childrens = useMemo(() => Children.count(children), [children]);

  function nextItem() {
    if (current < childrens - 1 && current >= 0) {
      setCurrent((current += 1));
    }
  }

  function prevItem() {
    if (current < childrens && current > 0) {
      setCurrent((current -= 1));
    }
  }

  const renderSlide = () => {
    const childClone = Children.map(children, (child, i) => {
      if (current === i) {
        return React.cloneElement(child, {
          tabindex: current === i ? 0 : -1
        });
      }
    });

    return childClone;
  };

  return (
    <SlideContainer className="slide">
      <SlideContent>{renderSlide()}</SlideContent>
      <SlideContent>
        <Prev title="prev" className="prev" onClick={() => prevItem()}>
          <MdKeyboardArrowLeft />
        </Prev>
        <Next title="next" className="next" onClick={() => nextItem()}>
          <MdKeyboardArrowRight />
        </Next>
      </SlideContent>
    </SlideContainer>
  );
};

export default Slide;

export const SlideItem: React.FC = ({ path }) => {
  return <Image src={path} alt={path} />;
};
