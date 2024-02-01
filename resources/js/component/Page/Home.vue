<template>
    <body>
        <div>
            <nav class="hamburger-nav">
                <div>
                    <ul class="nav-links">
                        <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
                        <li><a href="#education" @click.prevent="scrollTo('education')">Education</a></li>
                        <li><a href="#skills" @click.prevent="scrollTo('skills')">Skills</a></li>
                        <li><a href="#awards" @click.prevent="scrollTo('awards')">Awards</a></li>
                        <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container1" id="about">
                <div class="images-container">
                    <img class="docu" v-for="(img, index) in docu" :key="index" :src="img" />
                </div>
                <div class="container2">
                    <div class="text-container">
                        <p class="hello">Hello I'm</p>
                        <h1 class="h1">Christian Kit V. Rotairo</h1>
                        <p class="dev"> Enthusiastic front-end developer with a focus on learning and growing in HTML,
                            Bootstrap
                            5, Figma, and Vue.js 3.
                            Eager to apply creativity and passion to build user-friendly web interfaces. Developing
                            skills in PHP for dynamic web development.
                            Excited to explore and contribute to the world of front-end development.</p>
                    </div>
                </div>

            </div>


            <!-- About -->
            <div id="education" class="container3">
                <div class="know">
                    <p class="para">Know me more</p>
                </div>
                <div class="about">
                    <h1 style="font-weight: bold; margin-right: 2px">About me</h1>
                </div>

                <!-- Image -->
                <div class="row">
                    <div class="col-md-6">
                        <!-- About Me Image -->
                        <img class="about-me" style="margin-top: 5em; max-width: 100%;" v-for="(img, index) in image"
                            :key="index" :src="img" />
                    </div>
                    <div class="col-md-6">
                        <!-- Carousel -->
                        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <!-- Education -->
                                                <div class="educ">
                                                    <h1 class="education" style="font-weight: bold">Education</h1>
                                                </div>

                                                <div class="school d-flex flex-column justify-content-between">
                                                    <div class="p-3">
                                                        <div class="jugaban d-flex flex-column align-items-center">
                                                            <h5 style="text-align: center; font-weight: bold; width:auto;">
                                                                Jugaban National Highschool
                                                            </h5>
                                                            <p style="font-weight: bold">HUMSS</p>
                                                            <p>2019-2020</p>
                                                            <div class="col-md-6">
                                                                <div class="d-flex justify-content-center">
                                                                    <!-- Centering images -->
                                                                    <img class="jugaban" v-for="(img, index) in jugaban"
                                                                        :key="index" :src="img" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <!-- Education -->
                                                <div class="educ">
                                                    <h1 class="education" style="font-weight: bold">Education</h1>
                                                </div>
                                                <div class="school d-flex flex-column justify-content-between">
                                                    <div class="p-3">
                                                        <div class="jugaban d-flex flex-column align-items-center">
                                                            <h5 style="text-align: center; font-weight: bold;">
                                                                Eastern Visayas State University
                                                            </h5>
                                                            <p style="font-weight: bold;">BSIT</p>
                                                            <p>2020-Present</p>
                                                            <div class="col-md-6">
                                                                <div class="d-flex justify-content-center">
                                                                    <!-- Centering images -->
                                                                    <img class="jugaban" v-for="(img, index) in evsu"
                                                                        :key="index" :src="img" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- Skills -->
            <div id="skills" class="skills">
                <h1 style="font-weight: bold">Skills</h1>
            </div>
            <div class="d-flex justify-content-center text-center">
                <div class="skill1" style="margin-top: 2em">
                    <div class="skill-list">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-12 col-md-5">
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">HTML</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Boostrap</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">PHP</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">MySQL</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Vue</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-5 offset-md-2">
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Figma</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Slack</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">
                                                Microsoft Visual Studio Code
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Jira</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <i class="bi bi-check-circle-fill" style="margin-left: 10px"></i>
                                            <p style="margin-left: 10px">Github</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Award -->
            <div id="awards" class="skills">
                <h1 style="font-weight: bold"><i class="fa-solid fa-award"></i> Honors & Awards</h1>
            </div>
            <div class="honor d-flex justify-content-center text-center">
                <div class="award" style="margin-top: 2em">
                    <div class="skill-list">
                        <div class="container">
                            <h4 style="margin-bottom: 5px; font-weight:bold">
                                3rd IN-CAMPUS STUDENT RESEARCH CONGRESS
                            </h4>
                            <img class="awards" v-for="(img, index) in award" :key="index" :src="img" />
                        </div>
                    </div>
                </div>
            </div>


            <!-- Contact -->
            <div id="contact" class="skills">
                <h6 style="font-weight: bold; font-size: 1.5rem;">Contact</h6>
            </div>
            <div class="honor d-flex justify-content-center text-center">
                <div class="skill-list">
                    <a href="https://github.com/Christian24-r" target="_blank"><i class="bi bi-github"
                            style="margin-right: 1em; font-size: 2rem;"></i></a>
                    <a href="https://www.linkedin.com/in/christiankit-rotairo-1284072b0/" target="_blank"><i class="bi bi-linkedin"
                            style="font-size: 2rem;"></i></a>
                </div>
            </div>

        </div>
    </body>
