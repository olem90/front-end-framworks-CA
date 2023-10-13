import { FooterStyle } from "./Footer.styles.jsx";
import React, { useEffect } from "react";

export function Footer() {
    

    useEffect(() => {
        const scrollToTopButton = document.querySelector(".scroll-to-top");
        
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 200) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    })

    

    return (
        <FooterStyle>
            <p>Contact Us</p>
            <div>
               <i className="scroll-to-top fas fa-arrow-up"></i>
            </div>
        </FooterStyle>
    );
}

