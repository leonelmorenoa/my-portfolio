import Form from "./Form";

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="w-full py-6.5">
          <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[32px] font-semibold text-[#132238] text-center">
            Let’s connect
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
