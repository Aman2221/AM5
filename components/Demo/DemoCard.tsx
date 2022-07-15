import styles from '../../styles/Demo/demo.module.css';

const DemoCard = ({data, value} : { data : string[] | undefined, value : string | number}) => {

    const chips = [
        "Consumer Electronics",
        "Subscription Service",
        "E-commerce",
        "Consumer Electronics",
        "Subscription Service",
    ]

    return (
        <>
            { data?.map((item : any,index : any) => {
                if(data){
                    return (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardTop}>
                                <div className={styles.cardLeft}>

                                </div>
                                <div className={styles.cardRight}>
                                    <div className={styles.cartRightTop}>
                                        {/* sliced the string for now but should be a link to the company page ( for good UI) */}
                                        <h2>{item.bussinessName.length > 15 ? (item.bussinessName.slice(0,20)) : (item.bussinessName)}</h2>
                                        <ul>
                                            <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 12.1917L9.8875 9.3042C10.4585 8.73312 10.8474 8.00554 11.0049 7.21346C11.1624 6.42138 11.0815 5.60038 10.7725 4.85428C10.4634 4.10817 9.94003 3.47046 9.26853 3.0218C8.59704 2.57314 7.80759 2.33366 7 2.33366C6.19241 2.33366 5.40296 2.57314 4.73146 3.0218C4.05997 3.47046 3.5366 4.10817 3.22753 4.85428C2.91846 5.60038 2.83757 6.42138 2.9951 7.21346C3.15262 8.00554 3.54148 8.73312 4.1125 9.3042L7 12.1917ZM7 13.8414L3.28767 10.129C2.55345 9.39481 2.05344 8.45935 1.85087 7.44095C1.64831 6.42255 1.75228 5.36695 2.14964 4.40764C2.547 3.44834 3.21991 2.6284 4.08326 2.05153C4.94662 1.47465 5.96165 1.16675 7 1.16675C8.03835 1.16675 9.05338 1.47465 9.91674 2.05153C10.7801 2.6284 11.453 3.44834 11.8504 4.40764C12.2477 5.36695 12.3517 6.42255 12.1491 7.44095C11.9466 8.45935 11.4466 9.39481 10.7123 10.129L7 13.8414V13.8414ZM7 7.58337C7.30942 7.58337 7.60616 7.46045 7.82496 7.24166C8.04375 7.02287 8.16667 6.72612 8.16667 6.4167C8.16667 6.10728 8.04375 5.81054 7.82496 5.59174C7.60616 5.37295 7.30942 5.25004 7 5.25004C6.69058 5.25004 6.39383 5.37295 6.17504 5.59174C5.95625 5.81054 5.83333 6.10728 5.83333 6.4167C5.83333 6.72612 5.95625 7.02287 6.17504 7.24166C6.39383 7.46045 6.69058 7.58337 7 7.58337ZM7 8.75004C6.38116 8.75004 5.78767 8.5042 5.35008 8.06662C4.9125 7.62903 4.66667 7.03554 4.66667 6.4167C4.66667 5.79786 4.9125 5.20437 5.35008 4.76679C5.78767 4.3292 6.38116 4.08337 7 4.08337C7.61884 4.08337 8.21233 4.3292 8.64992 4.76679C9.0875 5.20437 9.33333 5.79786 9.33333 6.4167C9.33333 7.03554 9.0875 7.62903 8.64992 8.06662C8.21233 8.5042 7.61884 8.75004 7 8.75004Z" fill="#191C20"/>
                                                </svg>
                                                London, UK
                                            </li>
                                            <li><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.50002 12.8333C1.50002 11.5956 1.99168 10.4086 2.86685 9.53342C3.74202 8.65825 4.929 8.16659 6.16668 8.16659C7.40436 8.16659 8.59134 8.65825 9.46651 9.53342C10.3417 10.4086 10.8333 11.5956 10.8333 12.8333H9.66668C9.66668 11.905 9.29793 11.0148 8.64156 10.3584C7.98518 9.702 7.09494 9.33325 6.16668 9.33325C5.23842 9.33325 4.34819 9.702 3.69181 10.3584C3.03543 11.0148 2.66668 11.905 2.66668 12.8333H1.50002ZM6.16668 7.58325C4.23293 7.58325 2.66668 6.017 2.66668 4.08325C2.66668 2.1495 4.23293 0.583252 6.16668 0.583252C8.10043 0.583252 9.66668 2.1495 9.66668 4.08325C9.66668 6.017 8.10043 7.58325 6.16668 7.58325ZM6.16668 6.41659C7.45585 6.41659 8.50002 5.37242 8.50002 4.08325C8.50002 2.79409 7.45585 1.74992 6.16668 1.74992C4.87752 1.74992 3.83335 2.79409 3.83335 4.08325C3.83335 5.37242 4.87752 6.41659 6.16668 6.41659ZM10.999 8.57667C11.8188 8.94588 12.5145 9.54398 13.0025 10.2991C13.4905 11.0542 13.7501 11.9342 13.75 12.8333H12.5833C12.5835 12.1589 12.3888 11.4989 12.0228 10.9325C11.6568 10.3661 11.135 9.91755 10.5201 9.64067L10.9984 8.57667H10.999ZM10.5977 1.99084C11.1854 2.23309 11.6879 2.64448 12.0414 3.1728C12.395 3.70112 12.5836 4.32256 12.5833 4.95825C12.5836 5.75878 12.2845 6.53047 11.7448 7.12173C11.2052 7.713 10.4639 8.08111 9.66668 8.15375V6.9795C10.0989 6.9176 10.4999 6.71876 10.8108 6.41219C11.1217 6.10561 11.3261 5.70744 11.394 5.27613C11.462 4.84482 11.3898 4.40309 11.1882 4.01579C10.9866 3.62849 10.6662 3.31602 10.2739 3.12425L10.5977 1.99084Z" fill="#191C20"/>
                                                </svg>
                                                50-100
                                            </li>
                                            <li><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.83334 11.6667H13.5V12.8334H1.83334V11.6667ZM3.00001 7.00008H4.16668V11.0834H3.00001V7.00008ZM5.91668 7.00008H7.08334V11.0834H5.91668V7.00008ZM8.25001 7.00008H9.41668V11.0834H8.25001V7.00008ZM11.1667 7.00008H12.3333V11.0834H11.1667V7.00008ZM1.83334 4.08342L7.66668 1.16675L13.5 4.08342V6.41675H1.83334V4.08342ZM3.00001 4.80441V5.25008H12.3333V4.80441L7.66668 2.47108L3.00001 4.80441ZM7.66668 4.66675C7.51197 4.66675 7.36359 4.60529 7.2542 4.49589C7.1448 4.3865 7.08334 4.23812 7.08334 4.08342C7.08334 3.92871 7.1448 3.78033 7.2542 3.67094C7.36359 3.56154 7.51197 3.50008 7.66668 3.50008C7.82139 3.50008 7.96976 3.56154 8.07916 3.67094C8.18855 3.78033 8.25001 3.92871 8.25001 4.08342C8.25001 4.23812 8.18855 4.3865 8.07916 4.49589C7.96976 4.60529 7.82139 4.66675 7.66668 4.66675Z" fill="#191C20"/>
                                                </svg>
                                                Education
                                            </li>
                                            <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8334 7.00008C12.8334 6.23404 12.6825 5.47549 12.3893 4.76776C12.0962 4.06003 11.6665 3.41697 11.1248 2.87529C10.5831 2.33362 9.94007 1.90394 9.23234 1.61078C8.52461 1.31763 7.76607 1.16675 7.00002 1.16675C5.45292 1.16675 3.96919 1.78133 2.87523 2.87529C1.78127 3.96925 1.16669 5.45299 1.16669 7.00008C1.16669 8.54718 1.78127 10.0309 2.87523 11.1249C3.96919 12.2188 5.45292 12.8334 7.00002 12.8334C8.54712 12.8334 10.0308 12.2188 11.1248 11.1249C12.2188 10.0309 12.8334 8.54718 12.8334 7.00008ZM11.6259 6.41675H9.91669C9.82048 5.04483 9.35043 3.72545 8.55752 2.60175C9.37213 2.89106 10.0904 3.40096 10.6321 4.07457C11.1739 4.74819 11.5179 5.55905 11.6259 6.41675ZM5.29669 7.58342H8.75002C8.60074 9.02459 7.98647 10.378 7.00002 11.4392C6.01423 10.3825 5.41405 9.02384 5.29669 7.58342ZM5.29669 6.41675C5.43254 4.98281 6.03028 3.63175 7.00002 2.56675C7.99444 3.62032 8.6101 4.97477 8.75002 6.41675H5.29669ZM5.50669 2.58425C4.70959 3.71418 4.23199 5.03817 4.12419 6.41675H2.37419C2.48438 5.54846 2.83654 4.72865 3.39045 4.05097C3.94436 3.37328 4.67769 2.86502 5.50669 2.58425ZM2.37419 7.58342H4.12419C4.22026 8.96082 4.69462 10.285 5.49502 11.4101C4.66901 11.1279 3.93868 10.6198 3.38701 9.94334C2.83534 9.2669 2.48445 8.4493 2.37419 7.58342ZM8.52835 11.4042C9.32659 10.2788 9.80624 8.95877 9.91669 7.58342H11.6375C11.5272 8.44689 11.1776 9.2623 10.6281 9.93749C10.0787 10.6127 9.35139 11.1207 8.52835 11.4042Z" fill="#191C20"/>
                                                </svg>
                                                grover.com
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.cartRightBottom}>
                                        <p>{item.bussinessDescription == '' ? ("No Description Provided") : (item.bussinessDescription)}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className={styles.cardMiddle}>
                                <div></div>
                                <div className={styles.cardMiddleDiv}>
                                    <p>{item.bussinessDescription == '' ? ("No Description Provided") : (item.bussinessDescription)}</p>
                                </div>
                            </div>
                            <div className={styles.cardBottom}>
                                <div className={styles.cardBottomLeft}>
                                    { 
                                        chips.map((item,key) => {
                                            return <button key={key} className={styles.chip}>{item}</button>
                                        })
                                    }
                                </div>
                                <div className={styles.cardBottomRight}>
                                    <button><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.41665 3.49992C7.22165 3.49992 7.95081 3.82659 8.48165 4.35159L6.99998 5.83325H10.5V2.33325L9.30415 3.52909C8.56331 2.78825 7.54248 2.33325 6.41665 2.33325C4.35748 2.33325 2.66581 3.85575 2.37998 5.83325H3.55831C3.82665 4.50325 5.00498 3.49992 6.41665 3.49992ZM9.70665 8.83159C10.0916 8.30659 10.36 7.68242 10.4533 6.99992H9.27498C9.00665 8.32992 7.82831 9.33325 6.41665 9.33325C5.61165 9.33325 4.88248 9.00659 4.35165 8.48159L5.83331 6.99992H2.33331V10.4999L3.52915 9.30408C4.26998 10.0449 5.29081 10.4999 6.41665 10.4999C7.32081 10.4999 8.15498 10.2024 8.83165 9.70658L11.6666 12.5358L12.5358 11.6666L9.70665 8.83159Z" fill="#191C20"/>
                                    </svg>
                                    Filter alike</button>
                                </div>
                            </div>
                        </div>           
                    )
                }
                else { 
                    return <h1>Empty</h1>
                }
            })}
        </>
        
    )
}

export default DemoCard