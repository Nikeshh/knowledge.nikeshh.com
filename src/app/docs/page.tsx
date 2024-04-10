const Page = () => {
    return (
        <div data-spy="scroll" data-target="#navbar-example">
            <div className="top-head">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center col-md-12 col-12">
                            <p>🚀<span>Ship faster with beautiful components</span> <a
                                className="btn-info border-gradient border-gradient-purple border-gradient-green px-2 py-2 rounded-pill"
                                href="#">NextUI Pro <img src="/static/images/img-4.png" alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="header scrolled">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 xs-center col-sm-12 col-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"><img src="/static/images/logo.jpg" alt="" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav hidden-xs">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                v2.2.10
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">v2.2.10 <i className="fa fa-check" aria-hidden="true"></i></a>
                                                <a className="dropdown-item" href="#">v1.0.0 <i className="fa fa-repeat" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Docs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html">Components</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="blog.html">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="services.html">Figma</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="services.html">Roadmap <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="absolute right-[-10px] top-0 outline-none transition-transform group-data-[hover=true]:translate-y-0.5 [&amp;>path]:stroke-[2.5px]" width="10" height="10" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6m0 0H9m9 0v9"></path></svg></a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto ml-2 hidden-xs">
                                        <li className="nav-item active">
                                            <a className="nav-link px-1" href="#"><i className="fa fa-twitter"
                                                aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-1" href="#"><i className="fa fa-github-alt"
                                                aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-1" href="#"><i className="fa fa-github-square"
                                                aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-1" href="#"><i className="fa fa-eercast"
                                                aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <form data-toggle="modal" data-target="#exampleModal">
                                                <input type="text" className="form-control" placeholder="Quick Search..." />
                                                <button type="submit">⌃K</button>
                                            </form>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-primary" href="#"><i className="fa fa-heart" aria-hidden="true"></i>
                                                Sponsor</a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav visible-xs w-100">
                                        <li>
                                            <div className="left-div position-sticky">
                                                <div className="drop-nav">
                                                    <a className="link-list" data-toggle="collapse" href="#collapseExample"
                                                        role="button" aria-expanded="false" aria-controls="collapseExample">
                                                        Guide <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                    </a>
                                                    <div className="collapse show" id="collapseExample">
                                                        <div className="card card-body">
                                                            <ul>
                                                                <li><a href="#">Introduction</a></li>
                                                                <li><a href="#">Installation</a></li>
                                                                <li><a href="#">Design Principles</a></li>
                                                                <li><a href="#">Routing New </a><span>New</span></li>
                                                                <li><a href="#">Upgrade to v2</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="drop-nav">
                                                    <a className="link-list" data-toggle="collapse" href="#collapseExample1"
                                                        role="button" aria-expanded="false" aria-controls="collapseExample1">
                                                        Frameworks <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                    </a>
                                                    <div className="collapse show" id="collapseExample1">
                                                        <div className="card card-body">
                                                            <ul>
                                                                <li><a href="#">Next.js</a></li>
                                                                <li><a href="#">Vite</a></li>
                                                                <li><a href="#">Remix</a></li>
                                                                <li><a href="#">Astro</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="drop-nav">
                                                    <a className="link-list" data-toggle="collapse" href="#collapseExample2"
                                                        role="button" aria-expanded="false" aria-controls="collapseExample2">
                                                        Customization <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                    </a>
                                                    <div className="collapse show" id="collapseExample2">
                                                        <div className="card card-body">
                                                            <ul>
                                                                <li><a href="#">Theme</a></li>
                                                                <li><a href="#">Layout</a></li>
                                                                <li><a href="#">Customize theme</a></li>
                                                                <li><a href="#">Create theme</a></li>
                                                                <li><a href="#">Dark mode</a></li>
                                                                <li><a href="#">Override styles</a></li>
                                                                <li><a href="#">Custom variants</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="drop-nav">
                                                    <a className="link-list" data-toggle="collapse" href="#collapseExample3"
                                                        role="button" aria-expanded="false" aria-controls="collapseExample3">
                                                        Components <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                    </a>
                                                    <div className="collapse show" id="collapseExample3">
                                                        <div className="card card-body">
                                                            <ul>
                                                                <li><a href="#">Avatar</a></li>
                                                                <li><a href="#">Accordion</a></li>
                                                                <li><a href="#">Autocomplete</a> <span>New</span></li>
                                                                <li><a href="#">Badge</a></li>
                                                                <li><a href="#">Button</a></li>
                                                                <li><a href="#">Breadcrumbs</a> <span>New</span></li>
                                                                <li><a href="#">Card</a></li>
                                                                <li><a href="#">Checkbox</a></li>
                                                                <li><a href="#">Checkbox Group</a></li>
                                                                <li><a href="#">Chip</a></li>
                                                                <li><a href="#">Circular Progress</a></li>
                                                                <li><a href="#">Code</a></li>
                                                                <li><a href="#">Divider</a></li>
                                                                <li><a href="#">Dropdown</a> <span
                                                                    className="updated">Updated</span></li>
                                                                <li><a href="#">Image</a></li>
                                                                <li><a href="#">Input</a></li>
                                                                <li><a href="#">Kbd</a></li>
                                                                <li><a href="#">Link</a> <span className="updated">Updated</span>
                                                                </li>
                                                                <li><a href="#">Listbox</a> <span className="updated">Updated</span>
                                                                </li>
                                                                <li><a href="#">Modal</a></li>
                                                                <li><a href="#">Navbar</a></li>
                                                                <li><a href="#">Pagination</a></li>
                                                                <li><a href="#">Popover</a></li>
                                                                <li><a href="#">Progress</a></li>
                                                                <li><a href="#">Radio Group</a></li>
                                                                <li><a href="#">Select</a></li>
                                                                <li><a href="#">Skeleton</a></li>
                                                                <li><a href="#">Snippet</a></li>
                                                                <li><a href="#">Scroll Shadow</a></li>
                                                                <li><a href="#">Spacer</a></li>
                                                                <li><a href="#">Spinner</a></li>
                                                                <li><a href="#">Switch</a></li>
                                                                <li><a href="#">Slider</a> <span>New</span></li>
                                                                <li><a href="#">Table</a></li>
                                                                <li><a href="#">Tabs</a> <span className="updated">Updated</span>
                                                                </li>
                                                                <li><a href="#">Textarea</a> <span
                                                                    className="updated">Updated</span></li>
                                                                <li><a href="#">Tooltip</a></li>
                                                                <li><a href="#">User</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-12">
                            <div className="left-div position-sticky hidden-xs">
                                <div className="drop-nav">
                                    <a className="link-list" data-toggle="collapse" href="#collapseExample" role="button"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Guide <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </a>
                                    <div className="collapse show" id="collapseExample">
                                        <div className="card card-body">
                                            <ul>
                                                <li><a href="#">Introduction</a></li>
                                                <li><a href="#">Installation</a></li>
                                                <li><a href="#">Design Principles</a></li>
                                                <li><a href="#">Routing New </a><span>New</span></li>
                                                <li><a href="#">Upgrade to v2</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="drop-nav">
                                    <a className="link-list" data-toggle="collapse" href="#collapseExample1" role="button"
                                        aria-expanded="false" aria-controls="collapseExample1">
                                        Frameworks <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </a>
                                    <div className="collapse show" id="collapseExample1">
                                        <div className="card card-body">
                                            <ul>
                                                <li><a href="#">Next.js</a></li>
                                                <li><a href="#">Vite</a></li>
                                                <li><a href="#">Remix</a></li>
                                                <li><a href="#">Astro</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="drop-nav">
                                    <a className="link-list" data-toggle="collapse" href="#collapseExample2" role="button"
                                        aria-expanded="false" aria-controls="collapseExample2">
                                        Customization <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </a>
                                    <div className="collapse show" id="collapseExample2">
                                        <div className="card card-body">
                                            <ul>
                                                <li><a href="#">Theme</a></li>
                                                <li><a href="#">Layout</a></li>
                                                <li><a href="#">Customize theme</a></li>
                                                <li><a href="#">Create theme</a></li>
                                                <li><a href="#">Dark mode</a></li>
                                                <li><a href="#">Override styles</a></li>
                                                <li><a href="#">Custom variants</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="drop-nav">
                                    <a className="link-list" data-toggle="collapse" href="#collapseExample3" role="button"
                                        aria-expanded="false" aria-controls="collapseExample3">
                                        Components <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </a>
                                    <div className="collapse show" id="collapseExample3">
                                        <div className="card card-body">
                                            <ul>
                                                <li><a href="#">Avatar</a></li>
                                                <li><a href="#">Accordion</a></li>
                                                <li><a href="#">Autocomplete</a> <span>New</span></li>
                                                <li><a href="#">Badge</a></li>
                                                <li><a href="#">Button</a></li>
                                                <li><a href="#">Breadcrumbs</a> <span>New</span></li>
                                                <li><a href="#">Card</a></li>
                                                <li><a href="#">Checkbox</a></li>
                                                <li><a href="#">Checkbox Group</a></li>
                                                <li><a href="#">Chip</a></li>
                                                <li><a href="#">Circular Progress</a></li>
                                                <li><a href="#">Code</a></li>
                                                <li><a href="#">Divider</a></li>
                                                <li><a href="#">Dropdown</a> <span className="updated">Updated</span></li>
                                                <li><a href="#">Image</a></li>
                                                <li><a href="#">Input</a></li>
                                                <li><a href="#">Kbd</a></li>
                                                <li><a href="#">Link</a> <span className="updated">Updated</span></li>
                                                <li><a href="#">Listbox</a> <span className="updated">Updated</span></li>
                                                <li><a href="#">Modal</a></li>
                                                <li><a href="#">Navbar</a></li>
                                                <li><a href="#">Pagination</a></li>
                                                <li><a href="#">Popover</a></li>
                                                <li><a href="#">Progress</a></li>
                                                <li><a href="#">Radio Group</a></li>
                                                <li><a href="#">Select</a></li>
                                                <li><a href="#">Skeleton</a></li>
                                                <li><a href="#">Snippet</a></li>
                                                <li><a href="#">Scroll Shadow</a></li>
                                                <li><a href="#">Spacer</a></li>
                                                <li><a href="#">Spinner</a></li>
                                                <li><a href="#">Switch</a></li>
                                                <li><a href="#">Slider</a> <span>New</span></li>
                                                <li><a href="#">Table</a></li>
                                                <li><a href="#">Tabs</a> <span className="updated">Updated</span></li>
                                                <li><a href="#">Textarea</a> <span className="updated">Updated</span></li>
                                                <li><a href="#">Tooltip</a></li>
                                                <li><a href="#">User</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 scroll-content col-sm-8 col-12">
                            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                                <h2 id="list-item-1">Introduction</h2>
                                <p>Welcome to the NextUI documentation!</p>
                                <img className="border" src="/static/images/nextui-banner.webp" alt="" />
                                <h4 id="list-item-2">What is NextUI?</h4>
                                <p>NextUI is a UI library for React that helps you build beautiful and accessible user
                                    interfaces. Created on top of <a href="#">Tailwind CSS <img src="/static/images/icon-2.png"
                                        alt="" /></a> and <a href="#">React Aria. <img src="/static/images/icon-2.png"
                                            alt="" /></a></p>
                                <p>NextUI&apos;s primary goal is to streamline the development process, offering a beautiful and
                                    adaptable system design for an enhanced user experience.</p>
                                <hr />
                                <h4 id="list-item-3">FAQ</h4>
                                <h4><a className="text-white" href="#">Is NextUI a Vercel related project?</a></h4>
                                <p>No, NextUI is an independent community project and is not related to Vercel.</p>
                                <h4 id="list-item-4">How is NextUI different from TailwindCSS?</h4>
                                <ul className="faq-content">
                                    <li>TailwindCSS:</li>
                                    <p>Tailwind CSS is a CSS Framework that provides atomic CSS classes to help you style
                                        components, leaving you to handle lots of other things like accessibility, component
                                        composition, keyboard navigation, style overrides, etc.</p>
                                    <li>NextUI:</li>
                                    <p>NextUI is a UI library for React that combines the power of TailwindCSS with React Aria
                                        to provide complete components (logic and styles) for building accessible and
                                        customizable user interfaces. Since NextUI uses TailwindCSS as its style engine, you can
                                        use all TailwindCSS classes within your NextUI components, ensuring optimal compiled CSS
                                        size.</p>
                                </ul>
                                <h4 id="list-item-5">How is NextUI different from TailwindCSS components libraries?</h4>
                                <p>TailwindCSS components libraries such as <a href="#">TailwindUI <img
                                    src="/static/images/icon-2.png" alt="" /></a> , <a href="#">Flowbite <img
                                        src="/static/images/icon-2.png" alt="" /></a>, or <a href="#">Preline <img
                                            src="/static/images/icon-2.png" alt="" /></a>, just to name a few, only offer a curated
                                    selection of TailwindCSS classes to style your components. They don&apos;t provide any React
                                    specific components, logic, props, composition, or accessibility features.</p>
                                <p>In contrast to these libraries, NextUI is a complete UI library that provides a set of
                                    accessible and customizable components, hooks, and utilities.</p>
                                <h4 id="list-item-6">How NextUI deals with TailwindCSS classes conflicts?</h4>
                                <p>We created a TailwindCSS utility library called <a href="#">tailwind-variants <img
                                    src="/static/images/icon-2.png" alt="" /></a> that automatically handles TailwindCSS
                                    class conflicts. This ensures your custom classes will consistently override the default
                                    ones, eliminating any duplication.</p>
                                <h4 id="list-item-7">Does NextUI use runtime CSS?</h4>
                                <p>No. As NextUI uses TailwindCSS as its style engine, it generates CSS at build time,
                                    eliminating the need for runtime CSS. This means that NextUI is fully compatible with the
                                    latest React and Next.js versions.</p>
                                <h4 id="list-item-8">Does NextUI support TypeScript?</h4>
                                <p>Yes, NextUI is written in TypeScript and has full support for it.</p>
                                <h4 id="list-item-9">Can I use NextUI with other front-end frameworks or libraries, such as Vue
                                    or Angular?</h4>
                                <p>No, NextUI is specifically designed for React as it is built on top of React Aria. However,
                                    you can still use the NextUI components styling part with other frameworks or libraries.</p>
                                <h4 id="list-item-10">Why NextUI uses Framer Motion?</h4>
                                <p>We use <a href="#">Framer Motion <img src="/static/images/icon-2.png" alt="" /></a> to animate
                                    some components due to the complexity of the animations and their physics-based nature.
                                    Framer Motion allows us to handle these animations in a more straightforward and performant
                                    way. In addition, it is well tested and production ready.</p>
                                <hr />
                                <h4 id="list-item-11">Community</h4>
                                <p>We&apos;re excited to see the community adopt NextUI, raise issues, and provide feedback. Whether
                                    it&apos;s a feature request, bug report, or a project to showcase, please get involved!</p>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <a href="#" className="btn btn-default"><i className="fa fa-twitter" aria-hidden="true"></i>
                                            Twitter <img src="/static/images/icon-1.png" alt="" /></a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <a href="#" className="btn btn-default"><i className="fa fa-github-alt" aria-hidden="true"></i>
                                            Discord <img src="/static/images/icon-1.png" alt="" /></a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <a href="#" className="btn btn-default"><i className="fa fa-github" aria-hidden="true"></i>
                                            Github <img src="/static/images/icon-1.png" alt="" /></a>
                                    </div>
                                </div>
                                <h4 id="list-item-12">Contributing</h4>
                                <p>PRs on NextUI are always welcome, please see our <a href="#">contribution guidelines <img
                                    src="/static/images/icon-2.png" alt="" /></a> to learn how you can contribute to this
                                    project.</p>
                                <div className="row">
                                    <div className="col-lg-12 py-5 text-right col-md-12 col-12">
                                        <a href="#" className="installation">Installation <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 py-5  col-md-12 col-12">
                                        <a className="end-this" href="#">Edit this page on GitHub <img src="/static/images/icon-2.png"
                                            alt="" /></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center py-5 col-md-12 col-12">
                                        <p className="mb-0">@2024 NextUl Inc.</p>
                                        <h5>Deployed on <img src="/static/images/icon3.png" alt="" /></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-12">
                            <div className="right-div">
                                <h6 className="pl-4">On this page</h6>
                                <div id="list-example" className="list-group pl-4">
                                    <a className="list-group-item list-group-item-action scroll-btn active" href="#list-item-1">What
                                        is NextUI?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-2">FAQ</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-3">Is NextUI a
                                        Vercel related project?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-4">How is
                                        NextUI different from TailwindCSS?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-5">How is
                                        NextUI different from TailwindCSS components libraries?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-6">How NextUI
                                        deals with TailwindCSS classes conflicts?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-7">Does NextUI
                                        use runtime CSS?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-8">Does NextUI
                                        support TypeScript?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-9">Can I use
                                        NextUI with other front-end frameworks or libraries, such as Vue or Angular?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn" href="#list-item-10">Why NextUI
                                        uses Framer Motion?</a>
                                    <a className="list-group-item list-group-item-action scroll-btn"
                                        href="#list-item-11">Community</a>
                                    <a className="list-group-item list-group-item-action scroll-btn"
                                        href="#list-item-12">Contributing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a href="" className="ask" data-toggle="modal" data-target="#staticBackdrop">
                <img src="/static/images/ul.png" alt="" />
                <h5>Ask AI</h5>
            </a>
            <div className="modal fade" id="exampleModal" tabIndex={Number("-1")} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">?
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-lg-10  col-10 col-md-10">
                                        <input type="search" className="form-control" placeholder="Search documentation" />
                                    </div>
                                    <div className="col-lg-2  text-center col-2 col-md-2">
                                        <button type="submit">ESC</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-lg-12 py-5 text-center">
                                    <p>No recent searches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={Number("-1")} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><img src="/static/images/ul.png" alt="" /> NextUI Docs AI</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is a custom LLM for NextUI with access to all developer docs (nextui.org/docs) and GitHub Issues and PRs (github.com/nextui-org/nextui).</p>
                            <div className="filed">
                                <h6>EXAMPLE QUESTIONS</h6>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <a href="#" className="btn btn-default">How do I install for Next.js?</a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <a href="#" className="btn btn-default">How do I customize primary color?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="filed">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-12">
                                            <input type="text" placeholder="Ask me a question about NextUI..." />
                                        </div>
                                        <div className="col-lg-3 text-right col-md-3 col-12">
                                            <button type="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="filed py-2">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <p>powered by <a href="#">kapa.ai</a></p>
                                    </div>
                                    <div className="col-lg-6 text-right col-md-6 col-6">
                                        <p>protected by reCAPTCHA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;