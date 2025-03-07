let questions ={
    'q1':`True happiness comes from personal growth, meaningful relationships, and self-acceptance. Pursuing purpose, embracing challenges, and appreciating small moments contribute to a fulfilling and content life.`,
    'q2':`I’d relive a moment of pure joy—maybe a childhood memory, a big accomplishment, or a time spent with loved ones. Cherishing beautiful experiences keeps life meaningful.`,  
    'q3':`Success is evolving—it’s about growth, impact, and balance. While achievements matter, true success is being at peace with oneself, having strong relationships, and continuously striving to improve.`,
    'q4':`Life’s hardest lessons teach resilience, patience, and the value of time. Overcoming setbacks, learning from failures, and adapting to change shape personal strength and character.`,
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let img = this.querySelector("#toggle-img");
            let targetId = this.getAttribute("data-target"); // Get corresponding answer container
            let container = document.getElementById(targetId);

            if (!container || !img){
                console.log('either container is not present or value of img is not present');
                return;
            } 

            if (img.src.includes("icon-plus")) {
                img.src = "./assets/images/icon-minus.svg";  
                img.alt = "Collapse";

                let answer; 
                 switch (targetId) {
                    case 'q1':
                        answer= questions.q1;
                        break;
                    case 'q2':
                        answer= questions.q2;
                        break;
                    case 'q3':
                        answer= questions.q3;
                        break;
                    case 'q4':
                        answer= questions.q4;
                        break;
                    default:
                        return "Invalid question number. Please choose between 1 and 4.";
                }

                let pTag = document.createElement("p");
                pTag.innerHTML = `<span class='q1-ans' style="color: grey; font-size: 14px; padding-bottom: 5px;">
                    ${answer}
                </span>`;
                container.appendChild(pTag);

            } else {
                img.src = "./assets/images/icon-plus.svg";   
                img.alt = "Expand";
                let existingP = container.querySelector("p");
                if (existingP) {
                    existingP.remove();
                } 
            }
        });
    });
});
