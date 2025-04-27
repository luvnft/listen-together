import React from "react";
import heroImage from "assets/hero-section.jpg";
import heroImageMobile from "assets/hero-section-mobile.jpg";
import useAuth from "context/AuthContext";
import useError from "hooks/useError";
import useMediaQuery from "hooks/useMediaQuery";
import Button from "components/Button";
import { BiLogoGoogle, BiSolidUser } from "react-icons/bi";
import { FaTiktok, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // Import social media icons

const Landing = () => {
  const isMobile = useMediaQuery();
  const { logIn, error, dismissError, logInAnonymous, isLoading } = useAuth();
  const errorComponent = useError(error, dismissError);

  return (
    <div
      style={{
        backgroundImage: `url('${isMobile ? heroImageMobile : heroImage}')`,
      }}
      className="flex flex-col items-center justify-center h-full text-center bg-center bg-cover bg-blend-overlay bg-primary"
    >
      {errorComponent}
      <div>
        <h1 className="m-3 text-5xl md:text-6xl">PLAY JERSEY.FM</h1>
        <p className="mx-3 text-base md:text-lg">
          Listen to your favorite Jersey Club music synchronously and discuss it with your
          friends.
        </p>
        <div className="flex flex-col justify-center gap-2 m-10 sm:items-center sm:flex-row text-primary md:text-lg">
          <Button
            type="secondary"
            onClick={logIn}
            className="flex items-center justify-center gap-3 py-3 font-semibold"
            disabled={isLoading === "google"}
          >
            <BiLogoGoogle className="text-2xl" />
            Sign in with Google
          </Button>
          <Button
            type="secondary"
            className="flex items-center justify-center gap-3 py-3 font-semibold"
            onClick={logInAnonymous}
            disabled={isLoading === "anon"}
          >
            <BiSolidUser className="text-2xl" />
            Sign in Anonymously
          </Button>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 flex justify-center w-full">
        <a
          target="_blank"
          href="https://www.tiktok.com/@jerseyfm" // Replace with your TikTok link
          rel="noreferrer"
          className="p-1 mx-4 my-4 text-2xl"
        >
          <FaTiktok />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/jerseyclubfm" // Replace with your Instagram link
          rel="noreferrer"
          className="p-1 mx-4 my-4 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com" // Replace with your Facebook link
          rel="noreferrer"
          className="p-1 mx-4 my-4 text-2xl"
        >
          <FaFacebookF />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/jerseyclubfm" // Replace with your X (Twitter) link
          rel="noreferrer"
          className="p-1 mx-4 my-4 text-2xl"
        >
          <FaXTwitter />
        </a>
      </footer>
    </div>
  );
};

export default Landing;
export default Landing;
