import CookingImg from "../assets/BasedPicture.png";

const AuthPage = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen relative ">
       
      <img
        src={CookingImg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          opacity: "0.5",
        }}
      />
      <img
        src={CookingImg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          opacity: "1",
        }}
      />
      <div className=" absolute size-max inset-y-1/5 right-40 items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthPage;