</template>

<script>
export default {
    methods: {
        scrollTo(awards) {
            const section = document.getElementById(awards);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollTo(education) {
            const section = document.getElementById(education);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollTo(skills) {
            const section = document.getElementById(skills);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollTo(contact) {
            const section = document.getElementById(contact);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },

    },
    data() {
        return {
            docu: [
                "https://scontent.fceb1-2.fna.fbcdn.net/v/t1.6435-9/157255489_1396380234036502_956549786660149191_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHNC620Kc0fDNwz_NOnFDOl_tFnE_degW3-0WcT916BbUfaT9B1WFDUfesWVONRRa3RA-RuNCCcUmOeoXoxhJCE&_nc_ohc=n67tFaWoZz4AX_u8m21&_nc_ht=scontent.fceb1-2.fna&oh=00_AfAdlPS3YGL1ybBGL2N3c64ookqIkllKsTsg_bdd9g9uYQ&oe=65DBD1A3",
            ],
            image: [
                "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.15752-9/422107403_352277874241229_3840093655690743002_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFt2igiOSW17rwhey4t0wFmCIJkV7_eSWYIgmRXv95JZvgyJRWmWx5JbfuihyTS-JvRqSPaAqu48ROyUpgTKYak&_nc_ohc=U5V9x0cKdKcAX8qL8sV&_nc_ht=scontent.fceb1-1.fna&oh=03_AdTKmnJkFPpAzBCTkZM2nQEzRuoCzSQhfVA5Kfg7zor9Eg&oe=65E06F63",
            ],
            jugaban: [
                "https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/305805650_386742700312174_6960120178898481939_n.png?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeExyvJ8gJ0w-QAKmvIMiN2feA_3_pLYWSJ4D_f-kthZItVMLHmOIGcEhpI6-bY9Hc_m9k2fR7bHjG67JVWq30NZ&_nc_ohc=Mozg1FrYNRsAX-dG6Av&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfAa21wPyyHtgm9c7_pY2f0XG53iVY4f7PMK68Lg03WmTA&oe=65BEABB5",
            ],
            evsu: [
                "https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/237170717_10159380668691838_867040353180657182_n.png?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFrcXpN1wmnXHEdZ51_6MDOQD9vBz39oCBAP28HPf2gILMcTzNSfidR_ykDpNPLleoPANCsVAr2jYnqWcfiSME_&_nc_ohc=1MBdJcId4D0AX88WrQD&_nc_ht=scontent.fdvo1-2.fna&oh=00_AfC0HJ0GManIs49irgWjfCJzVWmBGE3Pq51UmGCc01PS-g&oe=65BE155E",
            ],
            award: [
                "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.15752-9/415953477_355871397341168_4585869114758234245_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGglnz_2EMREsSqcKdAWvT1YXQI8UKgn4BhdAjxQqCfgHtn0BgMv-qt1-xR6AGHWGqf2FzzEDkLepxVK84LW252&_nc_ohc=wYmT9tcvIqEAX_Bx8PA&_nc_ht=scontent.fceb1-1.fna&oh=03_AdSY_VWNufnS5pzPaw80nI8Bviy5gXcmn58a93mWh_MxSw&oe=65E2AB29"
            ]
        };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    background: white;
}

.container {
    max-width: 100%;
    /* Default width */
}

.awards {
    width: 25rem;
    margin-right: 1em;
    margin-left: 1em;
    margin-top: 5px;
}

.award {
    justify-content: center;
    display: flex;
    border-radius: 20px;
    margin-top: 1em;
    border-style: solid;
    height: 3%;
    width: 40em;
}


.container1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.images-container {
    margin-right: 1em;
    /* Adjust as needed */
}

.container2 {
    display: flex;
    flex-direction: column;
}

.text-container {
    text-align: center;
}

.hello,
.dev {
    margin: 1rem 0;
    /* font-size: 1.25rem; */
}

.h1 {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
}

.skill-list {
    font-size: 20px;
    margin-top: 1em;
}

.skill1 {
    justify-content: center;
    display: flex;
    border-radius: 20px;
    margin-top: 1em;
    border-style: solid;
    border-color: gray;
}

.skills {
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.jugaban {
    height: 180px;
    width: 200px;
    margin-right: 1em;
    margin-left: 1em;
    margin-top: 5px;
}

.educ {
    justify-content: center;
    display: flex;
    border-radius: 20px;
    margin-top: 2em;
    margin-left: 10em;
    text-align: center;
}

.p-3 {
    justify-content: center;
    display: flex;
    border-radius: 20px;
    margin-top: 1em;
    margin-right: 9em;
    height: 20em;
    border-style: solid;
    border-color: gray;
    width: 30em;
}

.about-me {
    width: 400px;
    height: 280px;
    border-radius: 10%;
    overflow: hidden;
    margin: 25px auto;
    justify-content: space-around;
    display: flex;
    align-items: center;
}

.para {
    color: gray;
    text-decoration-color: gray;
    font-weight: bolder;
}

.about {
    display: flex;
    justify-content: center;
    align-items: center;
}

.know {
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    font-family: "Poppins", sans-serif;
}

html {
    scroll-behavior: smooth;
}

p {
    color: rgb(85, 85, 85);
}

nav,
.nav-links {
    display: flex;
}

nav {
    justify-content: space-around;
    align-items: center;
    height: 17vh;
}

.nav-links {
    gap: 20px;
    list-style: none;
    font-size: 1.5rem;
}

a {
    color: black;
    text-decoration: none;
    text-decoration-color: white;
}

a:hover {
    color: gray;
    text-decoration-color: rgb(182, 182, 182);
}
.docu {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin: 25px auto;
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 70px;
}

@media screen and (max-width: 768px) {
    .award {
        width: 90%;
        max-width: 400px;
        height: auto;
    }

    .awards {
        height: 180px;
        width: 90%;
        margin-right: 1em;
        margin-left: 1em;
        margin-top: 5px;
        max-width: 400px;

    }

    .nav-links {
        flex-direction: row;
        align-items: flex-end;
        font-size: 1em;

    }

    .award {
        margin-top: 1em;
    }

    .skill-list {
        padding: 0 20px;
    }

    h4 {
        font-size: 1.2rem;
    }

    p {
        font-size: 0.9rem;
    }

    .text-container {
        padding: 0 20px;
    }

    .h1 {
        font-size: 1.5em;
    }

    /* .dev {
        font-size: 30px;
    } */

    .award {
        width: fit-content;
    }

    .h1 {
        font-size: 1.5rem;
    }

    .d-flex.flex-column.align-items-center {
        max-width: fit-content;
    }

    .skill1 {
        justify-content: center;
        display: flex;
        width: fit-content;
    }

    .school .p-3 {
        display: flex;
        justify-content: center;
        width: fit-content;
        margin-left: 2em;
    }

    .school {
        align-items: center;
    }

    .jugaban {
        text-align: center;
    }

    .col {
        align-items: center;
        text-align: center;
    }

    .educ {
        margin-left: 3em;
        margin-right: auto;
        max-width: 80%;
        /* Adjust the maximum width as needed */
    }


    .about-me {
        width: 15rem;
        margin-top: 5em;
        display: flex;
        justify-content: center;
    }

    .container2 .hello .h1 .dev {
        margin: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-right: 1em;
        /* font-size: 1.25rem; */
    }

    .container1 .images-container img {
        width: 200px;
        height: 200px;
        margin-top: auto;
    }



    .hamburger-nav {
        flex-direction: column;
        align-items: flex-end;
        padding: .2rem;
    }

    .logo {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .nav-links {
        flex-direction: row;
        justify-content: center;
        display: flex;
        margin-right:6px;
        text-align: center;
    }

    .hamburger-menu {
        width: 100%;
    }

    .container1 {
        flex-direction: column;
        align-items: center;
    }

    .images-container {
        margin: 0;
    }

    .container2 {
        margin: 1rem 0;
        text-align: center;
    }

    .container3 .row {
        flex-direction: column;
    }

    .about-me {
        width: 100%;
        height: auto;
    }

    .p-3 {
        margin-right: 0;
    }

    .skill1 {
        margin-top: 1em;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    .container {
        width: 95%;
    }

    h3 {
        font-size: 18px;
    }
}

@media screen and (max-width: 600px) {

    .container {
        width: 95%;
        height: auto;
    }

    h3 {
        font-size: 15px;
    }
}</style>
