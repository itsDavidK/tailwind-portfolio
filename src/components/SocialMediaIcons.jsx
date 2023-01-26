import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:mustify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/david-kovalchuk-a9239916b/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={linkedin}/>
            </a>

            <a className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src={instagram}/>
            </a>

        </div>
    )
}

export default SocialMediaIcons;