document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contentContainer = document.getElementById("contentContainer");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.id;
            let contentUrl = "";

            switch (tabId) {
                case "flashCardsTab":
                    contentUrl = "flashcards.html";
                    break;
                case "womenHygieneTab":
                    contentUrl = "women_hygiene.html";
                    break;
                case "successfulStoriesTab":
                    contentUrl = "success_stories.html";
                    <p><!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Successful Stories of Indian Women</title>
                        <link rel="stylesheet" href="styles.css">
                    </head>
                    <body>
                        <div class="container">
                            <h1>Successful Stories of Indian Women</h1>
                            
                            <div class="story">
                                <img src="images/ela_bhatt.jpg" alt="Ela Bhatt">
                                <div class="story-content">
                                    <h2>Ela Bhatt</h2>
                                    <p>Founder of the Self-Employed Women's Association (SEWA), Ela Bhatt dedicated her life to empowering self-employed women in India. Through SEWA, she provided a platform for women to gain financial independence and advocate for their rights.</p>
                                </div>
                            </div>
                            
                            <div class="story">
                                <img src="images/kiran_mazumdar_shaw.jpg" alt="Kiran Mazumdar-Shaw">
                                <div class="story-content">
                                    <h2>Kiran Mazumdar-Shaw</h2>
                                    <p>As the Chairperson and Managing Director of Biocon Limited, Kiran Mazumdar-Shaw is a pioneer in the biotechnology industry. Starting Biocon in 1978, she transformed it into a globally recognized biopharmaceutical company, breaking barriers in a male-dominated field.</p>
                                </div>
                            </div>
                            
                            <div class="story">
                                <img src="images/arundhati_bhattacharya.jpg" alt="Arundhati Bhattacharya">
                                <div class="story-content">
                                    <h2>Arundhati Bhattacharya</h2>
                                    <p>Arundhati Bhattacharya made history as the first woman to chair the State Bank of India (SBI). Her leadership and reforms modernized the bank, setting a precedent for women in the banking sector.</p>
                                </div>
                            </div>
                            
                            <div class="story">
                                <img src="images/indra_nooyi.jpg" alt="Indra Nooyi">
                                <div class="story-content">
                                    <h2>Indra Nooyi</h2>
                                    <p>Born in India, Indra Nooyi served as the CEO and Chairperson of PepsiCo, becoming one of the world's most powerful women in business. Her strategic vision and leadership significantly expanded the company's global footprint.</p>
                                </div>
                            </div>
                            
                            <div class="story">
                                <img src="images/kalpana_chawla.jpg" alt="Kalpana Chawla">
                                <div class="story-content">
                                    <h2>Kalpana Chawla</h2>
                                    <p>Kalpana Chawla was the first woman of Indian origin in space. As a NASA astronaut, she inspired millions with her dedication to space exploration and her achievements in aerospace engineering.</p>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                    </p>
                    break;
                case "quizTab":
                    contentUrl = "quiz.html";
                    break;
            }

            if (contentUrl) {
                fetch(contentUrl)
                    .then(response => response.text())
                    .then(html => {
                        contentContainer.innerHTML = html;
                    })
                    .catch(error => {
                        console.error("Error loading content:", error);
                        contentContainer.innerHTML = "<p>Sorry, content could not be loaded.</p>";
                    });
            }
        });
    });
});
