const Modal = ({ children }) => {
  return (
    <div className="myModal">
      <div className="modalContent">{children}</div>
    </div>
  );
};

export { Modal };
