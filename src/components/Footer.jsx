import { Github } from "react-bootstrap-icons"

export default function Footer () {
    const githubUrl = "https://github.com/BryanVargas90/portfolio-c10v2"
    const currentYear = new Date ().getFullYear()


    return (
        <>
        <footer>
            <p className="text-center">
            <a href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button-effect">
            <Github size="60" color="black" />
            </a>
            <small>&copy; {currentYear}</small>

            </p>
        </footer>
        
        </>
    )
}