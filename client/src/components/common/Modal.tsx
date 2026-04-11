const Modal = ({ children }: any) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-5 rounded">{children}</div>
    </div>
  );
};

export default Modal;
