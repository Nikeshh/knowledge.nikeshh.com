import Link from "next/link";
import { ModeToggle } from "../global/mode-toggle";
import { Badge } from "@/components/ui/badge"

const Navigation = () => {
    return (
        <div className="container relative top-15 p-4 flex items-center justify-between z-10">
            <aside>
                <span className="text-xl font-bold"> Nikeshh.</span>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <ul className="flex items-center justify-center gap-8">
                    <Link href={'#'} className="hover:text-blue-600">Home</Link>
                    <Link href={'#'} className="hover:text-blue-600">Services</Link>
                    <Link href={'#'} className="hover:text-blue-600">Blog</Link>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Badge variant="secondary">
                    <a
                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                        href="#"
                    >
                        <span className="text-gray-700 transition group-hover:text-gray-700/75">
                            Available to work
                        </span>
                        <span className="relative flex h-2 w-2">
                            <span
                                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                            ></span>
                            <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                        </span>
                    </a>
                </Badge>
                <Link
                    href={'/contact-me'}
                    className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
                >
                    Contact Me
                </Link>
                <ModeToggle />
            </aside>
        </div>
    );
};

export default Navigation