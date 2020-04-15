import React, {
  useState,
  forwardRef,
  createRef,
  createContext,
  useImperativeHandle,
  RefForwardingComponent
} from "react";
import ReactDOM from "react-dom";

import { Dialog, Overlay } from "./style";

interface modalState {
  isActive: boolean;
}

interface modalProps {
  children: React.ReactNode;
  defaultRender: object;
}

interface contextModalProps {
  toggleModal(): void;
}

export interface refProps {
  toggleModal(): void;
}

const Modal: RefForwardingComponent<refProps, modalProps> = (props, ref) => {
  const [isActive, setIsActive] = useState<modalState["isActive"]>(false);

  function toggleModal() {
    if (isActive === true) setIsActive(false);

    if (isActive === false) {
      setIsActive(true);
    }
  }

  useImperativeHandle(ref, () => ({
    toggleModal
  }));

  const ContextProvider = createContext<contextModalProps["ToggleModal"]>(
    toggleModal
  );

  const { children } = props;

  return isActive
    ? ReactDOM.createPortal(
        <ContextProvider.Provider value={toggleModal}>
          <Overlay id="modal">
            <Dialog>{children}</Dialog>
          </Overlay>
        </ContextProvider.Provider>,
        document.body
      )
    : null;
};

export default forwardRef(Modal);
