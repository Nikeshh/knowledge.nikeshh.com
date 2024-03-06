import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer>
                <p>© 2024 NextUI Inc.</p>
                <p><Link href="#">Deployed on Vercel</Link></p>
            </footer>
        </>
    );
};

export default Footer;