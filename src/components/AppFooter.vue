00<script>
    export default {
        name : 'AppFooter',
        mounted() {
            const script = document.createElement('script');
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
  }
    }
    
</script>

<template>
    <section class="top-footer">
        <div class="wrapper-footer">
            <div class="about">
                <img src="../assets/img/construction_logo.png" alt="">
                <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                <button class="learn-btn"><a href="#">learn more</a></button>
            </div>
            <div class="wrap">
                <h4>Latest Tweet</h4>
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Routine website maintenance is essential. Ensure that your <a href="https://twitter.com/hashtag/Avada?src=hash&amp;ref_src=twsrc%5Etfw">#Avada</a> website &amp; plugins are kept up to date. Schedule regular backups, apply patches if required. <br><br>How to Update <a href="https://t.co/jJyWoFTQJG">https://t.co/jJyWoFTQJG</a><br>Changelog <a href="https://t.co/rkVWteT7s6">https://t.co/rkVWteT7s6</a><br>Support <a href="https://t.co/ObSbGA1Q7n">https://t.co/ObSbGA1Q7n</a><a href="https://twitter.com/hashtag/WebsiteBuilder?src=hash&amp;ref_src=twsrc%5Etfw">#WebsiteBuilder</a> <a href="https://t.co/9lBjpxvVbe">pic.twitter.com/9lBjpxvVbe</a></p>&mdash; ThemeFusion (@Theme_Fusion) <a href="https://twitter.com/Theme_Fusion/status/1616103301325496321?ref_src=twsrc%5Etfw">January 19, 2023</a></blockquote> 
            </div>
            <div class="contact">
                <h4>Contact us today</h4>
                <ul>
                    <li><i class="fa-solid fa-globe"></i> 
                        Corporate Location<br>
                        1600 Amphitheatre Parkway,<br>
                        London WC1 1BA
                    </li>
                    <li><i class="fa-solid fa-house-chimney"></i>
                        Residential Location <br>
                        9521 Broadsberry Avenue <br>
                        Paddington RC7 9ZA
                    </li>
                    <li>
                        <i class="fa-solid fa-phone-flip"></i> 1.800.458.556 / 1.800.532.2112
                    </li>
                    <li>
                        <i class="fa-regular fa-envelope"></i> info@your-domain.com
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i> Monday - Friday: 9:00 AM -  6:00 PM
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i> Saturday - Sunday: 9:00 AM - 12:00 PM
                    </li>
                </ul>
            </div>
            <div class="find-us">
                <h4>find us</h4>
                <img src="../assets/img/staticmap.png" alt="">
            </div>
        </div>
    </section>
    <section class="bottom-footer">
        <div class="credits">
            <p>©COPYRIGHT 2012 - 2023 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</p>
        </div>
    </section>
</template>
<style lang="scss">
    @use '../style/partials/variables' as*;
    @use '../style/general.scss' as*;
    @import "@fortawesome/fontawesome-free/css/all.css";

    .twitter-tweet{
        height: 350px;
        padding: 0 0 0 2rem;
        overflow: scroll;
    }
    .top-footer{
        background-color: $footer-bg-color;
        width: 100%;
        padding: 2.5rem;
        .wrapper-footer{
            display: flex;
            .about{
                width: calc(100% / 4);
                p{
                    color: $text-color-primary;
                    line-height: 2;
                    padding: 1.5rem .8rem;
                }
            }
            .learn-btn{
                @include button-style;
                background-color: $button-nav-bg;
                a{
                    color: $text-color-primary;
                } 
            }
            .wrap{
                width: calc(100% / 4); 
            }
        .contact{
            width: calc(100% / 4);
            ul{
                list-style-type: none;
                
                li{
                    color: $text-color-primary;
                    padding: .5rem 0;
                }
            }
        }
        
        .find-us{
            width: calc(100% / 4);
            img{
                width: 60%;
                padding-top: 1rem;
            }
        }
    }
    
 }
    h4{
    padding-bottom: 1rem;
    color: $button-nav-bg;
    }  

    .credits{
        height: 50px;
        background-color: $little-footer-bg;
        display: flex;
        align-items: center;
        p{
            color: $text-color-primary;
            font-size: .8rem;
        }
    }
</style>